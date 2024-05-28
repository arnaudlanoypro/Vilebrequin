/*
 * Copyright (c) 2023, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

// Provide the sites for your app. Each site includes site id, and its localization configuration.
// You can also provide aliases for your locale. They will be used in place of your locale id when generating paths across the app
module.exports = [
    {
        id: 'VBQ-EU',
        l10n: {
            supportedCurrencies: ['EUR,USD,AUD,CAD,HKD,JPY,MOP,MXN,GBP,SGD,CHF,CNY'],
            defaultCurrency: 'EUR',
            defaultLocale: 'en-GB',
            supportedLocales: [
                {
                    id: 'en-GB',
                    alias: 'en',
                    preferredCurrency: 'GBP'
                },
                {
                    id: 'fr-FR',
                    alias: 'fr',
                    preferredCurrency: 'EUR'
                },
                {
                    id: 'it-IT',
                    alias: 'it',
                    preferredCurrency: 'EUR'
                },
                {
                    id: 'de-DE',
                    alias: 'de',
                    preferredCurrency: 'EUR'
                },
                {
                    id: 'es-ES',
                    alias: 'es',
                    preferredCurrency: 'EUR'
                }
            ]
        }
    },
    {
        id: 'VBQ-US',
        l10n: {
            supportedCurrencies: ['USD'],
            defaultCurrency: 'USD',
            defaultLocale: 'en-US',
            supportedLocales: [
                {
                    id: 'en-US',
                    alias: 'en',
                    preferredCurrency: 'USD'
                },
                {
                    id: 'es-US',
                    alias: 'es',
                    preferredCurrency: 'USD'
                }
            ]
        }
    },
    {
        id: 'VBQ-OUTLET-EU',
        l10n: {
            supportedCurrencies: ['EUR,USD,AUD,CAD,HKD,JPY,MOP,MXN,GBP,SGD,CHF,CNY'],
            defaultCurrency: 'EUR',
            defaultLocale: 'en-GB',
            supportedLocales: [
                {
                    id: 'en-GB',
                    alias: 'en',
                    preferredCurrency: 'GBP'
                },
                {
                    id: 'fr-FR',
                    alias: 'fr',
                    preferredCurrency: 'EUR'
                },
                {
                    id: 'it-IT',
                    alias: 'it',
                    preferredCurrency: 'EUR'
                },
                {
                    id: 'de-DE',
                    alias: 'de',
                    preferredCurrency: 'EUR'
                },
                {
                    id: 'es-ES',
                    alias: 'es',
                    preferredCurrency: 'EUR'
                }
            ]
        }
    },
    {
        id: 'VBQ-OUTLET-US',
        l10n: {
            supportedCurrencies: ['USD'],
            defaultCurrency: 'USD',
            defaultLocale: 'en-US',
            supportedLocales: [
                {
                    id: 'en-US',
                    alias: 'en',
                    preferredCurrency: 'USD'
                },
                {
                    id: 'es-US',
                    alias: 'es',
                    preferredCurrency: 'USD'
                }
            ]
        }
    }
]
