import Button from '../../style/libs/Button';
import Background from '../../assets/img/bg.png';
import styles from './Hero.module.scss';

const Hero = () => {
	return (
		<main className={styles.hero}>
			<div className={styles.container}>
				<h1 className={styles.title}>
					Нутрициолог-эксперт
					<br />
					Марина Идомская
				</h1>
				<div className={styles.descr}>Я рассматриваю здоровье комплексно и помогаю вам прийти к
					<br /> выздоровлению. Моя цель - помочь каждому из вас достичь состояния
					<br /> здоровья и активного долголетия.
				</div>
				<div className={styles.btns}>
					<Button styleBtn='btnBlack' text='Написать' />
					<Button styleBtn='btnWhite' text='Узнать больше' />
				</div>
			</div>
			<img className={styles.background} src={Background} alt="backgorund" />
		</main>
	);
}

export default Hero;