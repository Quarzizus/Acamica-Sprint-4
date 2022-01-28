import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAkPSey5v875HAAvOURfxbuodPUpUOQ1oA",
  authDomain: "quarzizusdevsunited.firebaseapp.com",
  projectId: "quarzizusdevsunited",
  storageBucket: "quarzizusdevsunited.appspot.com",
  messagingSenderId: "892735982389",
  appId: "1:892735982389:web:f7e82d8c1f312fadb21a7c",
};

const app = initializeApp(firebaseConfig);

export { firebaseConfig, app };
