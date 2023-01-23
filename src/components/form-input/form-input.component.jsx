const FormInput = ({ label, ...otherProps }) => {

    // check if the input is a radio button, 
    // switch the position of the <label>
    if (otherProps.type === 'radio') {
        return (
            <>
                <input {...otherProps} />
                <label>{label}</label>
            </>
        );
    }

    // if not a radio button
    return (
        <>
            <label>{label}</label>
            <input {...otherProps} />
        </>
    );
}
export default FormInput;