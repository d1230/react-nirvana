import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import contact from "../../assets/contact.jpg";
import text from "../../configs/Text";
import OverlayHeader from "../../components/OverlayHeader";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDropzone } from "react-dropzone";
import React, { useCallback, useEffect } from "react";

//const staticServicesR = "1581 Route 27,Suite 107,Edison";

const Contact = () => {

  // function nameLengthValidator(file) {
  //   if (file.name.length > maxLength) {
  //     return {
  //       code: "name-too-large",
  //       message: `Name is larger than ${maxLength} characters`
  //     };
  //   }

  //   return null
  // }
  function fileSizeValidator(file) {
    const maxSize = 400;
    if (file.name.size > maxSize) {
      return {
        code: "name-too-large",
        message: `File is larger than ${maxSize} mb`,
      };
    }

    return null;
  }
  const {
    getRootProps,
    getInputProps,
    open,setFieldValue,
    acceptedFiles,isDragActive
  } = useDropzone({
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true,
    accept: {
      application: [".doc", ".docx", ".pdf"],

    },
    maxFiles: 1,
    validator: fileSizeValidator,
    onDrop:acceptedFiles => {setFieldValue("files", acceptedFiles);}
  });

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const formikForm = useFormik({
    initialValues: { name: "", email: "", text: "", resume: "" },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Minimum 2 Characters")
        .max(8, "Maximum 2 Characters")
        .required("Name is Required"),
      email: Yup.string().required("Email is Required"),
      text: Yup.string(),
      pdfFile: Yup.mixed(),
    }),
    onSubmit: (values, { resetForm }) => {
      alert(values);
      console.log(values);
      resetForm({ values: "" });
    },
  });
  useEffect(()=>{
   console.log(formikForm) 
  })
  return (
    <>
      <OverlayHeader
        overlayImage={contact}
        mainText={text.contact.Header.main}
        subText={text.contact.Header.sub}
      ></OverlayHeader>

      <Grid
        className="find"
        container
        sx={{ zIndex: 2, height: "100%", p: 10 }}
      >
        <Grid item sm={8} md={8}>
          <Typography variant="h3">{text.contact.Body.First.Title}</Typography>
          <Typography>{text.contact.Body.First.Body}</Typography>
          <Typography variant="h3">{text.contact.Body.Second.Title}</Typography>
          <Typography>{text.contact.Body.First.Body}</Typography>

          <form onSubmit={formikForm.handleSubmit}  >
            <TextField
              id="name"
              name="name"
              label="name"
              value={formikForm.values.name}
              onChange={formikForm.handleChange}
              error={formikForm.touched.name && Boolean(formikForm.errors.name)}
              helperText={formikForm.touched.name && formikForm.errors.name}
              variant="filled"
              size="small"
              margin="dense"
            />
            <TextField
              id="email"
              name="email"
              label="email"
              value={formikForm.values.email}
              onChange={formikForm.handleChange}
              error={
                formikForm.touched.email && Boolean(formikForm.errors.email)
              }
              helperText={formikForm.touched.email && formikForm.errors.email}
              variant="filled"
              size="small"
              margin="dense"
            />
            <TextField
              fullWidth
              id="text"
              name="text"
              label="text"
              value={formikForm.values.text}
              onChange={formikForm.handleChange}
              error={formikForm.touched.text && Boolean(formikForm.errors.text)}
              helperText={formikForm.touched.text && formikForm.errors.text}
              variant="filled"
              multiline
              maxRows={4}
              margin="normal"
            />

            <section  className="container">
              <div {...getRootProps({ className: "dropzone" })}>
                <input {...getInputProps()}
                id="pdfFile"
                name="pdfFile"
                label="pdfFile"
                value={formikForm.values.pdfFile}
                onChange={formikForm.handleChange}
               
                />
                <p>{isDragActive ? 'Drop the files here ...' : 'Drag \'n\' drop some files here, or click to select files'}</p>
                <em>
                  ( 1 file is the maximum number of file you can attach here )
                </em>
                
                <button type="button" onClick={open}>
                  Open File Dialog
                </button>
              </div>
              <aside>
                <h4>Files</h4>
                <ul>{files}</ul>
              </aside>
            </section >

            <Button type="submit">Submit</Button>
          </form>
        </Grid>
        <Grid item sm={4} md={4}>
          <Typography variant="h3">{text.contact.Body.Third.Title}</Typography>
          <Typography variant="h5">Corporate HQ</Typography>

          <Typography variant="body">
            1581 Route 27, Suite 107, Edison, NJ 08817
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Contact;
