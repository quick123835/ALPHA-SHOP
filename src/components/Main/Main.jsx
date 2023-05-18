import Steps from './Steps/Steps'
import StepProgress from './StepProgress/StepProgress'
import ProgressControl from './ProgressControl/ProgressControl'
import styles from './Main.module.scss'
import Cart from './Cart/Cart'
import { useState } from 'react';
import { useMainInfo } from '../../contexts/MainContext'


export default function Main(){
    // step control
    const [step , setStep] = useState(1)
    function handleNextStep(){
        setStep(step+1)
    }
    function handlePreStep(){
        setStep(step-1)
    }
    
    // main control
    const response = useMainInfo()
    const [mainInfo , setMainInfo] = useState(response)


    return(
        <div className={`${styles.mainContainer}`}>
            <div className={styles.stepProgressContainer}>
                <StepProgress/>
            </div>
            <div className={`${styles.mainLeft}`}>
                <div className={styles.registerContainer}>
                    <div className={styles.formContainer}>
                        <Steps 
                            step={step}
                        />
                    </div>
                </div>
                <ProgressControl  
                    step={step}
                    onNextStep={handleNextStep}
                    onPreStep={handlePreStep}
                />
            </div>
            <div className={`${styles.mainRight}`}>
                <Cart />
            </div>
        </div>


        
    )
}