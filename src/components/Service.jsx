import React from 'react';
import styled from 'styled-components';
import Man from '../img/man.jpg';
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

const Service = () => {
	return (
		<Container>
			<Left>
				<Image src={Man} />
			</Left>
			<Right></Right>
		</Container>
	);
};

export default Service;
