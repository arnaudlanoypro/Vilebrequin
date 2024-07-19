const locales = ['en-GB', 'de-DE'];

const messages = locales.reduce((acc, lang) => ({
  ...acc,
  [lang]: require(`../translations/${lang}.json`), // whatever the relative path to your messages json is
}), {});

const formats = {}; // optional, if you have any formats

export const reactIntl = {
  defaultLocale: 'en-GB',
  locales,
  messages,
  formats,
};
