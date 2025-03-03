import "./App.css";
import Header from "./commponents/Header.jsx";
import Footer from "./commponents/Footer.jsx";
import Main from "./commponents/Main.jsx";
import Button from "./commponents/Button.jsx";

function App() {
	const buttonProps = {
		text: "메일",
		color: "red",
		a : 1 ,
		b : 2 ,
		c : 3 , 
};

	return (
		<>
			<Button {...buttonProps}/>
			<Button text={"카페"} />
			<Button text={"블로그"} > 
				<Header/>
			</Button>
		</>
	);
}

export default App;
