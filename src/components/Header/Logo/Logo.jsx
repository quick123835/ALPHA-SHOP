import styles from './Logo.module.scss'
import LogoSvg from '../../../assets/logo.png'

export default function Logo({icons}){
    return(
        <a classNave={`${styles.headerLogoContainer}`} href="#">
                <img src={LogoSvg} alt='logo' className={`${styles.iconLogo}`} />
        </a>
    )
}