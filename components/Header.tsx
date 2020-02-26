import Link from 'next/Link';
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
	margin-right: 1rem;
	cursor: pointer;
	color: ${({ theme }: { theme: Theme }) => theme.colors.primary || '#ffffff'};

	&:hover {
		color: ${({ theme }: { theme: Theme }) =>
			theme.colors.secondary || '#ffffff'};
	}
`;

type HeaderProps = {};

export const Header: FunctionComponent<HeaderProps> = ({}) => {
	return (
		<div>
			<Link href="/">
				<StyledLink>Home</StyledLink>
			</Link>
			<Link href="/about">
				<StyledLink>About</StyledLink>
			</Link>
		</div>
	);
};

export default Header;
