import React from 'react';

import {Grid, Paper, makeStyles} from '@material-ui/core';


const useStyles = makeStyles({
    container:{
        margin:'10px',
        textAlign:'center',
        fontSize:'2rem'
    },
    item:{
        // backgroundImage:`url(${process.env.PUBLIC_URL+'assests/torontogta.png'})`,
       background:'#084B76',
        padding:'40px',
        color:'white',
        justify:'center'
    }
})
function Section() {
    const classes= useStyles();
    return (
      <Grid container className={classes.container} justify="center">
          <Paper className={classes.item}>
              <Grid item md={12}>
                    <h3>Experienced Real Estate Brokerage you Can Trust</h3>
              </Grid>
              <Grid item md={12} style={{fontSize:'1.5rem'}}>
                    <p>
                        Buying and Selling a Property is big step. Coldwell Banker Dream City Realty provides you up-to-date and reliable information that helps to finding your Dream Property easy. We provide service in the GTA and Ontario. 
                    </p>
                    
              </Grid>

          </Paper>
      </Grid>
    )
}

export default Section
