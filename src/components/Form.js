import React,{useState, useEffect} from 'react';
import {Grid, makeStyles} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Select from "@material-ui/core/Select";
import FormControl from '@material-ui/core/FormControl';
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
    root:{
        '& .MuiFormControl-root':{
            width:'90%',
            margin:theme.spacing(1),
            marginLeft:theme.spacing(2),
        }
   
    }
}))

const initialFValues= {
    fullname:'',
    email:'',
    phone:''
    

}
function Form() {
const [ values, setValues] = useState(initialFValues);
const [service, setService] = React.useState('');

const handleChange = (event) => {
  setService(event.target.value);
};
const classes = useStyles();
const handleInputChange = (e) =>{
setValues({name:e.target.value})
}


    return (
        
        <form className={classes.root} autoComplete="off">
            <Grid container>
            {/* <Grid item xs={6}>
            <TextField
                id="outlined-basic"
                variant="outlined"
                label="Full Name"
                name="fullname"
                value={values.fullname}
                onChange={handleInputChange}
                />
            </Grid> */}
            <Grid item xs={12} md={6}>
                <TextField id="outlined-basic" 
                label="Full Name" 
                variant="outlined" 
                required type="text"/>
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField id="outlined-basic" 
                label="Email" 
                variant="outlined" 
                required />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField id="outlined-basic" 
                label="Phone Number" 
                variant="outlined"
                required/>
            </Grid>
            <Grid item xs={12} md={6}>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">Service Required</InputLabel>
                        <Select
                             labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={service}
                            onChange={handleChange}
                            label="Service Required"
                            >
                                <MenuItem value="">
                                        <em>None</em>
                                </MenuItem>
                                <MenuItem value={'Buy'}>Buy</MenuItem>
                                <MenuItem value={'Sell'}>Sell</MenuItem>
                                <MenuItem value={'Rent'}>Rent</MenuItem>
                        </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField id="outlined-basic" 
                label="Message" 
                variant="outlined" 
                multiline
                rowsMax={3}
                
                required/>
            </Grid>
            <Grid item sx={12} md={6}>
            <Button variant="contained" color="primary" style={{margin:'20px'}}>
                   Submit
             </Button>
           
            </Grid>
            {/* <Grid item xs={6}>
                <TextField
                variant="outlined"
                id="outlined-basic"
                label="Email"
                name='email'
                value={values.email}
                // onChange={handleInputChange}
                />
            </Grid>

            <Grid item xs={8}>
                <TextField
                variant="outlined"
                id="outlined-basic"
                label="Phone"
                name="phone"
                value={values.phone}
                // onChange={handleInputChange}
                />
            </Grid> */}
            </Grid>
        </form>
    )
}

export default Form
