import styles from './Step2.module.scss'

export default function Step2(){
    return(
        <>
            <form class="col col-12" data-phase="shipping">
              <h3 className={styles.formTitle}>運送方式</h3>
              <section class="form-body col col-12" className={styles.formBody}>
                <label class="radio-group col col-12" data-price="0" className={`${styles.radioGroup}`}>
                  <input id="shipping-standard" type="radio" name="shipping"  checked/>
                  <div class="radio-info" className={`${styles.radioInfo}`}>
                    <div class="col col-12" className={`${styles.col}`}>
                      <div class="text" className={styles.text}>標準運送</div>
                      <div class="price" className={styles.price}></div>
                      <div class="period col col-12" className={`${styles.col} ${styles.period}`}>約 3~7 個工作天</div>
                    </div>
                    
                  </div>
                  <div class="radio-box-border" className={styles.radioBoxBorder}></div>
                </label>
                <label class="radio-group col col-12" data-price="500" className={`${styles.radioGroup}`}>
                  <input id="shipping-dhl" type="radio" name="shipping" />
                  <div class="radio-info" className={`${styles.radioInfo}`}>
                    <div class="col col-12" className={`${styles.col}`}>
                      <div class="text" className={styles.text}>DHL 貨運</div>
                      <div class="price" className={styles.price}></div>
                      <div class="period col col-12" className={`${styles.col} ${styles.period}`}>48 小時內送達</div>
                    </div>
                  </div>
                  <div class="radio-box-border" className={styles.radioBoxBorder}></div>
                </label>
              </section>
            </form>
        </>
    )
}