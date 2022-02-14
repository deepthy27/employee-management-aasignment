import React, { useEffect } from "react";
import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import data from "../mockData/data.json";
import { STORE_DATA } from "../actions/actions";
import { useNavigate } from "react-router-dom";
import Employee from "./Employee";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import AppBar from "@mui/material/AppBar";
import { Typography } from "@mui/material";
import Footer from "./Footer";
import Cards from "./Cards";
import employee from "../asset/work.jpg";
import survey from "../asset/survey.jpg";
import compliance from "../asset/compliance.jpg";
import integrity from "../asset/integrity.jpg";
import flash from "../asset/flash.jpg";
import announcement from "../asset/announcement.jpg";
import NavBar from './NavBar';

const Home = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch({ type: "STORE_DATA", payload: data });
  }, []);

  const fetchUsers = () => {
    navigate("/employee");
  };

  return (
    <div className="employee-background-image">
      {/* <Typography className="text-color title" variant="h4">
        ESMP
      </Typography> */}
      {/* <AppBar className="app-bar">
        <Tabs className="home-tabs" textColor="white">
          <Tab label="Home" />
          <Tab label="About Us" />
          <Tab label="Services" />
          <Tab label="Contact Us" />
          <Tab label="Portfolio" />
          <Tab label="Blog" />
          <Tab label="Explore" />
          <Button className="sign-up-button" variant="outlined">
            Sign Up/Login
          </Button>
        </Tabs>
      </AppBar> */}
      <NavBar component = 'home'/>
      <Typography className="text-color main-header header" variant="h3">
        Employee Service Management Portal
      </Typography>
      <Typography
        className="text-color main-header home-content"
        style={{ top: 170 }}
        variant="h5"
      >
        Employee portal is a platform that connects everyone in an organization
        under one head.
      </Typography>
      <Typography
        className="text-color main-header home-content-sub"
        style={{ top: 220 }}
        variant="h6"
      >
        Your employees will be able to access all their personal information,
        documents and other functionalities through their profile from all
        platforms. Stay in touch with your entire staff, while saving time and
        money.
      </Typography>
      <Button className="info-button" variant="contained" onClick={fetchUsers}>
        More Info
      </Button>
      <div className="home-cards">
        <Cards
          cardImg={employee}
          cardName="Tips to make work"
          cardDescription="Tips to make your work from home stint productive | COVID19"
        />
        <Cards
          cardImg={survey}
          cardName="Customer Survey"
          cardDescription="Survey Status and updates"
        />
        <Cards
          cardImg={compliance}
          cardName="System compliance"
          cardDescription="Heres your system Compliance status"
        />
      </div>

      <div className="home-cards">
        <Cards
          cardImg={flash}
          cardName="Policy Flash"
          cardDescription="Flash News updates"
        />
        <Cards
          cardImg={integrity}
          cardName="BUILDING TRUST AND INTEGRITY"
          cardDescription="Survey Status and updates"
        />
        <Cards
          cardImg={announcement}
          cardName="Announcements"
          cardDescription="Here is the updates of policies"
        />
      </div>
      <Typography></Typography>
      <Footer />
    </div>
  );
};
export default Home;
