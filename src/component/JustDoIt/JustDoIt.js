import Button from '../../style/libs/Button';
import img1 from './../../assets/img/JustDoIt/img_1.png';
import img2 from './../../assets/img/JustDoIt/img_2.png';
import img3 from './../../assets/img/JustDoIt/img_3.png';
import { ReactComponent as IconBtn } from './../../assets/img/icon/JustDoIt/ChevronRight.svg';

import styles from './JustDoIt.module.scss';

const cardData = [
	{
		id: 1,
		img: img1,
		title: 'Продлить молодость',
		descr: 'Установлю истинный источник акне, сухой или жирной кожи, выпадения волос и проблемных ногтей, помогу вернуть уверенность в себе.',
	},
	{
		id: 2,
		img: img2,
		title: 'Родить здорового ребенка',
		descr: 'Помогу успешно выносить и родить. Приближу момент встречи с вашим будущим ребенком и подготовлю к счастливому родительству.',
	},
	{
		id: 3,
		img: img3,
		title: 'Скорректировать вес',
		descr: 'Установлю истинный источник акне, сухой или жирной кожи, выпадения волос и проблемных ногтей, помогу вернуть уверенность в себе.',
	}
]

const JustDoIt = () => {

	const cards = cardData.map(card => {
		return (
			<div key={card.id} className={styles.card}>
				<img src={card.img} alt="imageCard" />
				<div className={styles.titleCard}>{card.title}</div>
				<div className={styles.descr}>{card.descr}</div>
				<button className={styles.detailsBtn}>
					<span>Подробнее</span>
					<IconBtn className={styles.iconBtn} />
				</button>
			</div>
		)
	})

	return (
		<section id='result' className={styles.justDoIt}>
			<div className={styles.container}>
				<div className={styles.wrapper}>
					<h2 className={styles.title}>У вас получится</h2>
					<div className={styles.cardsWrapper}>
						{cards}
					</div>
					<Button styleBtn='btnWhiteNotBorder' text='Смотреть все' />
				</div>
			</div>
		</section>
	);
}

export default JustDoIt;