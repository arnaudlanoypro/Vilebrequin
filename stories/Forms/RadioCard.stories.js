import React from 'react'
import {Box} from '@salesforce/retail-react-app/app/components/shared/ui'
import {RadioCardGroup, RadioCard} from '../../overrides/app/components/radio-card'
import {IntlProvider} from 'react-intl'

export default {
    title: 'Forms/RadioCard',
    component: RadioCardGroup,
    decorators: [
        (Story) => (
            <IntlProvider locale="en">
                <Story />
            </IntlProvider>
        )
    ],
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    args: {
        name: 'default',
        options: [
            {
                label: 'First',
                value: '1'
            },
            {
                label: 'Second',
                value: '2'
            },
            {
                label: 'Third',
                value: '3'
            }
        ]
    }
}

const Template = (args) => {
    const [value, setValue] = React.useState('1')
    return (
        <Box w={['calc(100vw - 32px)', null, '400px']} maxWidth="100%">
            <RadioCardGroup name={args.name} onChange={setValue} value={value} w="400px">
                {args.options.map((opt) => {
                    return (
                        <RadioCard key={opt.value} value={opt.value}>
                            {opt.label}
                        </RadioCard>
                    )
                })}
            </RadioCardGroup>
        </Box>
    )
}

export const Default = Template.bind({})
Default.args = {}
