import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const Authentication = () => {
    return (
        <>
            <section className="forms-container">
                <div className="sign-in-container">
                    <h2 className="heading">Already have an account?</h2>
                    <p className="sub-heading">Sign up with your email and password.</p>
                    <SignInForm />
                </div>

                <div className="sign-up-container">
                    <h2 className="heading">Don't have an account?</h2>
                    <p className="sub-heading">Sign Up with your email and password.</p>
                    <SignUpForm />
                </div>
            </section>
        </>
    );
}
export default Authentication;