import {Avatar, Button, Input} from "@mui/material";
import React, {ChangeEvent, useEffect, useState} from "react";
import {useAppSelector} from "../redux/hooks";
import {selectEmail, selectUsername} from "../redux/userSlice";
import styled from "@emotion/styled";
import Backend from "../api/Backend";
import SaveIcon from '@mui/icons-material/Save';
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";

const UserSettings = () => {
    const username = useAppSelector(selectUsername);
    const email = useAppSelector(selectEmail);
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

    const handleUpdateProfile = async() =>{
        const status = await Backend.updateProfile();
        if (status){
            setProfilePic(undefined);
        }
    }

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
            <label htmlFor="contained-button-file"
                   className="mx-auto scale-125 ">
                <Avatar style={{height: 190, width: 190, marginTop:50}}
                        src={profilePicPreview}
                        alt={`...Controller.stringAvatar(username)`}
                />
                <Input
                    accept="image/*"
                    id="contained-button-file"
                    type="file"
                    onChange={(event) => {
                        handleProfilePictureUpload(event);
                    }}/>
            </label>
            <div className="m-10 text-2xl">
                <p><b>User name:</b> {username}</p>
                <p><b>Email: </b>{email}</p>
            </div>
            <Button
                startIcon={<SaveIcon/>}>
                Speichern
            </Button>
        </div>
    );
};

export default UserSettings;
