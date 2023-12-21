import {
  Button,
  CircularProgress,
  Menu,
  MenuItem,
  Modal,
  Paper,
  TextField,
} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../../features/slicer/credentialSlicer";
import { Navigate } from "react-router-dom";
import {
  useGetuserQuery,
  useGetusersQuery,
  useSignoutMutation,
  useDeleteuserMutation,
  useGetResumesQuery,
  usePatchUserMutation,
} from "../../services/useApi";
import Card from "@mui/material/Card";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useFormik } from "formik";

import * as Yup from "yup";
const drawerWidth = 240;
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const Dashboard = () => {
  const dispatch = useDispatch();
  const nirvanaEnv = "https://nirana-backend.onrender.com";
  const {
    data: UsersList,
    isError: isUserlistError,
    isLoading: isUserlistLoading,
  } = useGetusersQuery();
  const [signoutMutation] = useSignoutMutation();
  const [deleteuserMutation, deleteuserMutationStatus] =
    useDeleteuserMutation();
  const [patchUser, patchUserStatus] = usePatchUserMutation();
  //console.log(patchUserStatus.isLoading);
  const {
    data: resumeInfo,
    isError: isResumeInfoError,
    isLoading: isResumeInfoLoading,
    isFetching: isResumeInfoFetching,
  } = useGetResumesQuery();
  //console.log(resumeInfo);
  const [userid, setUserid] = React.useState("");
  const [showUserinfo, setShowUserinfo] = React.useState(false);
  const {
    data: UserInfo,
    isError: isUserinfoError,
    isLoading: isUserinfoLoading,
    isFetching: isUserinfoFetching,
  } = useGetuserQuery(userid);

  //console.log(UserInfo?.length);
  //console.log("isUserinfoFetching", isUserinfoFetching);
  //React.useEffect(() => {}, []);
  const logoutHandler = () => {
    dispatch(logOut());
    signoutMutation();
  };

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [showResume, setShowResume] = React.useState(false);
  const showResumeHandler = () => {
    setShowResume((prv) => !prv);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const moreitemHandler = (_id) => {
    console.log('moreiTemHandler',selectedUser, _id);
    //setUserid(_id);
    setShowUserinfo(true);
    handleClose();
  };
  const deleteitemHandler = (_id) => {
    console.log(_id);
    //deleteuserMutation(_id);
    handleClose();
    console.log("del", _id);
  };
  // const editItemHandler = (_id) => {
  //   console.log("edit", _id);
  // };

  //open menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);
  
  const handleButtonClick = (event, searchId) => {
    console.log(event, searchId);
    setAnchorEl(event.currentTarget);
    if (UsersList?.length > 1)
      setSelectedUser(UsersList.find((user) => user._id === searchId));
    else setSelectedUser(UsersList);
    if(selectedUser) console.log(selectedUser);
  };
  const handleClose = () => {
    console.log('handleClose');
    setAnchorEl(null);
  };
  const editUserHandler = () => {
    console.log(selectedUser);
  };
  const [openModal, setOpenModal] = React.useState(false);
  const [selectedUser, setSelectedUser] = React.useState("");
  const handleOpenModal = (searchId) => {
    console.log(searchId, UsersList);
    //if(UsersList.length>1) setSelectedUser(UsersList.find((user) => user._id === searchId)); else setSelectedUser(UsersList);
    setOpenModal(true);
  };
  const handleCloseModal = () => setOpenModal(false);

  const UserFormik = useFormik({
    initialValues: {
      username: selectedUser.username,
      email: selectedUser.email,
      id: selectedUser._id,
    },
    validationSchema: Yup.object({
      username: Yup.string().required("username is Required"), //.email('Not proper email format'),
      email: Yup.string().required("email is Required"),
    }),
    enableReinitialize: true,
    onSubmit: async  (values, { resetForm }) => {
      console.log('patchuser:',values.id,{
        username: values.username,
        email: values.email,
      } );
     


      try {
        // Call the patchUser function with the values from the form
        await patchUser(values.id, {
          username: values.username,
          email: values.email,
        });
    
        // Reset the form after successful submission
        resetForm();
        handleCloseModal();
        handleClose();
      } catch (error) {
        // Handle any errors from the patchUser function
        console.error('Error updating user:', error);
      }
    },
  });
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar
          sx={{
            backgroundColor: "#f4f4f4",
            justifyContent: "space-between",
            color: "#333",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{ fontStyle: "italic", fontWeight: "bold" }}
          >
            Nirvana Dashboard
          </Typography>
          <Button onClick={logoutHandler} sx={{ color: "#fff" }}>
            logout
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        {/* <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
        <Box sx={{ textAlign: "center", p: "10px" }}>
          <Button
            onClick={() => {
              showResumeHandler();
              console.log("show");
            }}
          >
            <Typography>show resumes</Typography>
          </Button>
        </Box>

        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Box sx={{ display: "flex" }}>
          <Box flex="0 0 60%">
            {isUserlistLoading ? (
              <CircularProgress />
            ) : (
              UsersList?.map((item, index) => (
                <Card
                  variant="outlined"
                  key={item._id}
                  sx={{ padding: "10px", width: "50vh" }}
                >
                  <Typography variant="h4" component="div">
                    {item.username}
                  </Typography>
                  <Typography variant="body2" component="div">
                    {item.email}
                  </Typography>
                  <Typography variant="body2" component="div">
                    {item._id}
                  </Typography>

                  <Button
                    aria-label="more"
                    aria-controls={`basic-menu-${item._id}`}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={(event) => handleButtonClick(event, item._id)}
                  >
                    Option
                  </Button>
                  <Menu
                    id={`basic-menu-${item._id}`}
                    
                    open={item._id===selectedUser._id}
                    onClose={handleClose}
                    keepMounted
                    // MenuListProps={{
                    //   "aria-labelledby": "basic-button",
                    // }}
                  >
                    <MenuItem onClick={() => moreitemHandler(item._id)}>
                      More
                    </MenuItem>

                    <MenuItem onClick={() => handleOpenModal(item._id)}>
                      Edit
                    </MenuItem>
                    <MenuItem onClick={() => deleteitemHandler(item._id)}>
                      Delete
                    </MenuItem>
                  </Menu>

                  <div>
                    {/* <Button onClick={handleOpenModal}>Open modal</Button> */}
                    <Modal
                      open={openModal}
                      onClose={handleCloseModal}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box
                        sx={style}
                        display="flex"
                        alignItems="center"
                        gap={2}
                        flexDirection="column"
                      >


                        {selectedUser && <form
                          onSubmit={UserFormik.handleSubmit}
                          style={{
                            width: "200px",
                            textAlign: "center",
                            border: "solid 1px #bdbdbd ",
                            padding: "10px",
                          }}
                        >
                          <Typography variant="body3">form</Typography>
                          {selectedUser?._id}
                          <TextField
                            fullWidth
                            id="username"
                            name="username"
                            label="username *"
                            value={UserFormik.values.username}
                            onChange={UserFormik.handleChange}
                            error={
                              UserFormik.touched.username &&
                              Boolean(UserFormik.errors.username)
                            }
                            helperText={
                              UserFormik.touched.username &&
                              UserFormik.errors.username
                            }
                            size="small"
                            margin="dense"
                            variant="outlined"
                          ></TextField>
                          <TextField
                            fullWidth
                            id="email"
                            name="email"
                            label="email *"
                            value={UserFormik.values.email}
                            onChange={UserFormik.handleChange}
                            error={
                              UserFormik.touched.email &&
                              Boolean(UserFormik.errors.email)
                            }
                            helperText={
                              UserFormik.touched.email &&
                              UserFormik.errors.email
                            }
                            size="small"
                            margin="dense"
                            variant="outlined"
                          ></TextField>
                          <Button type="submit" disabled={patchUserStatus.isLoading}> {patchUserStatus.isLoading? <CircularProgress size={24} /> : <Typography>EDIT?</Typography>}</Button>
                        </form>}
                      </Box>
                    </Modal>
                  </div>
                </Card>
              ))
            )}
          </Box>
          <Box>
            {showUserinfo && (isUserinfoLoading || isUserinfoFetching) ? (
              <>
                <CircularProgress />
              </>
            ) : selectedUser && showUserinfo && !isUserinfoFetching ? (
              <>
                <Typography variant="body2" component="div">
                  Info
                </Typography>
                <Card
                  variant="outlined"
                  sx={{ padding: "10px", width: "auto" }}
                >
                  <Typography variant="body2" component="div">
                    <span style={{ fontWeight: "bold" }}>id:</span>
                    {selectedUser?._id}
                  </Typography>
                  <Typography variant="body2" component="div">
                    email:{selectedUser?.email}
                  </Typography>
                  <Typography variant="body2" component="div">
                    username:{selectedUser?.username}
                  </Typography>
                </Card>
              </>
            ) : (
              <></>
            )}
          </Box>
        </Box>

        {showResume && (
          <Box>
            {resumeInfo?.map((item, index) => (
              <ul key={item._id}>
                {index}
                <li>{item.email}</li>
                <li>{item.name}</li>{" "}
                <li>
                  <iframe
                    title={`Resume_${item._id}`}
                    style={{ width: "100%", height: "800px" }} // adjust the width and height as needed
                    src={nirvanaEnv + item.resumeFilePath}
                    frameBorder="0"
                  />
                </li>
              </ul>
            ))}
          </Box>
        )}
      </Main>
    </Box>
  );

  //   return (
  //     <Paper
  //       sx={{
  //         display: "flex",
  //         justifyContent: "center",
  //         alignItems: "center",
  //         height: "100vh",
  //         backgroundColor: "green",
  //       }}
  //     >
  //       <div className="dashboard">Dashboard</div>
  //       <Button onClick={logoutHandler}>logout</Button>
  //     </Paper>
  //   );
};

export default Dashboard;
