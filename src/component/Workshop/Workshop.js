import Button from '../../style/libs/Button';
import SectionTitle from '../../style/libs/SectionTitle';
import imgWorkshop from './../../assets/img/Workshop/image.png';

import styles from './Workshop.module.scss';

const Workshop = () => {
	return (
		<section id='workshop' className={styles.workshop}>
			<div className={styles.container}>
				<div className={styles.wrapper}>
					<img className={styles.img} src={imgWorkshop} alt="workshop_image" />
					<div className={styles.blockContent}>
						<SectionTitle text='Практикум ускорения метаболизма PRO САХАР'/>
						<div className={styles.descr}>
							На практикуме PRO САХАР вы определите, на какие продукты 	реагирует ваш организм, как привести вес и уровень сахара в норму, победить постоянную усталость.
						</div>
						<Button styleBtn='btnBlack' text='Оставить заявку' />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Workshop;