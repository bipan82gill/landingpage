import React from "react";
import logo from '../images/dreamcity.jpg';
import {
  Toolbar,
  AppBar,
  makeStyles
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import PhoneIcon from '@material-ui/icons/Phone';
// import MailOutlineIcon from '@material-ui/icons/MailOutline';

const useStyles = makeStyles({
  header: {
    backgroundColor: "transparent",
    color: "#084B76", 

  },
  toolbar:{
    display:'flex',
    justifyContent:'space-around',
    fontSize:'0.7rem'
  }

});
export default function Navbar() {
  const classes = useStyles();
  return (
    <div className="Navbar">
      <AppBar position="sticky" className={classes.header}>
        <Toolbar className={classes.toolbar}>
          
        <img src={logo} alt="Dream City Realty"/>   
          {/* <div className="icon"> */}
           <Button 
           startIcon={<PhoneIcon/>}
           variant="contained" 
           color="primary"
           styles={{
             borderRadius:"20%"
           }}>(647) 966 1700</Button>
          {/* </div> */}
        
        </Toolbar>
      </AppBar>
    </div>
  );
}