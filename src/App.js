import React from 'react';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'forebase/auth';

import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
import { useAuthState } from 'reacte-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyDsKmQdRjnpV6_FXkm-TDpCfYD4dz06R-k",
  authDomain: "exclamatio-chat.firebaseapp.com",
  projectId: "exclamatio-chat",
  storageBucket: "exclamatio-chat.appspot.com",
  messagingSenderId: "623819017292",
  appId: "1:623819017292:web:728b9152ddc2a3bc8478e9"
})

function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        
      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>

    </div>
  );
}

function SignIn() {
  const signIn = () => {
    const provider = new firebase.auth.sendSignInLinkToEmail
    auth.signInWithPopup(provider)
  }

  return (
    <button onClick={signIn}>Sign In</button>
  )

}

function SignOut() {
  return auth.currentUser && (
    <button onClick={() => auth.SignOut}>Sign Out</button>
  )
}

export default App;
