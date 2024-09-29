export const checkValidDate = (name,email, password) => {
    // Create regex objects for validation
    const nameRegex = /^[A-Za-z]+([-'\s][A-Za-z]+)*$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
    // Test the email and password against the regex
    const isNameValid=nameRegex.test(name);
    const isEmailValid = emailRegex.test(email);
    const isPasswordValid = passwordRegex.test(password);
  
    // Return error messages if validation fails
    if(!isNameValid) return " Username is not valid"
    if (!isEmailValid) return " Email ID not Valid";
    if (!isPasswordValid) return " Password is not Valid";
  
    return null; // Return null if both validations pass
  };
  