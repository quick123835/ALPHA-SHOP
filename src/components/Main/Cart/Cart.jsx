import styles from './Cart.module.scss'
import {useState} from 'react'
import {BiMinus} from 'react-icons/bi' 
import {BiPlus} from "react-icons/bi"

let saleThings = [
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

function Products({id , name , img , price , quantity}){
  const [itemList , setItemList]=useState(saleThings)
  function handlePlusClick(itemId){
    const newItemList = itemList.map(item => {
      if(itemId == item.id){
        return {
          ...item,
          quantity: item.quantity+1
        }
      }else{
        return item
      }
    })
    setItemList(newItemList)
  }

  function handleMinusClick(itemId){
    const newItemList = itemList.map(item => {
      if(itemId == item.id && item.quantity > 0){
        return{
          ...item,
          quantity: item.quantity-1
        }
      }else{
        return item
      }
    })
    setItemList(newItemList)
  }

  return(
    <div key={id} className={`${styles.productContainer}`} data-count="0" data-price={price}>
        <img className={`${styles.imgContainer}`} src={img} />
        <div  className={`${styles.productInfo}`}>
            <div className={`${styles.productName}`}>{name} </div>
            <div>
                <div className={`${styles.productControl}`}>
                <BiMinus className={`${styles.cartIcon}`} onClick={() =>{handleMinusClick(id)}} />
                <span className={`${styles.productCount}`}>{quantity}</span>
                <BiPlus className={`${styles.cartIcon}`} onClick={() =>{handlePlusClick(id)}} />
                </div>
            </div>
            <div className={`${styles.price}`}>${price}</div>
        </div>
    </div>
  )

}



export default function Cart(){
    return(
        <section className={`${styles.cartContainer}`}>
            <h3 className={`${styles.cartTitle}`}>購物籃</h3>
            {saleThings.map(data => <Products key={data.id} {...data} />)}
            <section className={`${styles.cartInfo} ${styles.shipping}`}>
                <div className={`${styles.text}`}>運費</div>
                <div className={styles.amount}>0</div>
                </section>
            <section className={`${styles.cartInfo} ${styles.total}`}>
                <div className={`${styles.text}`}>小計</div>
                <div className={styles.amount}>0</div>
            </section>
        </section>
        
    )
}