import Form from '../Form';
import styles from './Consultation.module.scss';

const Consultation = () => {
	return (
		<section className={styles.consultation}>
			<div className={styles.container}>
				<div className={styles.wrapper}>
					<h2 className={styles.title}>
						Оставьте E-mail и получите первую консультацию бесплатно
					</h2>
					<Form />
				</div>
			</div>
		</section>
	);
}

export default Consultation;