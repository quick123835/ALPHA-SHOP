import Step1 from './Steps/Step1'
import Step2 from './Steps/Step2'
import Step3 from './Steps/Step3'
import StepProgress from './StepProgress/StepProgress'
import ProgressControl from './ProgressControl/ProgressControl'
import styles from './Main.module.scss'
import Cart from './Cart/Cart'

export default function Main(){
    return(
        <div className={`${styles.mainContainer}`}>
            <div className={styles.stepProgressContainer}>
                <StepProgress/>
            </div>
            <div className={`${styles.mainLeft}`}>
                <div className={styles.registerContainer}>
                    <div className={styles.formContainer}>
                        <Step1/>
                        {/* <Step2/> */}
                        {/* <Step3/> */}
                    </div>
                </div>
                <ProgressControl />
            </div>
            <div className={`${styles.mainRight}`}>
                <Cart />
            </div>
        </div>


        
    )
}