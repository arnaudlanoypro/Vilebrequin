import React from 'react'
import {useForm} from 'react-hook-form'
import Field from '../../overrides/app/components/field'

export default {
    title: 'Forms/Select',
    component: Field,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    args: {
        name: 'default',
        label: 'Label',
        formLabel: null,
        type: 'select',
        options: [
            {label: 'Select an option...', value: ''},
            {label: 'France', value: 'fr'},
            {label: 'United States of America', value: 'usa'},
            {label: 'United Kingdom', value: 'gb'}
        ],
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
            error={form.formState.errors[`${args.name}Select`]}
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
