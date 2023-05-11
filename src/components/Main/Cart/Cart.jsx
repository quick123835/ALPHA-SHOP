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

function Products({id , name , img , price , quantity , onCalculate}){
  const [count , setCount]=useState(0)

  function handlePlusClick(){
    setCount(count+1)
    onCalculate(price)
  }

  function handleMinusClick(){
    if(count > 0){
      setCount(count - 1 )
      onCalculate(-price)
    }
  }


  return(
    <div key={id} className={`${styles.productContainer}`} data-count="0" data-price={price}>
        <img className={`${styles.imgContainer}`} src={img} />
        <div  className={`${styles.productInfo}`}>
            <div className={`${styles.productName}`}>{name} </div>
            <div>
                <div className={`${styles.productControl}`}>
                <BiMinus className={`${styles.cartIcon}`}  onClick={handleMinusClick} />
                <span className={`${styles.productCount}`}>{count}</span>
                <BiPlus className={`${styles.cartIcon}`} onClick={handlePlusClick} />
                </div>
            </div>
            <div className={`${styles.price}`}>${price}</div>
        </div>
    </div>
  )

}



export default function Cart(){
  const [ttlCost , setTtlCost] = useState(0)
  function handleCalculate(price){
    setTtlCost(ttlCost + price)
  }
    return(
        <section className={`${styles.cartContainer}`}>
            <h3 className={`${styles.cartTitle}`}>購物籃</h3>
            {saleThings.map(data => <Products key={data.id} {...data} onCalculate={handleCalculate}/>)}
            <section className={`${styles.cartInfo} ${styles.shipping}`}>
                <div className={`${styles.text}`}>運費</div>
                <div className={styles.amount}>免費</div>
                </section>
            <section className={`${styles.cartInfo} ${styles.total}`}>
                <div className={`${styles.text}`}>小計</div>
                <div className={styles.amount}>${ttlCost}</div>
            </section>
        </section>
        
    )
}