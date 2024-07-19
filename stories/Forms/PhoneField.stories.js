import React from 'react'
import {useForm} from 'react-hook-form'
import PhoneField from '../../overrides/app/components/phone-field'
import {FlagFRIcon, FlagUSIcon} from '../../overrides/app/components/icons'

export default {
    title: 'Forms/PhoneField',
    component: PhoneField,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    args: {
        name: 'default',
        label: 'Phone number',
        defaultCountry: 'FR',
        countries: [
            {icon: <FlagFRIcon boxSize={8} />, value: 'FR', label: 'France'},
            {
                icon: <FlagUSIcon boxSize={8} />,
                value: 'US',
                label: 'United States'
            }
        ],
        rules: {
            required: 'Please enter your phone number.'
        }
    }
}

const Template = (args) => {
    const form = useForm()
    return (
        <PhoneField
            error={form.formState.errors[`${args.name}PhoneField`]}
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
        message: 'Please enter your phone number.'
    }
}

export const Disabled = Template.bind({})
Disabled.args = {
    name: 'disabled',
    defaultValue: '',
    isDisabled: true
}
