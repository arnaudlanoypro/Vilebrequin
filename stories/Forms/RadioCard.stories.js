import React from 'react'
import {RadioCardGroup, RadioCard} from '../../overrides/app/components/radio-card'
import {Box} from '@salesforce/retail-react-app/app/components/shared/ui'

export default {
    title: 'Forms/RadioCard',
    component: RadioCardGroup,
    parameters: {
        layout: 'centered'
    },
    decorators: [
        (Story) => (
            <Box w="400px" maxWidth="calc(100vw - 32px)">
                <Story></Story>
            </Box>
        )
    ],
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
        <RadioCardGroup name={args.name} onChange={setValue} value={value}>
            {args.options.map((opt) => {
                return (
                    <RadioCard key={opt.value} value={opt.value}>
                        {opt.label}
                    </RadioCard>
                )
            })}
        </RadioCardGroup>
    )
}

export const Default = Template.bind({})
Default.args = {}
