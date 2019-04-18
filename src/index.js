import React from 'react';
import ReactDOM from 'react-dom';
import { addLocaleData, IntlProvider } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
import uaLocaleData from 'react-intl/locale-data/uk';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import translations from './i18n/locales';

addLocaleData(uaLocaleData);
addLocaleData(enLocaleData);

const defaultLocale = 'uk';

const renderApp = (locale) => ReactDOM.render(
	<IntlProvider
		locale={locale}
		defaultLocale={defaultLocale}
		key={locale}
		messages={translations[locale]}
	>
		<App currentLocale={locale} switchLocale={renderApp} />
	</IntlProvider>,
	document.getElementById('root')
);

renderApp(defaultLocale);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
