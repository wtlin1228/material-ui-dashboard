import firebase, { firestore } from './index'
import 'firebase/auth'

const auth = firebase.auth()

// providers
export const googleLoginProvider = new firebase.auth.GoogleAuthProvider()
export const facebookLoginProvider = new firebase.auth.FacebookAuthProvider()

// signIn methods
export const signInWithGoogle = () => auth.signInWithPopup(googleLoginProvider)
export const signInWithFacebook = () =>
  auth.signInWithPopup(facebookLoginProvider)

// signOut
export const signOut = () => auth.signOut()

export default auth

// helpers
export const createUserProfileDocument = async (user, additionalData) => {
  if (!user) return

  // Get a reference to the place in the database where a user profile might be.
  const userRef = firestore.doc(`users/${user.uid}`)

  // Go and fetch the document from the location.
  const snapshot = await userRef.get()

  if (!snapshot.exists) {
    const { displayName, email, photoURL } = user
    const createAt = new Date()
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        createAt,
        ...additionalData,
      })
    } catch (error) {
      console.error('Error creating user', error.message)
    }
  }

  return getUserDocument(user.uid)
}

const getUserDocument = async uid => {
  if (!uid) return null
  try {
    return firestore.collection('users').doc(uid)
  } catch (error) {
    console.error('Error fetching user', error.message)
  }
}
