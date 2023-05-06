import styles from './ProgressControl.module.scss'
import { HiArrowLongLeft } from "react-icons/hi2";
import { HiArrowLongRight } from "react-icons/hi2";

function AddressBtn(){
    return(
        <section className={styles.buttonGroup} data-phase="address">
            <button className={styles.next}>
                下一步
                <HiArrowLongRight />
            </button>
        </section>
    )
}

function ShippingBtn(){
    return(
        <section className="button-group col col-12" data-phase="shipping">
            <button className="prev">
                <HiArrowLongLeft />
                上一步
             </button>
            <button className="next">
                下一步
                <HiArrowLongRight />
            </button>
        </section>
    )
}

function CreditCardBtn(){
    return(
        <section className="button-group col col-12" data-phase="credit-card">
            <button className="prev">
                <HiArrowLongLeft />
                上一步
            </button>
            <button className="next">
                確認下單
            </button>
        </section>  
    )
}



export default function ProgressControl(){
    return(
        <>
            <section className={`${styles.progressControlContainer}`}>
                <AddressBtn />
                {/* <ShippingBtn /> */}
                {/* <CreditCardBtn /> */}
            </section>
        </>
    )
}