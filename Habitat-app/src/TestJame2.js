import { storage } from "./page/RoomManagement/config";
import { useState, useEffect } from "react";

import React from 'react'

export default function Testjmae2() {

    const [image, setImage] = useState(null);
    const onImageChange = (e) => {
        const reader = new FileReader();
        let file = e.target.files[0]; // get the supplied file
        // if there is a file, set image to that file
        if (file) {
            reader.onload = () => {
                if (reader.readyState === 2) {
                    console.log(file);
                    setImage(file);
                }
            };
            reader.readAsDataURL(e.target.files[0]);
            // if there is no file, set image back to null
        } else {
            setImage(null);
        }
    };

    const uploadToFirebase = () => {
        //1.
        if (image) {
            //2.
            const storageRef = storage.ref();
            //3.
            const imageRef = storageRef.child(image.name);
            //4.
            imageRef.put(image)
                //5.
                .then(() => {
                    alert("Image uploaded successfully to Firebase.");
                });
        } else {
            alert("Please upload an image first.");
        }
    };


    return (
        <div>
            <input type="file" accept="image/x-png,image/jpeg" onChange={(e) => { onImageChange(e); }} />

            <button>Upload to Firebase</button>

        </div>
    )
}
