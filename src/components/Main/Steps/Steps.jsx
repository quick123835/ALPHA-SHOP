import styles from './Steps.module.scss'


function Steps({step}){
    if(step == 1){
        return(
            <>
                <form  data-phase="address">
                <h3 className={styles.formTitle}>寄送地址</h3>
                <section className={`${styles.step1Form}`}>
                    <div className={`${styles.row}`}>
                        <div className={`${styles.called} ${styles.inputGroup}`}>
                            <div className={styles.inputLabel}>稱謂</div>
                            <div className="select-container">
                            <select name="selectSex" default="先生">
                                <option value="mr">先生</option>
                                <option value="ms">女士</option>
                                <option value="mx">不明</option>
                            </select>
                            </div>
                        </div>
                        <div className={styles.name}>
                            <div className={styles.inputLabel}>姓名</div>
                            <input type="text" placeholder="請輸入姓名" />
                        </div>
                        </div>
                        <div className={`${styles.row}`}>
                        <div className={styles.tel}>
                            <div className={styles.inputLabel}>電話</div>
                            <input type="tel" placeholder="請輸入行動電話" />
                        </div>
                        <div className={styles.email}>
                            <div className={styles.inputLabel}>Email</div>
                            <input type="email" placeholder="請輸入電子郵件" />
                        </div>
                        </div>
                        <div className={`${styles.row}`}>
                        <div className={styles.city}>
                            <div className={styles.inputLabel}>縣市</div>
                            <div className="select-container">
                            <select required default="請選擇縣市">
                                <option value="">請選擇縣市</option>
                                <option value="KLU">基隆市</option>
                                <option value="TPH">新北市</option>
                                <option value="TPE">臺北市</option>
                                <option value="TYC">桃園市</option>
                                <option value="HSH">新竹縣</option>
                                <option value="HSC">新竹市</option>
                                <option value="MAC">苗栗市</option>
                                <option value="MAL">苗栗縣</option>
                                <option value="TXG">臺中市</option>
                                <option value="CWH">彰化縣</option>
                                <option value="CWS">彰化市</option>
                                <option value="NTC">南投市</option>
                                <option value="NTO">南投縣</option>
                                <option value="YLH">雲林縣</option>
                                <option value="CHY">嘉義縣</option>
                                <option value="CYI">嘉義市</option>
                                <option value="TNN">臺南市</option>
                                <option value="KHH">高雄市</option>
                                <option value="IUH">屏東縣</option>
                                <option value="PTS">屏東市</option>
                                <option value="ILN">宜蘭縣</option>
                                <option value="ILC">宜蘭市</option>
                                <option value="HWA">花蓮縣</option>
                                <option value="HWC">花蓮市</option>
                                <option value="TTC">臺東市</option>
                                <option value="TTT">臺東縣</option>
                                <option value="PEH">澎湖縣</option>
                                <option value="KMN">金門縣</option>
                                <option value="LNN">連江縣</option>
                            </select>
                            </div>
                        </div>
                        <div className={styles.address}>
                            <div className={styles.inputLabel}>地址</div>
                            <input type="text" placeholder="請輸入地址" />
                        </div>
                    </div>
                </section>
                </form>       
            </>
        )
    }else if(step == 2){
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
    }else if(step == 3){
        return(
            <>
                <form data-phase="credit-card">
                    <h3 className={styles.formTitle}>付款資訊</h3>
                    <section >
                        <div className={styles.row}>
                            <div className={styles.creditName}>
                                <div className={styles.inputLabel}>持卡人姓名</div>
                                <input type="text" placeholder="John Doe" />
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.creditNum}>
                                <div className={`${styles.inputLabel} `}>卡號</div>
                                <input type="text" placeholder="1111 2222 3333 4444" />
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.timeBar}>
                                <div  className={styles.inputLabel}>有效期限</div>
                                <input type="text" placeholder="MM/YY" />
                            </div>
                            <div className={styles.cvc}>
                                <div className={styles.inputLabel}>CVC / CCV</div>
                                <input type="text" placeholder="123" />
                            </div>
                        </div>
                    </section>
                </form>
            </>
        )
    }
}

export default Steps