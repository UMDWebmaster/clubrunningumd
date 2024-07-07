import { Container } from "@mui/material";
import React from "react";


function swap(s) {

  let arr = s.split('');
  // Swap adjacent digits if they have the same parity
  for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - 1; j++) {
        let num1 = parseInt(arr[j], 10);
        let num2 = parseInt(arr[j + 1], 10);
          if (num1 % 2 === num2 % 2 && num1 < num2) {
              [num1, num2] = [num2, num1];
          }
      }
  }
  arr.join('');
return arr;
}

// Define a functional component named Races
function photoUpload() {





  return (
    <>
      <Container className="bg-white">
        {swap(s)}
      </Container>
    </>
      
  ); 
}

export default photoUpload;
