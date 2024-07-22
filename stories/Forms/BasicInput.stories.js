import React from 'react'
import {useForm} from 'react-hook-form'
import Field from '../../overrides/app/components/field'
import {Box} from '@salesforce/retail-react-app/app/components/shared/ui'

export default {
    title: 'Forms/BasicInput',
    component: Field,
    parameters: {
        layout: 'centered'
    },
    decorators: [
        (Story) => (
            <Box textAlign={'center'} w={['calc(100vw - 32px)', null, '300px']} maxWidth="100%">
                <Story />
            </Box>
        )
    ],
    tags: ['autodocs'],
    args: {
        name: 'default',
        label: 'Label',
        formLabel: null,
        type: 'text',
        options: [],
        rules: {required: 'This field is required'},
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
