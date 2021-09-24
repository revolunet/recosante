import React, { useState } from 'react'

import UserContext from 'src/utils/UserContext'

export default function ModalProvider(props) {
  const [user, setUser] = useState({
    indicateurs_frequence: ['alerte'],
    indicateurs_media: ['email'],
    recommandations: ['oui'],
  })

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        mutateUser: (mutation) => setUser({ ...user, ...mutation }),
      }}
    >
      {props.children}
    </UserContext.Provider>
  )
}
