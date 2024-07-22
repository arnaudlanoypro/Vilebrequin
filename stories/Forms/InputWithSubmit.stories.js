import React from 'react'
import {useForm} from 'react-hook-form'
import InputWithSubmit from '../../overrides/app/components/input-with-submit'

export default {
    title: 'Forms/InputWithSubmit',
    component: InputWithSubmit,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    args: {
        name: 'inputwithsubmit',
        label: 'Label',
        rules: {
            required: 'Please enter something'
        }
    }
}

const Template = (args) => {
    const {
        handleSubmit,
        control,
        formState: {errors, isSubmitting}
    } = useForm()

    function onSubmit(values) {
        return new Promise((resolve) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2))
                resolve()
            }, 3000)
        })
    }
    return (
        <form
            id="inputWithSubmit-form"
            data-testid="sf-check-inputWithSubmit-form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
        >
            <InputWithSubmit
                error={errors.inputwithsubmit}
                control={control}
                isSubmitting={isSubmitting}
                {...args}
            />
        </form>
    )
}

export const Default = Template.bind({})
Default.args = {
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
