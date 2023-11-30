import styles from "./Button.module.scss";
import clsx from "clsx";


const Button = ({ styleBtn, text }) => {
	return (
		<>
			<button className={clsx(styles.btn, styles[styleBtn])}>{text}</button>
		</>
	);
};

export default Button;