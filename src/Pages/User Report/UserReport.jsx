import React from "react";
import classes from "./UserReport.module.css";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";

const UserReport = () => {
    return (
      <>
      <section id="userreport"> 
        <div className={classes.container}>
        <form>
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            
            <label>
              Number:
              <input name="number" />
            </label>
            
            <label>
              Address:
              <input type="text" name="name" />
            </label>
            
            

            <label>
              City:
              <input type="text" name="name" />
            </label>

            <label>
              State:
              <input type="text" name="name" />
            </label>

            <label>
              Zip:
              <input type="text" name="name" />
            </label>

           

            <label>
              Issue description:
              <input type="text" name="name" />
            </label>

           

            <label>
            Upload issue image
            <input type="file" />
            </label>

            <br/>

            <input type="submit" value="Submit" />
        </form>
        </div>
      </section>
      </>
 );
};

export default UserReport;      