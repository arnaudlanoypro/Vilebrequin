import React from 'react'
import {MemoryRouter} from 'react-router-dom'
import Breadcrumb from '../../overrides/app/components/breadcrumb'
import {IntlProvider} from 'react-intl'

export default {
    title: 'Molecules/Breadcrumbs',
    component: Breadcrumb,
    parameters: {
        layout: 'centered'
    },
    decorators: [
        (Story) => (
            <MemoryRouter>
                <IntlProvider locale="en">
                    <Story />
                </IntlProvider>
            </MemoryRouter>
        )
    ],
    tags: ['autodocs'],
    args: {
        categories: [
            {id: 1, name: 'Shop'},
            {id: 2, name: 'Men swimwear'}
        ],
        product: {id: '3525', name: 'Men Swim Shorts Ronde des Tortues'}
    }
}

export const Default = {
    args: {}
}
