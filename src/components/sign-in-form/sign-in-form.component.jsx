import { useEffect, useState, Fragment } from "react";
import { getRedirectResult } from "firebase/auth";

import {
    auth,
    signInWithGooglePopUp,
    signInWithGoogleRedirect,
    createUserDocumentFromAuth
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const defaultFormValues = {
    email: '',
    password: '',
};

const SignInForm = () => {

    const [formValues, setFormvalues] = useState(defaultFormValues);
    const { email, password } = formValues;
    // const { setCurrentUser } = useContext(UserContext);

    useEffect(() => {
        // const response = await getRedirectResult(auth);
        async function fetchData() {
            const response = await getRedirectResult(auth);
            // console.log(response);
            if (response) {
                const useDocRef = createUserDocumentFromAuth(response.user);
                return useDocRef;
            }
            return response;
        }
        fetchData();
    }, []);

    const logGoogleUser = async () => {
        // get the authenticate user
        //const response = await signInWithGooglePopUp();

        // the object returned (response) contains the auth_token 
        // and other credentials like the uid that we can use as a
        // unique key to store this user in firestore
        //console.log(response);

        const { user } = await signInWithGooglePopUp();
        // const useDocRef = await createUserDocumentFromAuth(user);
        await createUserDocumentFromAuth(user);
        resetFormValues();
    }

    const handleChange = (event) => {
        //e.preventDefault();
        const { name, value } = event.target;
        setFormvalues({ ...formValues, [name]: value });
        console.log({ ...formValues, [name]: value }); // ...formValues are the previous values, 
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // const response = await signInAuthUserWithEmailAndPassword(email, password);
            // const { user } = await signInAuthUserWithEmailAndPassword(email, password);
            await signInAuthUserWithEmailAndPassword(email, password);
            // setCurrentUser(user); // removed for onAuthStateChanged()

            //console.log(response);
            resetFormValues();
        } catch (error) {
            alert('Something went wrong, can not sign in the user.', error.message)
        }
    }

    const resetFormValues = () => {
        setFormvalues(defaultFormValues);
    }

    return (
        <Fragment>
            < Formik
                initialValues={{
                    email: ''
                }}

                validationSchema={Yup.object({
                    email: Yup.string().email('Please give a valid email address.').required('Required'),
                })}

                onSubmit={values => {
                    // Handle submitted values here
                    //alert(JSON.stringify(values, null, 2));
                    //event.preventDefault();
                    try {
                        // const response = await signInAuthUserWithEmailAndPassword(email, password);
                        // const { user } = await signInAuthUserWithEmailAndPassword(email, password);
                        signInAuthUserWithEmailAndPassword(values.email, values.password);
                        // setCurrentUser(user); // removed for onAuthStateChanged()

                        //console.log(response);
                        resetFormValues();
                    } catch (error) {
                        alert('Something went wrong, can not sign in the user.', error.message)
                    }
                }}
            >

                {formik => (
                    <section className="checkout-form">
                        <Form >
                            <div className="text-input">
                                <label htmlFor="name">Email</label>
                                <Field name="email" type="text" />
                                <ErrorMessage name="email" />
                            </div>

                            <div className="text-input">
                                <label htmlFor="name">Password</label>
                                <Field name="password" type="password" />
                                <ErrorMessage name="password" />
                            </div>

                            <div className="buttons-outer-container">
                                <div className="button-container">
                                    <Button type="submit" buttonType="inverted" >Sign In</Button>
                                </div>
                                <div type='button' className="button-container">
                                    <Button onClick={logGoogleUser} buttonType="google" >Sign In with Google</Button>
                                </div>
                                <div type='button' className="button-container">
                                    <Button onClick={signInWithGoogleRedirect} buttonType="google" >Sign In with Google Redirect</Button>
                                </div>
                            </div>

                            {/* <div className="button-container">
                                    <Button type="submit" label="Continue & Pay" />
                                </div> */}
                        </Form>
                    </section>
                )}
            </Formik >

            {/* <form onSubmit={handleSubmit}>
                <div className="text-input">
                    <FormInput
                        label="Email"
                        type="email"
                        className="form-input"
                        onChange={handleChange}
                        required
                        name="email"
                        value={email}
                    />

                    <label htmlFor="name">Email</label>

                </div>
                <div className="text-input">
                    <FormInput
                        label="Password"
                        type="password"
                        className="form-input"
                        onChange={handleChange}
                        required
                        name="password"
                        value={password}
                    />
                </div>
                <div className="buttons-outer-container">
                    <div className="button-container">
                        <Button type="submit" buttonType="inverted" >Sign In</Button>
                    </div>
                    <div type='button' className="button-container">
                        <Button onClick={logGoogleUser} buttonType="google" >Sign In with Google</Button>
                    </div>
                    <div type='button' className="button-container">
                        <Button onClick={signInWithGoogleRedirect} buttonType="google" >Sign In with Google Redirect</Button>
                    </div>
                </div>
            </form> */}

        </Fragment>
    );
}
export default SignInForm;