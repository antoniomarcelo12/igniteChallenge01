import logoImg from '../../assets/Logo.svg'

import styles from './Header.module.css'

export const Header: React.FC = () => {
  return (
    <header className={styles.headerContainer}>
        <img src={logoImg} alt="" />
    </header>
    );
}