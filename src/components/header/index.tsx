
import { Link } from 'react-router-dom';
import styles from './style.module.css';
import { IoMdHome } from "react-icons/io";

import type { HeaderProps } from '../../utils/props';

function Header(props: HeaderProps) {
  return (
    <header className={styles.header}>
        <Link to="/" className={styles.home}>
            <IoMdHome size={50} color='#f893e2'/>
        </Link>
        <div className={styles.path}>
            <h2>/ {props.url?.toUpperCase()}</h2>
        </div>
    </header>
  );
}

export default Header;