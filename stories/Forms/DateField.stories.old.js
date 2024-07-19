import React from 'react'
import {useForm} from 'react-hook-form'
import DateField from '../../overrides/app/components/date-field'

export default {
    title: 'Forms/DateField',
    component: DateField,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    args: {
        name: 'date',
        label: 'Date of birth',
        rules: {
            required: 'Please enter your birth date.'
        }
    }
}

const Template = (args) => {
    const form = useForm()
    return <DateField error={form.formState.errors.date} control={form.control} {...args} />
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
        message: 'Please enter your birth date.'
    }
}
