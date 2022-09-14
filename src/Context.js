import {useState, createContext} from 'react' 
// import Cart from './components/pages/Cart'

export const cartContext = createContext()

const Context = ({children}) => {
    const [cart, setCart] = useState([])
  return (
    <cartContext.Provider value={{cart,setCart}}>{children}</cartContext.Provider>
  )
}

export default Context