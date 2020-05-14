import React, { createContext, useState, useEffect } from 'react'
import auth, { createUserProfileDocument } from 'core/firebase/auth'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapshot => {
          setUser({ uid: snapshot.id, ...snapshot.data() })
        })
      }

      setUser(userAuth)
    })

    return () => unsubscribeFromAuth()
  }, [setUser])

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
}

export default AuthProvider
