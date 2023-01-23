import { useEffect, useState, useContext } from "react";
import { getRedirectResult } from "firebase/auth";

// import { UserContext } from "../../contexts/user.context";

import {
    auth,
    signInWithGooglePopUp,
    signInWithGoogleRedirect,
    createUserDocumentFromAuth
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

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
        const useDocRef = await createUserDocumentFromAuth(user);
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
            const { user } = await signInAuthUserWithEmailAndPassword(email, password);

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
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <FormInput
                        label="Email"
                        type="email"
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
                <div className="buttons-outer-container">
                    <div className="button-container">
                        <Button type="submit" buttonType="inverted" label="Sign In" />
                    </div>
                    <div type='button' className="button-container">
                        <Button onClick={logGoogleUser} buttonType="google" label="Sign In with Google" />
                    </div>
                    <div type='button' className="button-container">
                        <Button onClick={signInWithGoogleRedirect} buttonType="google" label="Sign In with Google Redirect" />
                    </div>
                </div>
            </form>

        </>
    );
}
export default SignInForm;