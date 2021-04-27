import React,{useContext} from 'react'
import { Button, TextField } from "@material-ui/core";
import { multiStepContext } from './StepContext';


const SecondStep = () => {
  const {setStep,UserData,SetUserData} = useContext(multiStepContext)
    return (
        <div>
        <div>
        <TextField
          label="Email"
          margin="normal"
          variant="outlined"
          color="secondary"
          value = {userData['email']}
          onChange = {(e) => setUserData({...userData,"email" : e.target.value})}
          margin = "normal"
        ></TextField>
        </div>
       
        <div>
        <TextField
          label="Country"
          margin="normal"
          variant="outlined"
          color="secondary"
          value = {userData['country']}
        onChange = {(e) => setUserData({...userData,"country" : e.target.value})}
        margin = "normal"
        ></TextField>
        </div>
       
        <div>
        <TextField
          label="District"
          margin="normal"
          variant="outlined"
          color="secondary"
          value = {userData['district']}
        onChange = {(e) => setUserData({...userData,"district" : e.target.value})}
        margin = "normal"
        ></TextField>
       </div>
      <Button variant = "contained" onClick = {() => setStep(1)} color = "secondary">Back</Button><span></span>
        <Button variant = "contained" onClick ={() =>setStep(3)} color ="primary">Next </Button>  
        </div>
    )
}

export default SecondStep
