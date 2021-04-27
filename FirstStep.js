import React,{useContext} from "react";
import { Button, TextField } from "@material-ui/core";
import {multiStepContext} from "./StepContext"

const FirstStep = () => {
  const {setStep,userData,setUserData} = useContext(multiStepContext)
  return (
    <div>
    <div>
      <TextField
        label="First Name"
        margin="normal"
        variant="outlined"
        color="secondary"
        value = {userData['firstname']}
        onChange = {(e) => setUserData({...userData,"firstname" : e.target.value})}
        margin = "normal"
      ></TextField>
      </div>
     
      <div>
      <TextField
        label="Last Name"
        margin="normal"
        variant="outlined"
        color="secondary"
        value = {userData['lastname']}
        onChange = {(e) => setUserData({...userData,"lastname" : e.target.value})}
        margin = "normal"
      ></TextField>
      </div>
     
      <div>
      <TextField
        label="Contact Number"
        margin="normal"
        variant="outlined"
        color="secondary"
        value = {userData['contact']}
        onChange = {(e) => setUserData({...userData,"contact" : e.target.value})}
        margin = "normal"
      ></TextField>
     </div>
    
      <Button variant = "contained" onClick = {() => setStep(2)} color ="primary">Next </Button>
    </div>
  );
};

export default FirstStep;
