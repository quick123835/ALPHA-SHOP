import {BiMinus} from 'react-icons/bi' 
import product1 from '../../../../assets/product1.jpg'
import product2 from'../../../../assets/product2.jpg'
import styles from './ProductList.module.scss'
import {BiPlus} from "react-icons/bi"

const items = [
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

function Products({info}){
  const products = items.map(item => {
    return(
      <div id={item.id} className={`${styles.productContainer}`} data-count="0" data-price={item.price}>
              <img className={`${styles.imgContainer}`} src={item.img} />
              <div  className={`${styles.productInfo}`}>
                <div className={`${styles.productName}`}>{item.name} </div>
                <div>
                  <div className={`${styles.productControl}`}>
                    <BiMinus className={`${styles.cartIcon}`} />
                    <span className={`${styles.productCount}`}>{item.quantity}</span>
                    <BiPlus className={`${styles.cartIcon}`}/>
                  </div>
                </div>
                <div className={`${styles.price}`}>${item.price}</div>
              </div>
        </div>
    )
  })
  return products
}


export default function ProductList(){
    return(
      <Products />
    )
}