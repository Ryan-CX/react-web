import React from 'react';
import styled from 'styled-components';
import Search from '../img/search.png';

const Container = styled.div`
	width: 100%;
	padding: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	border: 1px solid #e6e6e6;
	border-radius: 5px;
	margin: 20px;
`;

const Image = styled.img`
	width: 20px;
`;

const Text = styled.span`
	margin-top: 10px;
	text-align: center;
	@media only screen and (max-width: 480px) {
		font-size: 14px;
	}
`;

const Card = () => {
	return (
		<Container>
			<Image src={Search} />
			<Text>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
				aliquid magni culpa aliquam ad quis optio provident sunt. Nobis ipsum
				odio dolorum nemo veniam.{' '}
			</Text>
		</Container>
	);
};

export default Card;
