/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
    stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-webpack5-compiler-swc',
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@chromatic-com/storybook',
        '@storybook/addon-interactions',
        '@chakra-ui/storybook-addon',
        '@storybook/addon-webpack5-compiler-babel',
        'storybook-react-intl',
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {}
    },
    features: { emotionAlias: false },
    webpackFinal: async (config) => {
        config.module = config.module || {};
        config.module.rules = config.module.rules || [];

        const imageRule = config.module.rules.find((rule) =>
            rule.test?.test(".svg")
        );
        imageRule.exclude = /\.svg$/;
        config.module.rules.push({
            test: /\.svg$/,
            enforce: 'pre',
            use: ["@svgr/webpack"],
        });

        config.module.rules.push({
            test: /\.mjs$/,
            include: /node_modules/,
            type: 'javascript/auto',
        })

        config.module.rules.push({
            test: /\.(js|jsx)$/,
            include: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
        });

        return config
    },
    staticDirs: ['../overrides/app/static', '../overrides/app/assets'],
}
export default config
