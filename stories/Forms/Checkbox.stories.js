import React from 'react'
import {useForm} from 'react-hook-form'
import Field from '../../overrides/app/components/field'

export default {
    title: 'Forms/Checkbox',
    component: Field,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    args: {
        name: 'default',
        label: 'Label',
        type: 'checkbox',
        rules: {required: 'This field is required'}
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
