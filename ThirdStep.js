import React,{useContext} from 'react'
import { Button, TextField } from "@material-ui/core";
import { multiStepContext } from './StepContext';



const ThirdStep = () => {
  const {setStep,userData,seTUserData,submitData} = useContext(multiStepContext)

    return (
        <div>
        <div>
        <TextField
          label="City"
          margin="normal"
          variant="outlined"
          color="secondary"
          value = {userData['city']}
        onChange = {(e) => setUserData({...userData,"city" : e.target.value})}
        margin = "normal"
        ></TextField>
        </div>
       
        <div>
        <TextField
          label="Landmark"
          margin="normal"
          variant="outlined"
          color="secondary"
          value = {userData['landmark']}
        onChange = {(e) => setUserData({...userData,"landmark" : e.target.value})}
        margin = "normal"
        ></TextField>
        </div>
       
        <div>
        <TextField
          label="Postal Code"
          margin="normal"
          variant="outlined"
          color="secondary"
          value = {userData['postcode']}
        onChange = {(e) => setUserData({...userData,"postcode" : e.target.value})}
        margin = "normal"
        ></TextField>
       </div>
       <Button variant = "contained" onClick = {() => setStep(2)} color = "secondary">Back</Button><span></span>
        <Button variant = "contained" onclick = {submitData}  color ="primary">Submit </Button>   
        </div>
    )
}

export default ThirdStep
