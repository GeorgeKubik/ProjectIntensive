
import SectionTitle from '../../style/libs/SectionTitle';
import check from './../../assets/img/icon/Price/Check.svg';

import styles from './Price.module.scss';


const cardData = [
	{
		id: 1,
		title: 'Бесплатная консультация',
		rate: 0,
		btnText: 'Напишите мне',
		listItems: ['Я смогу больше узнать о ваших целях и поделится информацией']
	},
	{
		id: 2,
		title: 'Бесплатная консультация',
		rate: 8000,
		btnText: 'Оплата',
		listItems: ['Единоразовая консультация и персонализированный отчет', 'Анализ анкеты и назначение анализов', 'Персонализированный отчет', 'Индивидуальные рекомендации саплиментов'],
	},
	{
		id: 3,
		title: 'Практикум PRO САХАР',
		rate: 6000,
		btnText: 'Оплата',
		listItems: ['1 месяц практикума', 'Мини лекции и рекомендации', 'Постановка целей', 'Максимальный акцент на практике', 'Книга низкогликемических рецептов', 'Еженедельный мастер-майнд в zoom', 'Вы исследуете свой метаболизм в режиме реального времени'],
	},
]


const Price = () => {

	const card = cardData.map(card => {
		const listItem = card.listItems.map((listItem, i) =>
			<li key={i} className={styles.listItem}>
				<img className={styles.check} src={check} alt="check" />
				{listItem}
			</li>
		)

		const rate = card.rate.toString().length < 4 ? card.rate.toString() : `${card.rate.toString().at(0)} ${card.rate.toString().slice(1)}`;

		return (
			<div key={card.id} className={styles.card} >
				<div className={styles.cardTitle}>{card.title}</div>
				<div className={styles.rate}>{rate} руб</div>
				<button className={styles.btnCard}>{card.btnText}</button>
				<ul className={styles.listItems}>
					{listItem}
				</ul>
			</div >
		)
	})

	return (
		<section id='price' className={styles.price}>
			<div className={styles.container}>
				<div className={styles.wrapper}>
					<SectionTitle text='Консультации и программы' />
					<div className={styles.cardsWrapper}>
						{card}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Price;