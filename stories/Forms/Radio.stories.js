import React from 'react'
import {RadioGroup, Radio, Stack} from '@salesforce/retail-react-app/app/components/shared/ui'

export default {
    title: 'Forms/Radio',
    component: RadioGroup,
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
        <RadioGroup name={args.name} onChange={setValue} value={value}>
            <Stack>
                {args.options.map((opt) => {
                    return (
                        <Radio key={opt.value} value={opt.value}>
                            {opt.label}
                        </Radio>
                    )
                })}
            </Stack>
        </RadioGroup>
    )
}

export const Default = Template.bind({})
Default.args = {}
