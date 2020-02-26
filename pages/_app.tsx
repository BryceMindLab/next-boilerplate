import App from 'next/app';
import React from 'react';

import { ThemeProvider } from 'styled-components';

import { Provider } from 'react-redux';
import store from '../store';

const theme: Theme = {
	colors: {
		primary: '#0070f3',
		secondary: '#FF146A',
	},
};

export default class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props;
		return (
			<Provider store={store}>
				<ThemeProvider theme={theme}>
					<Component {...pageProps} />
				</ThemeProvider>
			</Provider>
		);
	}
}
