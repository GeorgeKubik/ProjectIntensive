
import About from "../../component/About";
import Process from "../../component/Process";
import Comment from "../../component/Coomment";
import Hero from "../../component/Hero/Hero";
import JustDoIt from "../../component/JustDoIt";
import Workshop from "../../component/Workshop/Workshop";
import styles from './MainPage.module.scss';
import Price from "../../component/Price/Price";
import Consultation from "../../component/Consultation/Consultation";


const MainPage = () => {
	return (
		<div className={styles.mainPage}>
			<Hero />
			<About />
			<Process />
			<JustDoIt />
			<Workshop />
			<Comment />
			<Price />
			<Consultation />
		</div>
	);
}

export default MainPage;