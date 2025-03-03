const Button = ({children, text,color="black"}) => {
	// console.log(props);
	return <button style={{ color: color }}>
		{text}-{color.toUpperCase()}{children}
		</button>;
};

// 리액트 18이하인경우
// Button.defaulPorps = {
// 	color:"black",
// }

// 구조할당분석방법을 이용

export default Button;
