import styles from './Footer.module.scss'
import logo from '../../assets/logo.png'
import { ReactComponent as Fb } from '../../assets/facebook.svg'
import { ReactComponent as Ig } from '../../assets/instagram.svg'
import { ReactComponent as Wapp } from '../../assets/whatsapp.svg'

const services = ['運送說明','退換貨相關','付款資訊','FAQ']
const abouts = ['品牌故事' , '媒體連繫' , 'Press Kit']
const infos = ['隱私權政策' , 'Cookie' , 'GDPR']


function RenderServices(){
    const renderServices = services.map(item => {
        return (
                <a class={`${styles.pageLink}`} href="#">{item}</a>
        )
    })
    return(
        renderServices
    )
}

function RenderAbouts(){
    const renderAbouts = abouts.map(item => 
        <a class={`${styles.pageLink}`} href="#">{item}</a>
    )
    return renderAbouts
}

function RenderInfos(){
    const renderInfos = infos.map(item =>  <a class={`${styles.pageLink}`} href="#">{item}</a>)
    return renderInfos
}



export default function Footer(){
    return(
        <footer className={`${styles.siteFooter}`}>
            <div className={`${styles.footerContainer}`}>
                <div className="footerLogoContainer">
                    <img src={logo} alt='logo'/>
                </div>
                <section className={`${styles.footerSection}`}>
                    <h2 class={`${styles.sectionTitle}`}>客戶服務</h2>
                    <RenderServices/>
                </section>
                <section className={`${styles.footerSection}`}>
                    <h2 class={`${styles.sectionTitle}`}>關於我們</h2>
                    <RenderAbouts/>
                </section>
                 <section className={`${styles.footerSection}`}>
                    <h2 class={`${styles.sectionTitle}`}>資訊</h2>
                    <RenderInfos/>
                </section>
                <section class={`${styles.footerSection}`}>
                    <h2 class={`${styles.sectionTitle}`}>追蹤 ALPHA Shop</h2>
                    <div class="section-content">
                        <div class="tel-info">+886 02123-45678</div>
                        <div class="social-icon-group">
                            <Fb />
                            <Ig />
                            <Wapp />
                        </div>
                    </div>
                </section>
            </div>
        </footer>
    )
}