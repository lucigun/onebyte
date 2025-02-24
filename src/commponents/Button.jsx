const Button = ({ children, text, color = "black" }) => {
	console.log({ text, color });
	return (
		<button style={{ color: color }}>
			{text} - {color.toUpperCase()}
		</button>
	);
};
// undifined의 값에 점표기표를 사용하면 오류가 발생한다.

// react 18버전부터는 defaultProps를 사용하지 않는다.
// Button.defaultProps = {
// 	color : "black",
// }

// props의 기본값을 설정하려면
// props를 구조분해하고 기본값을 설정하면 된다.
// const Button = ({ text, color = "black" }) => {

export default Button;
