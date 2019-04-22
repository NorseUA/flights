import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { defaultLocale } from './configs';
import { IntlProvider } from 'react-intl';

it('renders without crashing', () => {
	const div = document.createElement('div');
	const props = {
		switchLocale: jest.fn(),
		currentLocale: defaultLocale
	};

	ReactDOM.render(
		<IntlProvider locale={defaultLocale} messages={{}} >
			<App {...props} />
		</IntlProvider>,
		div
	);
	ReactDOM.unmountComponentAtNode(div);
});
