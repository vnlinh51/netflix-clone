import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDPbzScqhXtRESmmtvIeoCsrwF-TWVMrKw',
  authDomain: 'netflix-clone-e9f72.firebaseapp.com',
  projectId: 'netflix-clone-e9f72',
  storageBucket: 'netflix-clone-e9f72.appspot.com',
  messagingSenderId: '47838197152',
  appId: '1:47838197152:web:e9cf00c10f0f440698a0c5',
  measurementId: 'G-WTCEM1BVMF',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
