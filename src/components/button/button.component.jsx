
const BUTTON_TYPE_CLASSES = {
    google: 'google',
    inverted: 'inverted',
};

const Button = ({ label, buttonType, ...otherProps }) => {

    return (
        <>
            <button
                className={`button ${BUTTON_TYPE_CLASSES[buttonType]}`}
                {...otherProps}
            >{label}</button>
        </>
    );
}
export default Button;