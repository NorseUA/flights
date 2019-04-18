const manageTranslations = require('react-intl-translations-manager').default;

manageTranslations({
	messagesDirectory: '.messages',
	translationsDirectory: 'src/i18n/translations/',
	languages: ['ua', 'en']
});