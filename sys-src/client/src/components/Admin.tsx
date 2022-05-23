import { Button, TextField } from '@mui/material';
import styled from '@emotion/styled';
import React, { ChangeEvent, useEffect, useState } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import AddIcon from '@mui/icons-material/Add';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';

const Admin = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [title, setTitel] = useState<string>();
    const [description, setDescription] = useState<string>();
    const [releaseDate, setReleaseDate] = useState<string>();
    const [trailerLink, setTrailerLink] = useState<string>();
    const [image, setImage] = useState<File>();
    const [preview, setPreview] = useState<string>();

    useEffect(() => {
        if (image) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result as string);
            };
            reader.readAsDataURL(image);
        } else {
            setPreview(undefined);
        }
    }, [image]);

    function handleTitleChange(title: string) {
        setTitel(title);
    }

    function handleDescriptionChange(description: string) {
        setDescription(description);
    }

    function handleDateChange(date: string) {
        setReleaseDate(date);
    }

    function handleTLinkChange(tlink: string) {
        setTrailerLink(tlink);
    }

    function handlePosterUpload(event: ChangeEvent<HTMLInputElement>) {
        const file = event.target.files![0];
        if (file != null && file.type.substring(0, 5) === 'image') {
            setImage(event.target.files![0]);
        }
    }

    function handleAddMovie() {
        console.log(title);
        console.log(description);
        console.log(releaseDate);
        console.log(trailerLink);
        setLoading(true);
    }

    const Input = styled('input')({
        display: 'none',
    });

    return (
        <>
            <div className="w-[600px] mx-auto flex flex-col flex-wrap items-center space-y-10 justify-between ">
                <h1 className="font-medium text-left leading-tight text-5xl w-[125%] mt-3">
                    FILM HINZUFÜGEN:
                </h1>
                <TextField
                    id="outlined-basic"
                    label="Titel"
                    variant="outlined"
                    className="scale-125 w-[100%]"
                    type="text"
                    onChange={(event) => {
                        handleTitleChange(event.target.value);
                    }}
                />
                <TextField
                    id="outlined-multiline-static"
                    label="Beschreibung"
                    multiline
                    rows={7}
                    sx={{ paddingTop: 1, paddingBottom: 2 }}
                    className="scale-125 w-[100%]"
                    type="text"
                    onChange={(event) => {
                        handleDescriptionChange(event.target.value);
                    }}
                />
                <TextField
                    id="date"
                    label="Erscheinungsdatum"
                    defaultValue="2000-01-01"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    className="scale-125 w-[100%]"
                    type="date"
                    onChange={(event) => {
                        handleDateChange(event.target.value);
                    }}
                />
                <TextField
                    id="outlined-basic"
                    label="Trailer-Link"
                    variant="outlined"
                    className="scale-125 w-[100%]"
                    type="text"
                    onChange={(event) => {
                        handleTLinkChange(event.target.value);
                    }}
                />

                <label
                    htmlFor="contained-button-file"
                    className="mx-auto scale-125 "
                >
                    <Input
                        accept="image/*"
                        id="contained-button-file"
                        type="file"
                        onChange={(event) => {
                            handlePosterUpload(event);
                        }}
                    />
                    <Button
                        variant="contained"
                        component="span"
                        startIcon={<InsertPhotoIcon />}
                    >
                        Bild hinzufügen
                    </Button>
                </label>
                <img src={preview} className="w-[300px]" />

                <div
                    className="w-[115%]"
                    style={{ marginBottom: 100, marginTop: 70 }}
                >
                    <LoadingButton
                        color="primary"
                        onClick={handleAddMovie}
                        loading={loading}
                        loadingPosition="start"
                        startIcon={<AddIcon />}
                        variant="contained"
                        className="scale-125 float-left"
                    >
                        Film hinzufügen
                    </LoadingButton>
                    <Button
                        variant="outlined"
                        className="scale-125 float-right"
                    >
                        Abbrechen
                    </Button>
                </div>
            </div>
        </>
    );
};

export default Admin;
