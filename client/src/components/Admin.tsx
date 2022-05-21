import { Button, TextField } from '@mui/material';
import styled from '@emotion/styled';
import React, { useState } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import AddIcon from '@mui/icons-material/Add';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';

const Admin = () => {
    const [loading, setLoading] = useState(false);
    const [title, setTitel] = useState('');
    const [description, setDescription] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const [trailerLink, setTrailerLink] = useState('');

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
            <div className="h-[900px] w-[600px] mx-auto flex flex-col items-center justify-around">
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
                    className="scale-125 w-[100%] h-[23%]"
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
                        multiple
                        type="file"
                    />
                    <Button
                        variant="contained"
                        component="span"
                        startIcon={<InsertPhotoIcon />}
                    >
                        Bild hinzufügen
                    </Button>
                </label>

                <div className="w-[115%] mt-16">
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
