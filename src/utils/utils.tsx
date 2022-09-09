export const validateForm = (data: any, setError: any) => {
  if (!data?.email) {
    setError("Please enter the email");
  }
  if (
    !String(data?.email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  ) {
    setError("Please enter valid Email address");
    return false;
  }
  if (!data?.firstName) {
    setError("Please enter first name");
    return false;
  }
  if (!data?.lastName) {
    setError("Please enter last name");
    return false;
  }
  if (!data?.mobileNumber) {
    setError("please enter mobile number");
    return false;
  }
  if (data?.mobileNumber.length < 10) {
    setError("Please enter valid mobile number");
    return false;
  }
  if (!data?.password) {
    setError("Please enter the password");
    return false;
  }
  if (data?.password.length < 6) {
    setError("Please set password at least 6 digit");
    return false;
  }
  if (data?.password !== data?.reEnterPassword) {
    setError("Re Enter Password does not match to password please make sure");
    return false;
  }
  return true;
};
