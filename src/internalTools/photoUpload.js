import { Container } from "@mui/material";
import TextField from '@mui/material/TextField';
import { Formik, Form, Field } from 'formik';

import React from "react";


// Define a functional component named Races
function photoUpload() {
  return (
    <>
      <Container className="bg-white">
        <TextField onBlur={(value) => {alert(value)}}></TextField>
      </Container>
    </>
      
  ); 
}

export default photoUpload;
