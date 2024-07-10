import React from 'react'
import {useForm} from 'react-hook-form'
import InputWithSubmit from '../../overrides/app/components/input-with-submit'
import {IntlProvider} from 'react-intl'

export default {
    title: 'Molecules/Fields/InputWithSubmit',
    component: InputWithSubmit,
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
        label: 'Label'
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
                name="inputwithsubmit"
                error={errors.inputwithsubmit}
                control={control}
                isSubmitting={isSubmitting}
                rules={{
                    required: 'Please enter something'
                }}
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
