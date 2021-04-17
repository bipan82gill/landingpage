import React from 'react';
// import {Link} from 'react-router-dom';
import {Grid,makeStyles} from '@material-ui/core';

import {LocationCityRounded, Phone, MailOutline, Facebook, Instagram, LinkedIn, YouTube} from '@material-ui/icons'

const useStyles= makeStyles({
    grid:{
        color:'#084B76',
        padding:'40px',
        fontSize:'1rem',
        fontWeight:'bold',
        textAlign:'center'
    },
    item:{
        padding:'10px'
    },
    list:{
        listStyle:'none',
    }
})

const Footer =()=>{
    const classes= useStyles()
    return(
        
            <Grid container spacing={2} className={classes.grid}>
               
                    {/* col-1 */}
                    <Grid item md={4} xs={12} className={classes.item}>
                        <h2>Location</h2>
                    
                   <LocationCityRounded/> &nbsp;146-2960 Drew Rd, Mississauga, ON,Canada
   
               
               
                   </Grid>
                 
                    {/* col-2 */}
                    <Grid item  md={4} xs={12} className={classes.item}>  
                    <h2>Contact Us</h2>  
                    <ul className={classes.list}>
                    <li><Phone/> &nbsp;647-966-1700</li>
                    <li><MailOutline/>&nbsp;info@dreamcityrealty.com</li> 
                    </ul>
                           
                  
                    </Grid>
                    {/* col-3 */}
                    <Grid item md={4} xs={12}className={classes.item}>
                        <h2>Follow Us</h2>
                            <Facebook/>&nbsp;
                            <Instagram/>&nbsp;
                            <LinkedIn/>&nbsp;
                            <YouTube/>            
                   </Grid>
                   <Grid item xs={12} md={12}>  
                   <hr/>    
                <b>ColdWell Banker DreamCity Realty</b> &copy;{new Date().getFullYear()}  |  All Rights Reserved            
                </Grid>
                </Grid>

     
    )
}
export default Footer;