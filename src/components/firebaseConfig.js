import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth'; 


const firebaseConfig = {
    apiKey: "AIzaSyD-zPqjxUM7pKioIUAB4qJbqOIy3TyrthU",
  authDomain: "pw3etec-6eb77.firebaseapp.com",
  databaseURL: "https://pw3etec-6eb77-default-rtdb.firebaseio.com",
  projectId: "pw3etec-6eb77",
  storageBucket: "pw3etec-6eb77.appspot.com",
  messagingSenderId: "781105040946",
  appId: "1:781105040946:web:85e86526dfbf4a9d0e762b",
  measurementId: "G-M9KVLC7K33"
}

// Inicialize o Firebase
// Delete o Firebase App existente, se existir
if (firebase.apps.length) {
  firebase.apps[0].delete()
    .then(() => {
      console.log('Firebase App excluído com sucesso');
      // Inicialize o Firebase com a nova configuração
      firebase.initializeApp(firebaseConfig);
    })
    .catch(error => {
      console.error('Erro ao excluir o Firebase App:', error);
    });
} else {
  console.log('Nenhum Firebase App encontrado para excluir');
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
