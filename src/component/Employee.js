import React, { useEffect, useState } from "react";
import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import EmployeeModal from "./EmployeeModal";
import NavBar from "./NavBar";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Employee = () => {
  const [showModal, setShowModal] = useState(false);
  const [editData, setEditData] = useState();
  const [pop, setPop] = useState(true);
  const { employees } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_USERS" });
  }, [pop]);

  const editDetails = (event, employeeDetails) => {
    console.log(event.detail);
    if (event.detail == 2) {
      setShowModal(true);
      setEditData(employeeDetails);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const updateData = () => {
    setPop(!pop);
  };

  const FormRow = () => {
    return (
      <React.Fragment>
        {employees.employees.map((data, index) => {
          return (
            <Grid key={data.id} item xs={3}>
              <Paper
                className="paper-employee-details"
                onClick={(e) => editDetails(e, data)}
                style={{
                  margin: "30px",
                  border: "1px solid red",
                  cursor: "pointer",
                }}
              >
                <table>
                  <th className="table-header">{data.name}</th>
                  <tr className="table-data">
                    <td>{data.email}</td>
                  </tr>
                  <tr className="table-data">
                    <td>{data.address.city}</td>
                  </tr>
                  <tr className="table-data">
                    <td>{data.phone}</td>
                  </tr>
                  <tr className="table-data">
                    <td>{data.website}</td>
                  </tr>
                  <tr className="table-data">
                    <td>{data.company.name}</td>
                  </tr>
                </table>
              </Paper>
            </Grid>
          );
        })}
      </React.Fragment>
    );
  };
  return (
    <div className="employee-background">
      <NavBar />
      {employees.employees != undefined ? (
        <Grid style={{ position: "relative", top: 100 }} container>
          <Grid container className="employee-cards" item xs={12}>
            <FormRow />
          </Grid>
        </Grid>
      ) : null}
      {showModal ? (
        <EmployeeModal
          employeeData={editData}
          closeModal={closeModal}
          updateData={updateData}
        />
      ) : null}
    </div>
  );
};
export default Employee;
