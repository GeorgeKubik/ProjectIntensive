import MenuBottom from '../MenuBottom/MenuBottom';
import Policy from '../Policy/Policy';
import styles from './Footer.module.scss';

const Footer = ({ menuList }) => {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<MenuBottom menuList={menuList} />
				<Policy />
			</div>
		</footer>
	);
}

export default Footer;