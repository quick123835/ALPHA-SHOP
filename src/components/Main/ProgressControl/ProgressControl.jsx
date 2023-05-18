import styles from './ProgressControl.module.scss'
import { HiArrowLongLeft } from "react-icons/hi2";
import { HiArrowLongRight } from "react-icons/hi2";
import { useMainInfo } from '../../../contexts/MainContext';

function ProgressControl({step , onNextStep , onPreStep}){
    const mainInfo = useMainInfo()

    const handleClick = () => {
        console.log(mainInfo.info)
    }

    if(step === 1){
        return(
            <section className={`${styles.progressControlContainer}`}>
                <section className={styles.buttonGroup} data-phase="address">
                    <button className={styles.next} onClick={onNextStep}>
                        下一步
                        <HiArrowLongRight />
                    </button>
                </section>
            </section>
        )
    }else if(step === 2){
        return(
            <section className={`${styles.progressControlContainer}`}>
                <section className={styles.buttonGroup} data-phase="shipping">
                    <button className={styles.prev} onClick={onPreStep}>
                        <HiArrowLongLeft />
                        上一步
                    </button>
                    <button className={styles.next} onClick={onNextStep}>
                        下一步
                        <HiArrowLongRight />
                    </button>
                </section>
            </section>
        )
    }else if(step === 3){
        return(
            <section className={`${styles.progressControlContainer}`}>
                <section className={styles.buttonGroup} data-phase="credit-card">
                    <button className={styles.prev} onClick={onPreStep}>
                        <HiArrowLongLeft />
                        上一步
                    </button>
                    <button className={styles.next} onClick={handleClick}>
                        確認下單
                    </button>
                </section>  
            </section>
        )
    }
}

export default ProgressControl