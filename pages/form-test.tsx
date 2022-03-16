import { NextPage } from "next";
import {Formik, Form, Field, FormikProps} from 'formik'
import * as yup from 'yup';
import classes from './form-test.module.css'

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
    phoneNo: number;
  }

const FormTestPage: NextPage = () => {
    const initialValues: FormValues = { firstName: '', lastName: '', email: '', phoneNo: 0 };
    const phoneNumExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    
   return (
     <div className={classes.maincontainer}>
       <h1 className={classes.formheader}>Form Test</h1>
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
             phoneNo: yup.string().matches(phoneNumExp, 'Phone number is not valid')
         })}
       >
           {({ errors, touched }) => (
         <Form className={classes.form}>
           <label htmlFor="firstName">First Name</label>
           <Field className={classes.formfield} id="firstName" name="firstName" placeholder="First Name" />
           {errors.firstName && touched.firstName ? (
             <div>{errors.firstName}</div>
           ) : null}

           <label htmlFor="lastName">Last Name</label>
           <Field className={classes.formfield} id="lastName" name="lastName" placeholder="Last Name" />
           {errors.lastName && touched.lastName ? (
             <div>{errors.lastName}</div>
           ) : null}

           <label htmlFor="email">Email</label>
           <Field className={classes.formfield} id="email" name="email" placeholder="Email" />
           {errors.email && touched.email ? <div>{errors.email}</div> : null}

           <label htmlFor="phoneNo">Phone Number</label>
           <Field className={classes.formfield} id="phoneNo" name="phoneNo" placeholder="Phone Number" />
           {errors.phoneNo && touched.phoneNo ? <div>{errors.phoneNo}</div> : null}

           <button className={classes.formbutton} type="submit">Submit</button>
         </Form>
         )}
       </Formik>
       </div>
   );
  };
  
  export default FormTestPage;
  