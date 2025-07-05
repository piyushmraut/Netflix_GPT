export const validateData = ( email, password) => {
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );

  // if (name !== null) {
  //   const isNameValid = /^[a-zA-Z\s'-]{2,50}$/.test(name);
  //   if (!isNameValid) {
  //     return "Name is not valid";
  //   }
  // }
  if (!isEmailValid) {
    return "Email is not valid";
  }
  if (!isPasswordValid) {
    return "Password is not valid";
  }

  return null;
};
