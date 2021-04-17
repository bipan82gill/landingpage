import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
    root:{
        background:'linear-gradient(45deg, #FE688B, #FF8E53)',
        border:0,
        marginBottom: 15,
        borderRadius:15,
        color:'white',
        padding:'5px 30px',
        fontSize:'1.2rem',
        
    },
    buttonContainer:{
        padding:'20px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }
})
function ButtonStyle() {
    const Classes = useStyles();
    
    return (
    <div className={Classes.buttonContainer}>
       <Button className={Classes.root}>Book An Appointment</Button>
    </div>
    )
}
export default ButtonStyle;
