import { NextPage } from 'next';
import Header from '../components/Header';

export const About: NextPage = () => {
	return (
		<div>
			<Header />
			<h1>Welcome to the About page!</h1>
		</div>
	);
};

export default About;
