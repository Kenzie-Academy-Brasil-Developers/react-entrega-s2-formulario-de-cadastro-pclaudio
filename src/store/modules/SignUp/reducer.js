const signUpReducer = (isSignedUp = false, action) => {
    switch(action.type) {
      case '@signUp/SET':
        return true;

      case '@signUp/UNSET':
        return false;

      default:
        return isSignedUp;
    }
};

export default signUpReducer;