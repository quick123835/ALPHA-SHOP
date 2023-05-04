import ProductList from './ProductList/ProductList'
import styles from './Cart.module.scss'

export default function Cart(){
    return(
        <section className={`${styles.cartContainer}`}>
            <h3 className={`${styles.cartTitle}`}>購物籃</h3>
            <ProductList />
            {/* <ProfuctInfo /> */}
            <section className={`${styles.cartInfo} ${styles.shipping}`}>
                <div className={`${styles.text}`}>運費</div>
                <div className={`${styles.price}`}></div>
            </section>
            <section className={`${styles.cartInfo} ${styles.total}`}>
                <div className={`${styles.text}`}>小計</div>
                <div className={`${styles.price}`}></div>
            </section>
        </section>
        
    )
}