import MainPage from "../../pages/MainPage/MainPage";
import Footer from "../Footer/Footer";
import Header from "../Header";

const menuList = [
	{
		id: 1,
		text: 'Обо мне',
		link: '#about'
	},
	{
		id: 2,
		text: 'Процесс',
		link: '#process'
	},
	{
		id: 3,
		text: 'Результат',
		link: '#result'
	},
	{
		id: 4,
		text: 'PRO САХАР',
		link: '#workshop'
	},
	{
		id: 5,
		text: 'Отзывы',
		link: '#comments'
	},
	{
		id: 6,
		text: 'Цены',
		link: '#price'
	},
];

function App() {
	return (
		<div className="App">
			<Header menuList={menuList} />
			<MainPage menuList={menuList} />
			<Footer menuList={menuList} />
		</div>
	);
}

export default App;
