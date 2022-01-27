import {
  initializeApp
} from "https://www.gstatic.com/firebasejs/9.6.4/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  onSnapshot,
  deleteDoc,
  doc,
  getDoc,
  updateDoc
} from "https://www.gstatic.com/firebasejs/9.6.4/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCcbta16xkYb4SL_210Vjqy5mhzVQd7bzQ",
  authDomain: "crud-js-ac615.firebaseapp.com",
  projectId: "crud-js-ac615",
  storageBucket: "crud-js-ac615.appspot.com",
  messagingSenderId: "656728936289",
  appId: "1:656728936289:web:d5809dc8248f5650d7ff20"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();

export const guardarPost = (titulo, descripcion) =>
  addDoc(collection(db, "posteos"), {
    titulo,
    descripcion
  })

export const getPosteos = () => getDocs(collection(db, "posteos"));

export const onGetPosteos = (callback) => onSnapshot(collection(db, "posteos"), callback);

export const eliminarPosteo = id => deleteDoc(doc(db, 'posteos', id));

export const getPost = id => getDoc(doc(db, 'posteos', id));

export const actualizarPosteo = (id, nuevoPosteo) => updateDoc(doc(db, 'posteos', id), nuevoPosteo);