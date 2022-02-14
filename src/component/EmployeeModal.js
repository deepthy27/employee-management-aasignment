import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function EmployeeModal(props) {
  const [open, setOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [employeeData, setEmployeeData] = useState();
  const dispatch = useDispatch();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    props.closeModal();
  };

  const handleCloseModal = () => {
    setShowAlert(false);
    props.closeModal();
  };

  const updated = () => {
    setShowAlert(true);
    setOpen(false);
    dispatch({ type: "UPDATE_DATA", payload: employeeData });
    props.updateData();
  };

  const handleChange = (event) => {
    if (event.target.name == "city") {
      setEmployeeData((employeeData) => ({
        ...employeeData,
        address: {
          ...employeeData.address,
          city: event.target.value,
        },
      }));
    } else if (event.target.name == "companyName") {
      setEmployeeData((employeeData) => ({
        ...employeeData,
        company: {
          ...employeeData.company,
          name: event.target.value,
        },
      }));
    } else {
      setEmployeeData((employeeData) => ({
        ...employeeData,
        [event.target.name]: event.target.value,
      }));
    }
  };

  useEffect(() => {
    setEmployeeData(props.employeeData);
    setOpen(true);
  }, []);

  const action = (
    <React.Fragment>
      <Button style={{color:'#fff'}} size="small" onClick={handleCloseModal}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleCloseModal}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      {employeeData != undefined ? (
        <Modal open={open} style={{ border: "2px solid red" }}>
          <Box sx={style} className="employee-modal">
            <h2>Edit Profile</h2>
            <TextField
              id="employee-name"
              name="name"
              fullWidth
              defaultValue={employeeData.name}
              label="Name"
              variant="filled"
              onChange={handleChange}
              style={{ marginBottom: "20px" }}
            />
            <TextField
              id="employee-email"
              name="email"
              fullWidth
              defaultValue={employeeData.email}
              label="Email"
              variant="filled"
              onChange={handleChange}
              style={{ marginBottom: "20px" }}
            />
            <TextField
              id="employee-city"
              name="city"
              fullWidth
              defaultValue={employeeData.address.city}
              label="City"
              variant="filled"
              onChange={handleChange}
              style={{ marginBottom: "20px" }}
            />
            <TextField
              id="employee-phone"
              name="phone"
              fullWidth
              defaultValue={employeeData.phone}
              label="Phone"
              variant="filled"
              onChange={handleChange}
              style={{ marginBottom: "20px" }}
            />
            <TextField
              id="employee-website"
              name="website"
              fullWidth
              defaultValue={employeeData.website}
              label="Website"
              variant="filled"
              onChange={handleChange}
              style={{ marginBottom: "20px" }}
            />
            <TextField
              id="employee-company-name"
              name="companyName"
              fullWidth
              defaultValue={employeeData.company.name}
              label="Company Name"
              variant="filled"
              onChange={handleChange}
              style={{ marginBottom: "20px" }}
            />
            <Button
              onClick={updated}
              className="modal-button"
              variant="contained"
            >
              Update
            </Button>
            <Button
              onClick={handleClose}
              style={{ marginLeft: "20px" }}
              variant="contained"
              className="modal-button"
            >
              Cancel
            </Button>
          </Box>
        </Modal>
      ) : null }
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={showAlert}
        autoHideDuration={6000}
        onClose={handleCloseModal}
        message="Profile Updated Successfully"
        action={action}
      />
    </div>
  );
}
