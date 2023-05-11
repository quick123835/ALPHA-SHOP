import Steps from './Steps/Steps'
import StepProgress from './StepProgress/StepProgress'
import ProgressControl from './ProgressControl/ProgressControl'
import styles from './Main.module.scss'
import Cart from './Cart/Cart'
import { useState } from 'react';


export default function Main(){
    const [step , setStep] = useState(1)
    const [freight , setFreight] = useState('免費')
    
    function handleFreightChangeDHL(){
        setFreight('500')
        console.log(freight)
    }
    function handleFreightChangeNormal(){
        setFreight('免費')
    }

    function handleNextStep(){
        setStep(step+1)
    }

    function handlePreStep(){
        setStep(step-1)
    }

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
                            freight={freight}
                            onChangeDHL={handleFreightChangeDHL}
                            onChangeNormal={handleFreightChangeNormal}
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