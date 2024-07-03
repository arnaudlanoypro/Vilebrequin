/** @type { import('@storybook/react').Preview } */
import theme from '../overrides/app/theme'

const preview = {
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
              order: ['Atoms', 'Molecules'],
            },
        },
    }
}

export default preview
