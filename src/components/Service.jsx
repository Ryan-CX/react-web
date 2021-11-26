import React, { useState } from 'react';
import styled from 'styled-components';
import Man from '../img/man.jpg';
import Card from './Card';

import Play from '../img/play.png';

const Container = styled.div`
	display: flex;
	height: 100%;
`;
const Left = styled.div`
	width: 50%;
	position: relative;
`;
const Right = styled.div`
	width: 50%;
`;
const Image = styled.img`
	width: 100%;
	display: ${(props) => props.open && 'none'};
`;

const Wrapper = styled.div`
	padding: 50px;
	display: flex;
	flex-direction: column;
`;

const Video = styled.video`
	display: ${(props) => !props.open && 'none'};
	height: 300px;
	position: absolute;
	top: 0;
	bottom: 0;
	margin: auto;
	right: 0;
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

const Icon = styled.img`
	width: 20px;
	margin-right: 10px;
`;

const Service = () => {
	const [open, setOpen] = React.useState(false);

	return (
		<Container>
			<Left>
				<Image open={open} src={Man} />
				<Video
					autoPlay
					loop
					controls
					open={open}
					src='https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761'
				/>
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
					<Button onClick={() => setOpen(true)}>
						<Icon src={Play} />
						How it works
					</Button>
				</Wrapper>
			</Right>
		</Container>
	);
};

export default Service;
