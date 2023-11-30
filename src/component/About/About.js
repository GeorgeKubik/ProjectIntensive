import Button from '../../style/libs/Button';
import SectionTitle from '../../style/libs/SectionTitle';
import ImageAbout from './../../assets/img/imageAbout.png';
import styles from './About.module.scss';

const About = () => {
	return (
		<section id='about' className={styles.about}>
			<div className={styles.container}>
				<div className={styles.wrapper}>
					<div className={styles.block}>
						<SectionTitle text='Обо мне' />
						<ul className={styles.listItems}>
							<li className={styles.listItem}>Сертифицированный нутрициолог - эксперт European University of Longevity</li>
							<li className={styles.listItem}>Окончила курс по обоснованному применению Биологически активных добавок Evidence-based Nutritional supplement therapy </li>
							<li className={styles.listItem}>Прошла интенсив "Дорожная карта к долголетию" в European University of Longevity</li>
							<li className={styles.listItem}>Член Ассоциации нутрициологов и коучей по здорорвью</li>
						</ul>
						<Button styleBtn='btnGray' text='Узнать больше' />
					</div>
					<img className={styles.img} src={ImageAbout} alt="imageAbout" />
				</div>
			</div>
		</section>
	);
}

export default About;