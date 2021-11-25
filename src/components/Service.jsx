import React from 'react';
import styled from 'styled-components';
import Man from '../img/man.jpg';
import Card from './Card';

const Container = styled.div`
	display: flex;
`;
const Left = styled.div`
	width: 50%;
`;
const Right = styled.div`
	width: 50%;
`;
const Image = styled.img`
	width: 100%;
`;

const Wrapper = styled.div`
	padding: 50px;
	display: flex;
	flex-direction: column;
`;

const Title = styled.h1``;

const Desc = styled.p`
	font-size: 20px;
	margin-top: 20px;
	color: #777;
`;

const CardContainer = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 50px;
`;

const Button = styled.button`
	width: 180px;
	border: none;
	border-radius: 10px;
	background-color: darkblue;
	color: white;
	font-size: 20px;
	padding: 15px;
	margin-top: 50px;
	cursor: pointer;
	display: flex;
	align-items: center;
	margin-left: 20px;
`;

const Service = () => {
	return (
		<Container>
			<Left>
				<Image src={Man} />
			</Left>
			<Right>
				<Wrapper>
					<Title>Simple process to start</Title>
					<Desc>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
						sequi doloremque quam sint facere! Repudiandae commodi rerum odit
						architecto a, dolorum hic iure, beatae animi dolores quo ut
						voluptatem. Reprehenderit!
					</Desc>

					<CardContainer>
						<Card />
						<Card />
						<Card />
					</CardContainer>
					<Button>How it works</Button>
				</Wrapper>
			</Right>
		</Container>
	);
};

export default Service;
