import {AiFillCheckCircle} from 'react-icons/ai'
import styles from "./StepProgress.module.scss";

function Step(props){
    return(
        <div>
            <span className={styles.progressGroup} data-phase="address">
                <span className={styles.progressIcon}>
                    <span className={styles.text}>{props.text}</span>
                    <AiFillCheckCircle className={`${styles.checked} ${styles.icon}`}/>
                </span>
                <span className={styles.progressLabel}>{props.textInfo}</span>
            </span>
        </div>
    )
}

export default function StepProgress(){
    return(
        <>
            <h2 className={`${styles.registerTitle}`}>結帳</h2>
            <section className={styles.progressContainer} >
                <Step text='1' textInfo='寄送地址'/>
                <span className={`${styles.progressBar} progressBar`} data-order="1"></span>
                <Step text='2' textInfo='運送方式'/>
                <span className={styles.progressBar} data-order="2"></span>
                <Step text='3' textInfo='付款資訊'/>
            </section>
        </>
    )
}