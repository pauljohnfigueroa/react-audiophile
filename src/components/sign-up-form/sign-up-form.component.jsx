// import { useState } from "react";

import { createAuthUserFromEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

// import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

// const defaultFormFields = {
//     displayName: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
// }

const SignUpForm = () => {
    // const [formFields, setFormFields] = useState(defaultFormFields);
    // const { displayName, email, password, confirmPassword } = formFields;
    // const { setCurrentUser } = useContext(UserContext);

    // const resetFormFields = () => {
    //     setFormFields(defaultFormFields);
    // }

    // const handleSubmit = async (event) => {
    //     event.preventDefault();

    //     if (password !== confirmPassword) {
    //         alert('Passwords do not match.');
    //         return;
    //     }

    //     try {
    //         const { user } = await createAuthUserFromEmailAndPassword(email, password);
    //         await createUserDocumentFromAuth(user, { displayName });

    //         // setCurrentUser(user); // removed for onAuthStateChanged()
    //         resetFormFields();
    //     } catch (error) {
    //         if (error.code === 'auth/email-already-in-use') {
    //             alert('Cannot create user, email already in use.');
    //         } else {
    //             console.log('User creation encountered an error.', error);
    //         }
    //     }
    // }

    // const handleChange = (event) => {
    //     // name and event are passed from form input through the event.target
    //     const { name, value } = event.target;
    //     setFormFields({ ...formFields, [name]: value });
    // }

    return (
        <>
            < Formik
                initialValues={{
                    displayName: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                }}

                validationSchema={Yup.object({
                    displayName: Yup.string('Please give a valid email address.').required('Required'),
                    email: Yup.string().email('Please give a valid email address.').required('Required'),
                    password: Yup.string('Password length must be at least 8 characters.').required('Required'),
                    confirmPassword: Yup.string('Must be the same as password.').required('Required'),
                })}

                onSubmit={async (values, { resetForm }) => {
                    try {
                        const { user } = await createAuthUserFromEmailAndPassword(values.email, values.password);
                        await createUserDocumentFromAuth(user, { displayName: user.displayName });
                        // resetFormFields();
                        resetForm({})
                    } catch (error) {
                        if (error.code === 'auth/email-already-in-use') {
                            alert('Cannot create user, email already in use.');
                        } else {
                            console.log('User creation encountered an error.', error);
                        }
                    }
                }}
            >
                {formik => (
                    <section>
                        <Form>
                            <div className="text-input">
                                <label htmlFor="displayName">Display Name</label>
                                <Field name="displayName" type="text" />
                                <div className="form-error">
                                    <ErrorMessage name="displayName" />
                                </div>
                            </div>

                            <div className="text-input">
                                <label htmlFor="email">Email</label>
                                <Field name="email" type="email" />
                                <div className="form-error">
                                    <ErrorMessage name="email" />
                                </div>
                            </div>

                            <div className="text-input">
                                <label htmlFor="password">Password</label>
                                <Field name="password" type="password" />
                                <div className="form-error">
                                    <ErrorMessage name="password" />
                                </div>
                            </div>

                            <div className="text-input">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <Field name="confirmPassword" type="password" />
                                <div className="form-error">
                                    <ErrorMessage name="confirmPassword" />
                                </div>
                            </div>
                            <div className="buttons-outer-container">
                                <div>
                                    <Button type="submit" buttonType="inverted" >Sign Up</Button>
                                </div>

                            </div>
                        </Form>
                    </section>
                )}
            </Formik>
            {/* <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <FormInput
                        label="Display Name"
                        type="text"
                        className="form-input"
                        onChange={handleChange}
                        required
                        name="displayName"
                        value={displayName}
                    />
                </div>

                <div className="form-row">
                    <FormInput
                        label="Email"
                        type="text"
                        className="form-input"
                        onChange={handleChange}
                        required
                        name="email"
                        value={email}
                    />
                </div>

                <div className="form-row">
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

                <div className="form-row">
                    <FormInput
                        label="Confirm Password"
                        type="password"
                        className="form-input"
                        onChange={handleChange}
                        required
                        name="confirmPassword"
                        value={confirmPassword}
                    />
                </div>

                <div className="button-container">
                    <Button type='submit' >Sign Up</Button>
                </div>

            </form> */}

        </>
    );
}

export default SignUpForm;