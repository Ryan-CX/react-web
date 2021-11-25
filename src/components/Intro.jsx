import React from 'react';
import styled from 'styled-components';
import Women from '../img/women.jpg';
const Container = styled.div`
	height: calc(100vh - 50px);
	display: flex;
	padding: 20px;
`;
const Left = styled.div`
	width: 60%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
const Right = styled.div`
	width: 40%;
`;

const Title = styled.h1`
	width: 60%;
	font-size: 60px;
`;
const Description = styled.p`
	margin-top: 20px;
	width: 60%;
	font-size: 20px;
`;

const Info = styled.div`
	width: 60%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 50px;
`;
const Button = styled.button`
	padding: 15px;
	background-color: darkblue;
	color: white;
	border-radius: 10px;
	font-weight: bold;
	letter-spacing: 2px;
	cursor: pointer;
`;

const Contact = styled.div`
	display: flex;
	flex-direction: column;
`;
const Phone = styled.span`
	color: pink;
	font-weight: bold;
`;
const Text = styled.span`
	color: gray;
	margin-top: 5px;
`;

const Image = styled.img`
	width: 100%;
	height: 100%;
`;

const Intro = () => {
	return (
		<Container>
			<Left>
				<Title>This is the title.</Title>
				<Description>
					We believe that designing products and services in close partnership
					with our clients is the only way to heave a real impact on their
					business.
				</Description>
				<Info>
					<Button>Start project</Button>
					<Contact>
						<Phone>+1 (123) 456-7890</Phone>
						<Text>Any Questions?</Text>
					</Contact>
				</Info>
			</Left>
			<Right>
				<Image src={Women}></Image>
			</Right>
		</Container>
	);
};

export default Intro;
