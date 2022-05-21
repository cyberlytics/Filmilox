import { Button, TextField } from '@mui/material';
import styled from '@emotion/styled';
import React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import AddIcon from '@mui/icons-material/Add';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';

const Admin = () => {
    const Input = styled('input')({
        display: 'none',
    });

    const [loading, setLoading] = React.useState(false);
    function handleClick() {
        setLoading(true);
    }

    return (
        <>
            <div className="h-[900px] w-[600px] mx-auto mt-20 flex flex-col items-center justify-around">
                <h1 className="font-medium text-left leading-tight text-5xl w-[125%] mb-6">
                    FILM HINZUFÜGEN:
                </h1>
                <TextField
                    id="outlined-basic"
                    label="Titel"
                    variant="outlined"
                    className="scale-125 w-[100%]"
                />
                <TextField
                    id="outlined-multiline-static"
                    label="Beschreibung"
                    multiline
                    rows={7}
                    className="scale-125 w-[100%] h-[23%]"
                />
                <TextField
                    id="date"
                    label="Erscheinungsdatum"
                    type="date"
                    defaultValue="2000-01-01"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    className="scale-125 w-[100%]"
                />
                <TextField
                    id="outlined-basic"
                    label="Trailer-Link"
                    variant="outlined"
                    className="scale-125 w-[100%]"
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
                        onClick={handleClick}
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
