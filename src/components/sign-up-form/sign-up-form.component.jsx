import { useState, useContext } from "react";

import { createAuthUserFromEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

// import { UserContext } from "../../contexts/user.context";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
    // const { setCurrentUser } = useContext(UserContext);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        try {
            const { user } = await createAuthUserFromEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, { displayName });

            // setCurrentUser(user); // removed for onAuthStateChanged()

            resetFormFields();
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use.');
            } else {
                console.log('User creation encountered an error.', error);
            }
        }
    }

    const handleChange = (event) => {
        // name and event are passed from form input through the event.target
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
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
                    <Button type='submit' label="Sign Up" />
                </div>

            </form>

        </>
    );
}

export default SignUpForm;