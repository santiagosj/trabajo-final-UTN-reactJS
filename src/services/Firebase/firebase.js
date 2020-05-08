import * as firebase from 'firebase';
import { config } from './config';

!firebase.apps.length && firebase.initializeApp(config);

const auth = firebase.auth();

const db = firebase.firestore()

const storage = firebase.storage()

export {
  auth,
  db,
  storage
}