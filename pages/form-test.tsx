import { NextPage } from "next";
import {Formik, Form, Field, FormikProps} from 'formik'
import * as yup from 'yup';

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
  }

const FormTestPage: NextPage = () => {
    const initialValues: FormValues = { firstName: '', lastName: '', email: '' };
    
   return (
     <div>
       <h1>Form Test</h1>
       <Formik
         initialValues={initialValues}
         onSubmit={(values, actions) => {
           console.log({ values, actions });
           alert(JSON.stringify(values, null, 2));
           actions.setSubmitting(false);
         }}
         validationSchema={yup.object().shape({
             email: yup.string()
                .email()
                .required('Enter valid email'),
             firstName: yup.string().required('Please enter first name'),
             lastName: yup.string().required('Please enter last name'),
         })}
       >
           {({ errors, touched }) => (
         <Form>
           <label htmlFor="firstName">First Name</label>
           <Field id="firstName" name="firstName" placeholder="First Name" />
           {errors.firstName && touched.firstName ? (
             <div>{errors.firstName}</div>
           ) : null}

           <label htmlFor="lastName">Last Name</label>
           <Field id="lastName" name="lastName" placeholder="Last Name" />
           {errors.lastName && touched.lastName ? (
             <div>{errors.lastName}</div>
           ) : null}

           <label htmlFor="email">Email</label>
           <Field id="email" name="email" placeholder="Email" />
           {errors.email && touched.email ? <div>{errors.email}</div> : null}
           
           <button type="submit">Submit</button>
         </Form>
         )}
       </Formik>
     </div>
   );
  };
  
  export default FormTestPage;
  