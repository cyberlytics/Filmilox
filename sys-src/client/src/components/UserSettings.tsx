import {Avatar, Button, Input} from "@mui/material";
import Controller from "../controller/Controller";
import IconButton from "@mui/material/IconButton";
import React, {ChangeEvent, useEffect, useState} from "react";
import {useAppSelector} from "../redux/hooks";
import {selectEmail, selectUsername} from "../redux/userSlice";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import styled from "@emotion/styled";

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
        <div className="m-20">
                <Avatar style={{height: 80, width: 80}}
                    src={profilePicPreview}
                    alt={`...Controller.stringAvatar(username)`}
                />
                <p>Username: {username}</p>
                <p>Email: {email}</p>
                <label
                    htmlFor="contained-button-file"
                    className="mx-auto scale-125 "
                >
                    <Input
                        accept="image/*"
                        id="contained-button-file"
                        type="file"
                        onChange={(event) => {
                            handleProfilePictureUpload(event);
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
        </div>
    );
};

export default UserSettings;
