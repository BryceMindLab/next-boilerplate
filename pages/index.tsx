import { NextPage } from 'next';
import Header from '../components/Header';
import styled from 'styled-components';

const Title = styled.h1`
	font-size: 2rem;
	color: ${({ theme }: { theme: Theme }) => theme.colors.primary || '#ffffff'};
`;

export const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => {
	return (
		<div>
			<Header />
			<Title>Hello Next.js</Title>
			<p>User agent: {userAgent}</p>
		</div>
	);
};

Home.getInitialProps = async ({ req }) => {
	const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
	return { userAgent };
};

export default Home;
