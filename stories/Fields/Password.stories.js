import React from 'react'
import {useForm} from 'react-hook-form'
import Field from '../../overrides/app/components/field'
import {IntlProvider} from 'react-intl'

export default {
    title: 'Molecules/Fields/Password',
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
        name: 'doc',
        label: 'Label',
        formLabel: null,
        type: 'password',
        options: [],
        rules: {},
        error: null,
        inputProps: null,
        autoComplete: null,
        defaultValue: '',
        helpText: '',
        children: null
    }
}

const Template = (args) => {
    const form = useForm()
    return (
        <Field
            error={form.formState.errors[`${args.name}BasicInput`]}
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

export const Error = Template.bind({})
Error.args = {
    name: 'error',
    defaultValue: 'Input',
    error: {
        message: 'Error Message'
    }
}

export const Disabled = Template.bind({})
Disabled.args = {
    name: 'disabled',
    defaultValue: '',
    isDisabled: true
}
