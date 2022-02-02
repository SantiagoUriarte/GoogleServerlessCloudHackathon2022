import React from "react";
import Banner from "../../components/Banner/Banner";
import LogoutIcon from "@mui/icons-material/Logout";

const TemplatePage = () => {
  return (
    <>
      <Banner
        image="/static/images/avatar/1.jpg"
        alt="randomImage"
        description="Select a template to create your SMART transcripted form"
        header="Templates"
        placeholder="Search all templates"
        Icon={LogoutIcon}
      ></Banner>
    </>
  );
};

export default TemplatePage;
