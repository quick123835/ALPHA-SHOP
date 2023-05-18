import { createContext  , useContext } from 'react'

const cartData = [
    {
      id: '1',
      name: '貓咪罐罐',
      img: 'https://picsum.photos/300/300?text=1',
      price: 100,
      quantity: 2,
    },
    {
      id: '2',
      name: '貓咪干干',
      img: 'https://picsum.photos/300/300?text=2',
      price: 200,
      quantity: 1,
    },
  ]


export const CartContext = createContext(0)


export const CartProvider = ({children}) => {
    return(
        <CartContext.Provider value={cartData}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () =>{
    const cart = useContext(CartContext)

    return cart
}
