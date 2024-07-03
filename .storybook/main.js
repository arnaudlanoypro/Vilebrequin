/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
    stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-webpack5-compiler-swc',
        '@storybook/addon-onboarding',
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@chromatic-com/storybook',
        '@storybook/addon-interactions',
        '@chakra-ui/storybook-addon'
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {}
    },
    features: { emotionAlias: false },
    webpackFinal: async (config) => {
            config.module.rules.push({
            test: /\.mjs$/,
            include: /node_modules/,
            type: 'javascript/auto',
        })

        return config
    },
    staticDirs: ['../overrides/app/static'],
}
export default config
