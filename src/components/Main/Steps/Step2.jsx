import styles from './Step2.module.scss'

export default function Step2(){
    return(
        <>
            <form data-phase="shipping">
              <h3 className={styles.formTitle}>運送方式</h3>
              <section className={styles.formBody}>
                <label data-price="0" className={`${styles.radioGroup}`}>
                  <input id="shipping-standard" type="radio" name="shipping"  checked/>
                  <div className={`${styles.radioInfo}`}>
                    <div className={`${styles.col}`}>
                      <div className={styles.text}>標準運送</div>
                      <div className={styles.price}></div>
                      <div className={`${styles.col} ${styles.period}`}>約 3~7 個工作天</div>
                    </div>
                    
                  </div>
                  <div className={styles.radioBoxBorder}></div>
                </label>
                <label data-price="500" className={`${styles.radioGroup}`}>
                  <input id="shipping-dhl" type="radio" name="shipping" />
                  <div className={`${styles.radioInfo}`}>
                    <div className={`${styles.col}`}>
                      <div className={styles.text}>DHL 貨運</div>
                      <div className={styles.price}></div>
                      <div className={`${styles.col} ${styles.period}`}>48 小時內送達</div>
                    </div>
                  </div>
                  <div className={styles.radioBoxBorder}></div>
                </label>
              </section>
            </form>
        </>
    )
}