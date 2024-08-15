import { Container } from "@mui/material";
import { Formik, Form, Field } from 'formik';


const photoArchive = require("../data/photoArchive.json");



// Define a functional component named raceNames
export default function photoUpload() {
  return (
    <>
      <Container className="bg-white">
        <Formik
          initialValues={{
            date: '',
            raceName: '',
            links: '',
          }}
          onSubmit={async (values) => {
            const temp = photoArchive;
            temp.push(values);

      
          }}
        >
          <Form>
            <label htmlFor="date">date</label>
            <Field id="date" name="date" placeholder="Date" />
            <label htmlFor="raceName">raceName</label>
            <Field id="raceName" name="raceName" placeholder="raceName" />
            <label htmlFor="links">Email</label>
            <Field id="links" name="links" placeholder="link" />
            <button type="submit" >Submit</button>
          </Form>
        </Formik>
    </Container >
    </>
      
  );
}