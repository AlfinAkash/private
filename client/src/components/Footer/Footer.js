import './Footer.css';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    return (
        <footer>
            <div className="footer__container">
                <div className="footer__items__container">
                    <div className="footer__help__container">
                        <div className="footer__help__header">
                            <h1>Help</h1>
                        </div>
                        <ul className="footer__help__links">
                            <li className="help__link">
                                <a href="/">Shipping</a>
                            </li>
                            <li className="help__link">
                                <a href="/">Refund</a>
                            </li>
                            <li className="help__link">
                                <a href="/">FAQ</a>
                            </li>
                            <li className="help__link">
                                <a href="/">Accessibility</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__contact__container">
                        <div className="footer__contact__header">
                            <h1>Contact Us</h1>
                        </div>
                        <ul className="footer__contacts">
                            <li className="footer__contact">
                                <LocalPhoneIcon /> <span>+91 915040xxx</span>
                            </li>
                            <li className="footer__contact">
                                <EmailIcon /> <span>alfin@shop.com</span>
                            </li>
                            <li className="footer__contact">
                                <LocationOnIcon /> <span>Kayathar, India</span>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__social__link__container">
                        <div className="footer__social__link__header">
                            <h1>Stay Connected</h1>
                        </div>
                        <ul className="footer__social__links">
                            <li className="social__link">
                                <a href="https://www.twitter.com/AlfinAkash" target="_blank" rel="noopener noreferrer">
                                    <TwitterIcon />
                                </a>
                            </li>
                            <li className="social__link">
                                <a href="https://www.instagram.com/a.alfinakash" target="_blank" rel="noopener noreferrer">
                                    <InstagramIcon />
                                </a>
                            </li>
                            <li className="social__link">
                                <a href="https://www.youtube.com/@alfinakash" target="_blank" rel="noopener noreferrer">
                                    <YouTubeIcon />
                                </a>
                            </li>
                            <li className="social__link">
                                <a href="https://t.me/AlfinAkash" target="_blank" rel="noopener noreferrer">
                                    <TelegramIcon />
                                </a>
                            </li>
                            <li className="social__link">
                                <a href="https://www.github.com/AlfinAkash" target="_blank" rel="noopener noreferrer">
                                    <GitHubIcon />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer__copyright__container">
                    <ul className='nav'>
                        <li className="footer__copyright">©2024 AlfinAkash. |</li>
                        <li className="footer__terms__condition">| Terms & Condition |</li>
                        <li className="footer__privacy__policy">| Privacy Policy</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
