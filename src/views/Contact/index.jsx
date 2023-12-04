import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import contact from "../../assets/contact.jpg";
import text from "../../configs/Text";
import OverlayHeader from "../../components/OverlayHeader";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDropzone } from "react-dropzone";
import { useEffect } from "react";

const Contact = () => {
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
  const { getRootProps, getInputProps, acceptedFiles, isDragActive } =
    useDropzone({
      // Disable click and keydown behavior
      noClick: false,
      noKeyboard: true,
      accept: {
        application: [".doc", ".docx", ".pdf"],
      },
      maxFiles: 1,
      validator: fileSizeValidator,
      onDrop: (acceptedFiles) => {
        formikForm.setFieldValue("file", acceptedFiles);
      },
    });

  let files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  //   const [files, setFiles] = setState(`<li key={file.path}>
  //   {file.path} - {file.size} bytes
  // </li>`)

  const formikForm = useFormik({
    initialValues: { name: "", email: "", text: "" },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Minimum 2 Characters")
        .max(8, "Maximum 2 Characters")
        .required("Name is Required"),
      email: Yup.string().required("Email is Required"),
      text: Yup.string(),
      file: Yup.mixed(),
    }),
    onSubmit: (values, { resetForm }) => {
      //alert(values);
      //acceptedFiles = '';

      console.log(values);
      resetForm({ values: "" });
    },
  });
  useEffect(() => {
    console.log(formikForm);
  });
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
        sx={{ zIndex: 2, height: "100%", p: 10, width: "100%" }}
      >
        <Grid item sm={8} md={8}>
          <Box sx={{ width: "75%", display: "grid", justifyContent: "center" }}>
            <Typography
              variant="body3"
              sx={{ fontWeight: "600", fontSize: "20px" }}
            >
              {text.contact.Body.First.Title}
            </Typography>
            <Typography  variant="body3" style={{ marginBottom: "1.5em" }}>
              {text.contact.Body.First.Body}
            </Typography>
            <Typography
               variant="body3"
              sx={{ fontWeight: "600", fontSize: "20px" }}
            >
              {text.contact.Body.Second.Title}
            </Typography>
            <Typography  variant="body3" style={{ marginBottom: "1.5em" }}>
              {text.contact.Body.First.Body}
            </Typography>
          </Box>

          <form
            onSubmit={formikForm.handleSubmit}
            style={{
              textAlign: "center",
              border: "2px solid #e8e8e8",
              padding: "10px",
              marginTop: "30px",
            }}
          >
            <Typography variant="h3">Contact Us..</Typography>
            <TextField
              sx={{
                "& .MuiFormLabel-root": {
                  color: "#bdbdbd",
                },
                width: "40%",
                mr: "3vh",
              }}
              id="name"
              name="name"
              label="name *"
              value={formikForm.values.name}
              onChange={formikForm.handleChange}
              error={formikForm.touched.name && Boolean(formikForm.errors.name)}
              helperText={formikForm.touched.name && formikForm.errors.name}
              variant="filled"
              size="small"
              margin="dense"
            />
            <TextField
              sx={{
                "& .MuiFormLabel-root": {
                  color: "#bdbdbd",
                },

                width: "50%",
              }}
              id="email"
              name="email"
              label="email *"
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
              sx={{
                "& .MuiFormLabel-root": {
                  color: "#bdbdbd",
                },
                width: "95%",
              }}
              id="text"
              name="text"
              label="text"
              value={formikForm.values.text}
              onChange={formikForm.handleChange}
              error={formikForm.touched.text && Boolean(formikForm.errors.text)}
              helperText={formikForm.touched.text && formikForm.errors.text}
              variant="filled"
              margin="normal"
            />

            <Box
              fullWidth
              className="dropzone-container"
              sx={{
                mb: "20px",
                p: "5px",
                border: "2px solid #e8e8e8",
                textAlign: "left",
              }}
            >
              <Paper
                {...getRootProps({ className: "dropzone" })}
                sx={{
                  border: "dotted #eeeeee",
                  borderWidth: "1px",
                  p: "5px",
                  textAlign: "center",
                  backgroundColor: "#fafafa",
                  color: "#bdbdbd",
                }}
              >
                <input
                  {...getInputProps()}
                  id="file"
                  name="file"
                  label="file"
                  //value={formikForm.values.file}
                  onChange={(e) => {
                    console.log("e", e);
                  }}
                />
                <p>
                  {isDragActive
                    ? "Drop the files here ..."
                    : "Drag 'n' drop some files here, or click to select files"}
                </p>
                <em>
                  ( 1 file is the maximum number of file you can attach here )
                </em>
                <p></p>

                {/* <button type="button" onClick={open}>
                  Open File Dialog
                </button> */}
              </Paper>
              <aside style={{ textAlign: "left" }}>
                <Typography variant="h5" sx={{ color: "#bdbdbd" }}>
                  Files
                </Typography>
                <Box>{files}</Box>
              </aside>
            </Box>
            <p></p>
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
