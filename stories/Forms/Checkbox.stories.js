import React from 'react'
import {useForm} from 'react-hook-form'
import Field from '../../overrides/app/components/field'
import {IntlProvider} from 'react-intl'

export default {
    title: 'Forms/Checkbox',
    component: Field,
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
        label: 'Label',
        type: 'checkbox'
    }
}

const Template = (args) => {
    const form = useForm()
    return (
        <Field
            error={form.formState.errors[`${args.name}Checkbox`]}
            control={form.control}
            {...args}
        />
    )
}

export const Default = Template.bind({})
Default.args = {
    name: 'default',
    defaultValue: ''
}
