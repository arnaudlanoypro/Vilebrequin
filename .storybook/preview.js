/** @type { import('@storybook/react').Preview } */
import React from 'react'
import theme from '../overrides/app/theme'
import {reactIntl} from './reactIntl';
import {IntlProvider} from 'react-intl'
import { DocsContainer } from '@storybook/blocks';

const DocContainer = ({ children, ...props }) => {
    return <DocsContainer {...props}><IntlProvider locale="en-GB">{children}</IntlProvider></DocsContainer>;
  };

const preview = {
    globals: {
        locale: reactIntl.defaultLocale,
        locales: {
            'en-GB': 'English',
            'de-DE': 'Deutsche',  
        },
    },
    decorators: [
        (Story) => (
            <IntlProvider locale="en-GB">
                <Story />
            </IntlProvider>
        )
    ],
    parameters: {
        chakra: {
            theme
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        },
        backgrounds: {
            default: 'white',
            values: [
                {
                    name: 'white',
                    value: '#FFFFFF',
                },
                {
                    name: 'soapstone',
                    value: '#FFFAF6',
                },
                {
                    name: 'gray',
                    value: '#A6A6A6',
                },
                {
                    name: 'darkGray',
                    value: '#5E5E5E',
                },
            ],
        },
        options: {
            storySort: {
                method: 'alphabetical',
                order: ['Atoms', 'Molecules', 'Icons', 'Forms'],
            },
        },
        docs: {
            container: DocContainer,
        },
    }
}

export default preview
