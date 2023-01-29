import { useEffect, Fragment } from "react";
import { getRedirectResult } from "firebase/auth";

import {
    auth,
    signInWithGooglePopUp,
    signInWithGoogleRedirect,
    createUserDocumentFromAuth
} from "../../utils/firebase/firebase.utils";

// import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

// const defaultFormValues = {
//     email: '',
//     password: '',
// };

const SignInForm = () => {

    // const [formValues, setFormvalues] = useState(defaultFormValues);
    // const { email, password } = formValues;
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
        // resetFormValues();
    }

    // const handleChange = (event) => {
    //     //e.preventDefault();
    //     const { name, value } = event.target;
    //     setFormvalues({ ...formValues, [name]: value });
    //     console.log({ ...formValues, [name]: value }); // ...formValues are the previous values, 
    // }

    // const resetFormValues = () => {
    //     setFormvalues(defaultFormValues);
    // }

    return (
        <Fragment>
            < Formik
                initialValues={{
                    email: '',
                    password: ''
                }}

                validationSchema={Yup.object({
                    email: Yup.string().email('Please give a valid email address.').required('Required'),
                })}

                onSubmit={async (values, { resetForm }) => {
                    try {
                        await signInAuthUserWithEmailAndPassword(values.email, values.password);
                        // resetFormValues();
                        resetForm({});
                    } catch (error) {
                        alert('Something went wrong, can not sign in the user.', error.message)
                    }
                }}
            >

                {formik => (
                    <section>
                        <Form>
                            <div className="text-input">
                                <label htmlFor="name">Email</label>
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

                            <div className="buttons-outer-container">
                                <div>
                                    <Button type="submit" buttonType="inverted" >Sign In with Email</Button>
                                </div>
                                <div type='button'>
                                    <Button onClick={logGoogleUser} buttonType="google" >Sign In with Google</Button>
                                </div>
                                <div type='button'>
                                    <Button onClick={signInWithGoogleRedirect} buttonType="google" >Sign In with Google Redirect</Button>
                                </div>
                            </div>
                        </Form>
                    </section>
                )}
            </Formik >
        </Fragment>
    );
}
export default SignInForm;