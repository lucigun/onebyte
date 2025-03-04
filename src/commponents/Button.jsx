const Button = ({children, text,color="black"}) => {
	// console.log(props);
	// 이벤트 핸들러 생성
	const onClickButton = (e) =>{
		console.log(e);
		console.log(text);
	};

	return <button 
	onClick={onClickButton} // 마우스 클릭
	// onMouseEnter={onClickButton} // 마우스 호버
	style={{ color: color }}>
		{text}-{color.toUpperCase()}{children}
		</button>;
};

// 리액트 18이하인경우
// Button.defaulPorps = {
// 	color:"black",
// }

// 구조할당분석방법을 이용

export default Button;
