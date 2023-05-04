import {AiOutlineSearch} from 'react-icons/ai'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {BsMoon} from 'react-icons/bs'
import {BsSun} from 'react-icons/bs'
import LogoSvg from '../../../assets/logo.png'

import styles from './NavbarMenu.module.scss'


export default function NavbarMenu(){
    return(
        <>
        <nav className={`${styles.navMenu}`} >
            <ul className={`${styles.navList} ${styles.siteMenuList}`}>
                <li className={`${styles.navItem}`}>
                    <a  className={`${styles.navLink}`} href="#">男款</a>
                </li>
                <li className={`${styles.navItem}`}>
                    <a  className={`${styles.navLink}`} href="#">女款</a>
                </li>
                <li className={`${styles.navItem}`}>
                    <a  className={`${styles.navLink}`} href="#">最新消息</a>
                </li>
                <li className={`${styles.navItem}`}>
                    <a  className={`${styles.navLink}`} href="#">客製商品</a>
                </li>
                <li className={`${styles.navItem}`}>
                    <a  className={`${styles.navLink}`} href="#">聯絡我們</a>
                </li>
            </ul>
            <ul className={`${styles.navList} ${styles.siteActionList}`}>
                {/* <!-- search --> */}
                <li className={`${styles.navItem}`}>
                    <AiOutlineSearch className={`${styles.navIcon} ${styles.cursorPoint}`}/>                            
                </li>
                {/* <!-- cart --> */}
                <li className={`${styles.navItem}`}>
                    <AiOutlineShoppingCart className={`${styles.navIcon} ${styles.cursorPoint}`}/>
                </li>
                <li id="theme-toggle" className={`${styles.navItem}`}>
                {/* <!-- moon --> */}
                    <BsMoon className={`${styles.navIcon} ${styles.cursorPoint}`}/>              
                {/* <!-- sun --> */}
                    <BsSun className={`${styles.navIcon} ${styles.cursorPoint}`}/>
                </li>
            </ul>
        </nav>
        <a className={`${styles.headerLogoContainer}`} href="#">
            <img src={LogoSvg} alt='logo' className={`${styles.iconLogo}`} />
        </a>
        </>
    )
}