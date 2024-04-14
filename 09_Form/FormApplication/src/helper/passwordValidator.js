function passwordValidation(string) {
    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/;
    if(!regex.test(string)) return false;
    return true;
}

export default passwordValidation;