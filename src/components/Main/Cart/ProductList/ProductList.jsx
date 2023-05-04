import {AiOutlinePlusCircle} from "react-icons/ai"
import {AiOutlineMinusCircle} from 'react-icons/ai' 
import product1 from '../../../../assets/product1.jpg'
import product2 from'../../../../assets/product2.jpg'
import styles from './ProductList.module.scss'

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

function ProductItems({info}){
    return(
        <div class="product-container col col-12" className={`${styles.productContainer}`} data-count="0" data-price={info.price}>
              <img className={`${styles.imgContainer}`} src={info.src} />
              <div  className={`${styles.productInfo}`}>
                <div className={`${styles.productName}`}>{info.name} </div>
                <div>
                  <div className={`${styles.productControl}`}>
                    <AiOutlineMinusCircle className={`${styles.cartIcon}`} />
                    <span className={`${styles.productCount}`}>{info.productCount}</span>
                    <AiOutlinePlusCircle className={`${styles.cartIcon}`}/>
                  </div>
                </div>
                <div class="price"></div>
              </div>
        </div>
    )
}


export default function ProductList(){
    return(
      <>
        <ProductItems info={{
            id:1,
            name:'破壞補丁修身牛仔褲',
            price:'3999',
            src:product1,
            productCount:0,
        }}/>
          <ProductItems info={{
            id:2,
            name:'刷色直筒牛仔褲',
            price:'3999',
            src:product2,
            productCount:0,
        }}/>
      </>

        
    )
}