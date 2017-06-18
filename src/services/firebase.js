import firebase from 'firebase'

const config = {
  '🔥': {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  }
}

if ( !firebase.apps.length ) firebase.initializeApp(config['🔥'])

export default firebase

export const sendMessage = message => firebase.database().ref('new/message').push({content: message})
