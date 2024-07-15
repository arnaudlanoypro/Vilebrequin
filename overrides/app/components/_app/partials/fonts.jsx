import React from 'react'
import {Global} from '@emotion/react'
import {getAssetUrl} from '@salesforce/pwa-kit-react-sdk/ssr/universal/utils'

const LocalFonts = () => (
    <Global
        styles={`
            @font-face {
                font-family: 'Anton';
                font-style: normal;
                font-weight: 400;
                font-display: swap;
                src: url(${getAssetUrl(
                    'static/fonts/anton-v25-latin_latin-ext-regular.woff2'
                )}) format('woff2');
            }
            @font-face {
                font-family: 'Inter';
                font-style: normal;
                font-weight: 400;
                font-display: swap;
                src: url(${getAssetUrl(
                    'static/fonts/inter-v13-latin_latin-ext-regular.woff2'
                )}) format('woff2');
            }
            @font-face {
                font-family: 'InterMedium';
                font-style: normal;
                font-weight: 400;
                font-display: swap;
                src: url(${getAssetUrl(
                    'static/fonts/inter-v13-latin_latin-ext-500.woff2'
                )}) format('woff2');
            }
            @font-face {
                font-family: 'InterSemiBold';
                font-style: normal;
                font-weight: 400;
                font-display: swap;
                src: url(${getAssetUrl(
                    'static/fonts/inter-v13-latin_latin-ext-600.woff2'
                )}) format('woff2');
            }
        `}
    />
)

export {LocalFonts}
