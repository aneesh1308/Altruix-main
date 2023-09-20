import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import Styles from './SocialsBar.module.css';

const ICON_SIZE = 36;
function SocialsBar() {
  return (
    <section className={Styles.socialsBar}>
      <a
        href="https://www.facebook.com/hnccbits/"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebook className={Styles.socialsBarIcons} size={ICON_SIZE} />
      </a>
      <a
        href="https://instagram.com/altruix_2k23?igshid=OGQ5ZDc2ODk2ZA=="
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagram className={Styles.socialsBarIcons} size={ICON_SIZE} />
      </a>
      <a
        href="https://www.linkedin.com/company/hnccbits/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin className={Styles.socialsBarIcons} size={ICON_SIZE} />
      </a>
    </section>
  );
}

export default SocialsBar;
