import { Avatar, Badge, Button, Input } from '@mui/material';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import {
    selectEmail,
    selectImageProfile,
    selectUsername,
    setImageProfile,
} from '../redux/userSlice';
import styled from '@emotion/styled';
import Backend from '../api/Backend';
import SaveIcon from '@mui/icons-material/Save';
import ApiRouter from '../api/ApiRouter';
import Controller from '../controller/Controller';
import EditIcon from '@mui/icons-material/Edit';

const UserSettings = () => {
    const dispatch = useAppDispatch();
    const username = useAppSelector(selectUsername);
    const email = useAppSelector(selectEmail);
    const imageProfile = useAppSelector(selectImageProfile);
    const [profilePic, setProfilePic] = useState<File>();
    const [profilePicPreview, setProfilePicPreview] = useState<string>('');

    const Input = styled('input')({
        display: 'none',
    });

    function handleProfilePictureUpload(event: ChangeEvent<HTMLInputElement>) {
        const file = event.target.files![0];
        if (file != null && file.type.substring(0, 5) === 'image') {
            setProfilePic(event.target.files![0]);
        }
    }

    const handleUpdateProfile = async () => {
        try {
            const formData = new FormData();
            formData.append('file', profilePic as Blob);
            const updatedUser = await Backend.updateProfile(formData);
            dispatch(setImageProfile(updatedUser.profile));
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (profilePic) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfilePicPreview(reader.result as string);
            };
            reader.readAsDataURL(profilePic);
        } else {
            setProfilePicPreview('');
        }
    }, [profilePic]);

    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold text-4xl mt-8">BENUTZER EINSTELLUNGEN</h1>
            <label
                htmlFor="contained-button-file"
                className="mx-auto scale-125 "
            >
                <Badge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    badgeContent={<EditIcon />}
                >
                    {imageProfile ? (
                        <Avatar
                            style={{ height: 190, width: 190, marginTop: 50 }}
                            alt={username}
                            src={
                                profilePicPreview
                                    ? profilePicPreview
                                    : ApiRouter.getImageLink(imageProfile)
                            }
                        />
                    ) : (
                        <Avatar
                            style={{ height: 190, width: 190, marginTop: 50 }}
                            {...Controller.stringAvatar(username)}
                            src={profilePicPreview ? profilePicPreview : ''}
                        />
                    )}
                </Badge>
                <Input
                    accept="image/*"
                    id="contained-button-file"
                    type="file"
                    onChange={(event) => {
                        handleProfilePictureUpload(event);
                    }}
                />
            </label>
            <div className="m-10 text-2xl">
                <p>
                    <b>User name:</b> {username}
                </p>
                <p>
                    <b>Email: </b>
                    {email}
                </p>
            </div>
            <Button startIcon={<SaveIcon />} onClick={handleUpdateProfile}>
                Speichern
            </Button>
        </div>
    );
};

export default UserSettings;
