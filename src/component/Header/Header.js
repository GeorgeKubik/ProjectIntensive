import { useState } from 'react';
import Button from '../../style/libs/Button';
import Hamburger from '../Hamburger/Hamburger';
import styles from './Header.module.scss';


const Header = ({ menuList }) => {

	const [activeMenu, setActiveMenu] = useState(false);

	const visibleMenu = !activeMenu ? `${styles.navigation}` :
		`${styles.navigation} ${styles.activeMenu}`;git

	const onClickHamburger = () => {
		setActiveMenu(!activeMenu);

	};

	const listItem = menuList.map((item) =>
		<a key={item.id} className={styles.link} href={item.link}>
			<li className={styles.listItem}>
				{item.text}
			</li>
		</a>
	)

	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<nav /* style={visibleMenu} */ className={visibleMenu}>
					<ul className={styles.navigationList}>
						{listItem}
					</ul>
					<Button
						styleBtn='headerBtn'
						text='Оставить заявку'
					/>
				</nav>
				<Hamburger onClickHamburger={onClickHamburger} />
			</div>
		</header>
	);
}

export default Header;