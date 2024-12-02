export const validateFormData = ({ email, password, username }) => {
    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{9,}$/.test(password);
    if (!isEmailValid) return "Email is not valid";
    if (!isPasswordValid) return "Password is not valid";
    if (username) {
        const isUsernameValid = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9]+$/.test(username);
        if (!isUsernameValid) return "Username is not valid";
    }
    return null;
}