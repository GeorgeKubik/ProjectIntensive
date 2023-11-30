import { ReactComponent as IconFB } from './../../assets/img/icon/MenuBottom/Facebook.svg';
import { ReactComponent as IconInst } from './../../assets/img/icon/MenuBottom/Instagram.svg'; /* «Мета» признана экстремистской организацией и запрещена в России: */
import { ReactComponent as IconTwitter } from './../../assets/img/icon/MenuBottom/Twitter.svg';
import { ReactComponent as IconLinkedIn } from './../../assets/img/icon/MenuBottom/LinkedIn.svg';

import styles from './MenuBottom.module.scss';

const MenuBottom = ({ menuList }) => {

	const listItem = menuList.map((item) =>
		<li key={item.id} className={styles.listItem}>
			<a className={styles.link} href={item.link}>{item.text}</a>
		</li>
	)

	return (
		<section className={styles.menuBottom}>
			<div className={styles.wrapper}>
				<nav className={styles.menu}>
					<ul className={styles.menuList}>
						{listItem}
					</ul>
				</nav>
				<div className={styles.social}>
					<IconFB className={styles.icon} />
					<IconInst className={styles.icon} /> {/* «Мета» признана экстремистской организацией и запрещена в России:*/}
					<IconTwitter className={styles.icon} />
					<IconLinkedIn className={styles.icon} />
				</div>
			</div>
		</section>
	);
}

export default MenuBottom;