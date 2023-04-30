import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import StepProgress from './StepProgress'
import ProgressControl from './ProgressControl'
import styles from './Main.module.scss'

export default function Main(){
    return(
        <div className={`${styles.mainContainer}`}>
            <div className={`${styles.mainLeft}`}>
                <div className={styles.registerContainer}>
                    <StepProgress/>
                    <div className={styles.formContainer}>
                        <Step1/>
                        {/* <Step2/> */}
                        {/* <Step3/> */}
                    </div>
                </div>
                <ProgressControl />
            </div>
            <div className={`${styles.mainRight}`}>

            </div>
        </div>


        
    )
}