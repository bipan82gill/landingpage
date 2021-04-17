import React from 'react';
// import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import DoneOutlineRoundedIcon from '@material-ui/icons/DoneOutlineRounded';
import sale from '../images/sale.jpg';
import buy from '../images/buy.jpg';
import rent from '../images/rent.jpg';
import commercial from '../images/commercial.jpg';



const useStyles = makeStyles({
    paper:{
        height:'300px',
        margin:'20px',
        display:'flex',
        width:'80%',
        textAlign:'center'
    },
    services:{
        padding:'10px',
        fontSize:'1.3rem',
        fontFamily:'sans-serif',
        color:'black'
    },
    list:{
        listStyle:'none',
    },
    item:{
        margin:'2px',
        fontSize:'1rem',
        overflow:'hidden'
    },
    grid:{
        background:'linear-gradient(45deg, #084B76, #084B76)',
        margin:'20px'
    }
})

function Services() {
    const Classes = useStyles();
    return (
  
           <Grid container padding="20px" justify="center"className={Classes.grid}>
               <Grid item md={12} xs={12} style={{textAlign:'center', color:'white'}}>
                    <h1>Our Services</h1>
               </Grid>
               <Grid item xs={12} md={3} >
                    <Paper className={Classes.paper}>
                        <div className={Classes.services}>
                            <img src={rent} alt='rent' style={{height:'100px', width:'100px'}}/>
                           
                                <p>We have updated information regarding rental properties in your neighbourhood.  </p>
                                
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Paper className={Classes.paper}>
                        <div className={Classes.services}>
                        <img src={sale} alt='sell' style={{height:'100px', width:'100px'}}/>
                           <p>For selling a property wheather residential or commercial,Dream City Realty provides you best buyers for your property.</p>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Paper className={Classes.paper}>
                        <div className={Classes.services}>
                        <img src={buy} alt='buy' style={{height:'100px', width:'100px'}}/>
                           <p>
                            For Buyers, we provide you hot listing of properties in your dream home according to your requirements.
                           </p>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Paper className={Classes.paper}>
                        <div className={Classes.services}>
                        <img src={commercial} alt='commercial' style={{height:'100px', width:'100px'}}/>
                            <p>
                                In GTA, Commercial properties are hot, we have updated listing for these properties.
                            </p>
                        </div>
                    </Paper>
                </Grid>
               
           </Grid>
       
    )
}

export default Services
