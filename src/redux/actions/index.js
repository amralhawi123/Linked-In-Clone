import {auth, db, provider, storage} from '../../firebase'
import {signInWithPopup} from 'firebase/auth'
import { getArticles, setLoading, setUser } from './actions';
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  doc, deleteDoc
} from 'firebase/firestore';

export function signInApi(){
   return (dispatch)=> {
      signInWithPopup(auth, provider).then((payload) => {
         dispatch(setUser(payload.user))
      }).catch((error) => alert(error.message))
   }
}
export function signOutAPI(){
   return (dispatch)=> {
      auth.signOut()
      .then(() => {
         dispatch(setUser(null))
      }).catch((error) => alert(error.message))
   }
}

export function getUserAuth(){
   // to change user account which stored in redux
   return (dispatch) => {
      auth.onAuthStateChanged(async (user) => {
         if(user){
            dispatch(setUser(user))
         }
      })
   }
}

export function PostArticleApi(payload) {
   return (dispatch) => {
      dispatch(setLoading(true));
      if (payload.image) {
        const storageRef = ref(storage, `image/${payload.image.name}`);
        const uploadRef = uploadBytesResumable(storageRef, payload.image);
        uploadRef.on(
          "state_changed",
          () => {
            getDownloadURL(uploadRef.snapshot.ref).then((downloadURl) => {
              const collRef = collection(db, "articles");
              addDoc(collRef, {
                actor: {
                  description: payload.user.email,
                  title: payload.user.displayName,
                  date: payload.timestamp,
                  image: payload.user.photoURL,
                }, 
                comments:0,
                likes:43,
                video: payload.video,
                description: payload.description,
                shareImg: downloadURl,
              });
            });
            dispatch(setLoading(false));
          }
        );
      } else if (payload.video) {
        const collRef = collection(db, "articles");
        addDoc(collRef, {
          actor: {
            description: payload.user.email,
            title: payload.user.displayName,
            date: payload.timestamp,
            image: payload.user.photoURL,
          }, 
          comments:0,
          likes:43,
          video: payload.video,
          description: payload.description,
          shareImg: payload.image,
        });
        dispatch(setLoading(false));
      } else {
        const collRef = collection(db, "articles");
        addDoc(collRef, {
          actor: {
            description: payload.user.email,
            title: payload.user.displayName,
            date: payload.timestamp,
            image: payload.user.photoURL,
          }, 
          comments:0,
          likes:43,
          video: payload.video,
          description: payload.description,
          shareImg: payload.image,
        });
        dispatch(setLoading(false));
      }
    };
}

export function getArticleApi(){
  return (dispatch) => {
    let payload;
    const collRef = collection(db, "articles");
    const orderRef = query(collRef, orderBy("actor.date", "desc"))
    onSnapshot(orderRef, (snapshot) => {
      payload = snapshot.docs.map((doc) => ({...doc.data(), id:doc.id}))
      dispatch(getArticles(payload))
    })
  }
}


export function deletePost (id){
  deleteDoc(doc(db,"articles" , id))
}
