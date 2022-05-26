import { Button, TextField } from '@mui/material';
import styled from '@emotion/styled';
import LoadingButton from '@mui/lab/LoadingButton';
import AddIcon from '@mui/icons-material/Add';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import { useState, useEffect, ChangeEvent } from 'react';
import Backend from '../api/Backend';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(false);
    const [title, setTitel] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [releaseDate, setReleaseDate] = useState<Date | null>(new Date());
    const [trailerLink, setTrailerLink] = useState<string>('');
    const [image, setImage] = useState<File>();
    const [preview, setPreview] = useState<string>('');
    const [formValid, setFormValid] = useState<boolean>(false);

    // validation states
    const [titleError, setTitelError] = useState({
        status: false,
        helperText: '',
    });
    const [descriptionError, setDescriptionError] = useState({
        status: false,
        helperText: '',
    });
    const [trailerError, setTrailerError] = useState({
        status: false,
        helperText: '',
    });

    useEffect(() => {
        if (image) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result as string);
            };
            reader.readAsDataURL(image);
        } else {
            setPreview('');
        }
    }, [image]);

    function validate() {
        setFormValid(true);

        // Reset Errors:
        setTitelError({
            status: false,
            helperText: '',
        });
        setDescriptionError({
            status: false,
            helperText: '',
        });
        setTrailerError({
            status: false,
            helperText: '',
        });

        // Validate Inputs:
        // leerer Titel
        if (title === '') {
            setTitelError({
                status: true,
                helperText: 'Titel darf nicht leer sein.',
            });
            setFormValid(false);
        }
        // Beschreibung mind. 50 Zeichen
        if (description.length < 50) {
            setDescriptionError({
                status: true,
                helperText: 'Beschreibung muss mind 50 Zeichen lang sein.',
            });
            setFormValid(false);
        }
        // trailer Link leer
        if (trailerLink === '') {
            setTrailerError({
                status: true,
                helperText: 'Trailer-Link darf nicht leer sein.',
            });
            setFormValid(false);
        }
    }

    function handleTitleChange(title: string) {
        setTitel(title);
    }

    function handleDescriptionChange(description: string) {
        setDescription(description);
    }

    const handleDateChange = (newValue: Date | null) => {
        setReleaseDate(newValue);
    };

    function handleTLinkChange(tlink: string) {
        setTrailerLink(tlink);
    }

    function handlePosterUpload(event: ChangeEvent<HTMLInputElement>) {
        const file = event.target.files![0];
        if (file != null && file.type.substring(0, 5) === 'image') {
            setImage(event.target.files![0]);
        }
    }

    const handleAddMovie = async () => {
        await validate();

        if (formValid) {
            try {
                setLoading(true);
                const status = await Backend.addMovie({
                    title: title,
                    description: description,
                    release: releaseDate,
                    trailer: trailerLink,
                });
                setLoading(false);

                if (status) {
                    setTitel('');
                    setDescription('');
                    setTrailerLink('');
                    alert('Film hinzugefügt!');
                } else {
                    alert('Fehler beim Film hinzufügen!');
                }
            } catch (error) {
                console.error(error);
            }
        }
    };

    const Input = styled('input')({
        display: 'none',
    });

    const handleNavigate = (route: string) => {
        navigate(route);
    };

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
                    value={title}
                    error={titleError.status}
                    helperText={titleError.helperText}
                    onChange={(event) => {
                        handleTitleChange(event.target.value);
                    }}
                />
                <TextField
                    id="outlined-multiline-static"
                    label="Beschreibung (mind. 50 Zeichen)"
                    multiline
                    rows={7}
                    value={description}
                    error={descriptionError.status}
                    helperText={descriptionError.helperText}
                    sx={{ paddingTop: 1, paddingBottom: 2 }}
                    className="scale-125 w-[100%]"
                    type="text"
                    onChange={(event) => {
                        handleDescriptionChange(event.target.value);
                    }}
                />
                <DesktopDatePicker
                    label="Erscheinungsdatum"
                    inputFormat="MM/dd/yyyy"
                    value={releaseDate}
                    onChange={handleDateChange}
                    renderInput={(params) => (
                        <TextField className="scale-125 w-[100%]" {...params} />
                    )}
                />
                <TextField
                    id="outlined-basic"
                    label="Trailer-Link"
                    variant="outlined"
                    className="scale-125 w-[100%]"
                    type="text"
                    value={trailerLink}
                    error={trailerError.status}
                    helperText={trailerError.helperText}
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
                <img src={preview} className="w-[300px]" alt=""/>

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
                        onClick={() => handleNavigate('/')}
                    >
                        Abbrechen
                    </Button>
                </div>
            </div>
        </>
    );
};

export default Admin;
