import SectionTitle from '../../style/libs/SectionTitle';
import styles from './Process.module.scss';

const listItemData = [
	{
		id: 1,
		title: 'Запись на первую консультацию',
		descr: 'Выберите подходящее время для консультации и напишите мне'
	},
	{
		id: 2,
		title: 'Подтверждение консультации',
		descr: 'Я напишу вам для уточнения деталей предстоящей консультации'
	},
	{
		id: 3,
		title: 'Первая бесплатная консультация',
		descr: 'Я смогу больше узнать о ваших целях, поделится информацией и направить на необходимые обследования и анализы'
	},
	{
		id: 4,
		title: 'Выполнение исследований',
		descr: 'Вы высылаете мне результаты исследований и мы согласовываем удобное время второй консультации'
	},
	{
		id: 5,
		title: 'Вторая консультация',
		descr: 'Рекомендации на основе проведенных исследований и получение персонализированного отчета'
	}
]


const Process = () => {

	const listItem = listItemData.map(item => {
		return (
			<li key={item.id} className={styles.listItem}>
				<div className={styles.listItemWrapper}>
					<div className={styles.numbering}>{item.id}</div>
					<div className={styles.listTitle}>{item.title}</div>
				</div>
				<div className={styles.listItemWrapper}>
					<div className={styles.descr}>{item.descr}</div>
				</div>
			</li>
		)
	})

	return (
		<section id='process' className={styles.process}>
			<div className={styles.container}>
				<SectionTitle text='Процесс консультации' />
				<ul className={styles.listItems}>
					{listItem}
				</ul>
			</div>
		</section>
	);
}

export default Process;