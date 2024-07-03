import React from 'react'
import {Global} from '@emotion/react'
import {getAssetUrl} from '@salesforce/pwa-kit-react-sdk/ssr/universal/utils'

const LocalFonts = () => (
    <Global
        styles={`
            /* ... other fonts above */
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
            /* ... other fonts below */
        `}
    />
)

export {LocalFonts}
