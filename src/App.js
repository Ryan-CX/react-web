import styled from 'styled-components';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
const Container = styled.div`
	height: 100vh;
	overflow: hidden;
`;
const IntroShape = styled.div`
	clip-path: polygon(100% 0, 61.5% 0%, 36% 100%, 100% 100%);
	background-color: #eb9696;
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	z-index: -1;
`;
function App() {
	return (
		<Container>
			<Navbar />
			<Intro />
			<IntroShape />
		</Container>
	);
}

export default App;
