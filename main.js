import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js'
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  deleteDoc,
  updateDoc,
  query,
  orderBy
} from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js'

const firebaseConfig = {
  apiKey: "AIzaSyBerOBhNO7D2T11bd1s4_VycsvQArOXwcY",
  authDomain: "insan-cerme.lang-fb8a6.firebaseapp.com",
  projectId: "insan-cermelang-fb8a6",
  storageBucket: "insan-cermelang-fb8a6.appspot.com",
  messagingSenderId: "80632964152",
  appId: "1:80632964152:web:fe15adad38d88365d172cd",
  measurementId: "G-W9ZHJMZNC9"
};

// inisialisasi firebase
const aplikasi = initializeApp(firebaseConfig)
const basidata = getFirestore(aplikasi)

export async function ambilDaftarsiswaw()
const refdokumen = collection(basidata,"siswa");
const kueri = query(refdokumen, orderBy("nama"));
const cuplikankueri = await getDocs(kueri);

let hasilkueri = [];
cuplikankueri.forEach((dokumen) => {
  hasilkueri.push({
    id: dokumen.id, 
    nama: dokumen.data().nama
    alamat: dokumen.data().alamat
  })
 })
 
 return hasilkueri;

}