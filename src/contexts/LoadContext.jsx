import { createContext, useState } from "react"

export const LoadContext = createContext()

const LoadContextProvider = (props) => {
  const [loading, setLoading] = useState(true);

  return (
    <LoadContext.Provider value={[ loading, setLoading ]}>
      {props.children}
    </LoadContext.Provider>
  )
}

export default LoadContextProvider