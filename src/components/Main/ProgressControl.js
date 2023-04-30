import styles from './ProgressControl.module.scss'
import { HiArrowLongLeft } from "react-icons/hi2";
import { HiArrowLongRight } from "react-icons/hi2";

function AddressBtn(){
    return(
        <section class="button-group col col-12" className={styles.buttonGroup} data-phase="address">
            <button class="next" className={styles.next}>
                下一步
                <HiArrowLongRight />
            </button>
        </section>
    )
}

function ShippingBtn(){
    return(
        <section class="button-group col col-12" data-phase="shipping">
            <button class="prev">
                <HiArrowLongLeft />
                上一步
             </button>
            <button class="next">
                下一步
                <HiArrowLongRight />
            </button>
        </section>
    )
}

function CreditCardBtn(){
    return(
        <section class="button-group col col-12" data-phase="credit-card">
            <button class="prev">
                <HiArrowLongLeft />
                上一步
            </button>
            <button class="next">
                確認下單
            </button>
        </section>  
    )
}



export default function ProgressControl(){
    return(
        <>
            <section class="progress-control-container col col-lg-6 col-sm-12" className={`${styles.progressControlContainer}`}>
                <AddressBtn />
                {/* <ShippingBtn /> */}
                {/* <CreditCardBtn /> */}
            </section>
        </>
    )
}