// import React from 'react'
// import { useForm } from "react-hook-form";

// function UploadImage() {
//     const { register, handleSubmit } = useForm()

//     const onSubmit = data => {
//         const storageRef = UploadImage.storage().ref();
//         const fileRef = storageRef.child(data.image[0].name);
//         fileRef.put(data.image[0]).then(() => {
//             console.log("Uploaded a file");
//         })
//     }

//     return (
//         <form onSubmit={handleSubmit(onSubmit)}>
//             <input ref={register} required name="image" type="file"></input>
//             <button>Submit</button>
//         </form> 
//     );
// }

// export default UploadImage;