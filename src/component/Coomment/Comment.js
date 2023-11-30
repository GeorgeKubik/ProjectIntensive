
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import photo from './../../assets/img/Comment/avatar.svg';

import styles from './Comment.module.scss';


const userComments = [
	{
		id: 1,
		comment: 'Хочу сказать спасибо Марине. Две недели я тестировал свой метаболизм, реакцию на сахар на программе PRO САХАР. Теперь я знаю причину, и научился его контролировать.',
		user: {
			img: photo,
			name: 'Валентин',
			surname: 'Шинковский',
			achievements: 'Прошел практикум PRO САХАР'
		}
	},
	{
		id: 2,
		comment: 'Две недели и у меня все стало стабильно, курс PRO САХАР стал мне заветным билетом в будущее.',
		user: {
			img: photo,
			name: 'Кирилл',
			surname: 'Штанга',
			achievements: 'Прошел практикум PRO САХАР'
		}
	},
	{
		id: 3,
		comment: 'Теперь я знаю причину всех своих невзгод, стоило только пройти практикум.',
		user: {
			img: photo,
			name: 'Марк',
			surname: 'Пират',
			achievements: 'Прошел практикум PRO САХАР'
		}
	}
]


const Comment = () => {

	const slide = userComments.map((item) =>
		<Slide key={item.id} index={item.id - 1}>
			<div className={styles.card}>
				<div className={styles.cardComment}>{item.comment}</div>
				<div className={styles.user}>
					<img className={styles.userPhoto} src={item.user.img} alt="avatar" />
					<div className={styles.userInfo}>
						<span className={styles.name}>{item.user.name}</span>
						<span className={styles.name}>{item.user.surname}</span>
						<div className={styles.achievements}>{item.user.achievements}</div>
					</div>
				</div>
			</div>
		</Slide>
	)
	return (
		<section id='comments' className={styles.comment}>
			<div className={styles.container}>
				<CarouselProvider
					totalSlides={3}
					visibleSlides={1}
					isIntrinsicHeight
					interval={3000}
					isPlaying={true}
					className={styles.carousel}
				>
					<Slider classNameTray={styles.wrapper}>
						{slide}
					</Slider>
				</CarouselProvider>
			</div>
		</section>
	);
}

export default Comment;