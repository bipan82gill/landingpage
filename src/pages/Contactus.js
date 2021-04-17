import React from 'react'
import Form from '../components/Form';
import {Paper,makeStyles} from '@material-ui/core';
import Typography from '@material-ui/core/Typography'


const useStyles= makeStyles(theme=>({
    pageContent:{
        margin:theme.spacing(5),
        padding:theme.spacing(3)
    },
    font:{
        color:'#084B76',
        margin:'30px',
        justifyContent:'center',
        textAlign:'center'
    }

}))
function Contactus() {
    const classes = useStyles();
    return (
        
      <Paper className={classes.pageContent}>
            <Typography variant="h4" component='div' className={classes.font}>
              Contact Us
            </Typography>
          <Form/>
      </Paper>
    )
}

export default Contactus
