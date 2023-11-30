import styles from './Policy.module.scss';

const Policy = () => {
	return (
		<div className={styles.policy}>
			<div className={styles.wrapper}>
				<div className={styles.organization}>ИП «Мария Идомская»</div>
				<a href="policy" className={styles.policyLink}>Политика конфиденциальности</a>
			</div>
		</div>
	);
}

export default Policy;