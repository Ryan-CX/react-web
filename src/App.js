import styled, { css } from 'styled-components';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Feature from './components/Feature';
import Service from './components/Service';

const Container = styled.div`
	height: 100vh;
	overflow: hidden;
	position: relative;
`;

const Shape = css`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	z-index: -1;
`;
const IntroShape = styled.div`
	clip-path: polygon(100% 0, 61% 0%, 40% 100%, 100% 100%);
	background-color: pink;
	${Shape}
`;

const SecondShape = styled.div`
	clip-path: polygon(100% 0, 40% 0, 100% 100%, 100% 100%);
	background-color: pink;
	${Shape}
`;
const ServiceShape = styled.div`
	clip-path: polygon(100% 0, 100% 0, 100% 100%, 39% 100%);
	background-color: pink;
	${Shape}
`;

function App() {
	return (
		<>
			<Container>
				<Navbar />
				<Intro />
				<IntroShape />
			</Container>

			<Container>
				<Feature />
				<SecondShape />
			</Container>

			<Container>
				<Service />
				<ServiceShape />
			</Container>
		</>
	);
}

export default App;
