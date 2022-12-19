import React from "react";
import StyledFirebaseAuth from "../components/StyledFirebaseAuth";
import firebase from "../firebase/clientApp";

// Creates an object which houses the route if the signin is successful, and the sign in options available
const uiConfig = {
    signInSuccessUrl: "/",
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};

// Uses the styled firebaseAuth component to prompt the user to sign in 
function SignIn() {
    return (
        <div>
            <StyledFirebaseAuth uiConfig = {uiConfig} firebaseAuth = {firebase.auth()} />
        </div>
    );
}

export default SignIn;