import NavbarMunu from './NavbarMenu/NavbarMenu'
import styles from './Header.module.scss'

export default function Header(){
    return(
        <>
        <header className={`${styles.siteHeader}`} >
            <div className={`${styles.headerContainer}`}>
                <NavbarMunu />
            </div>
            

    
        </header>
        </>
    )
}