import styles from './Hamburger.module.scss';

const Hamburger = ({ onClickHamburger }) => {
	return (
		<div onClick={onClickHamburger} className={styles.hamburger}>
			<span className={styles.line}></span>
			<span className={styles.line}></span>
			<span className={styles.line}></span>
		</div>
	);
}

export default Hamburger;