import Button from "../../style/libs/Button";
import styles from './Form.module.scss';

const Form = () => {
	return (
		<form className={styles.form} action="#">
			<div className={styles.wrapper}>
				<input
					className={styles.input}
					type="email"
					pattern="^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$"
					placeholder="Введите свой E-mail"
				/>
				<Button styleBtn='btnBlack' text='Оставить заявку' />
			</div>
			<div className={styles.descr}>
				Нажимая на кнопку, вы даете согласие на обработку персональных данных и <br /> соглашаетесь c политикой конфиденциальности
			</div>
		</form>
	);
}

export default Form;