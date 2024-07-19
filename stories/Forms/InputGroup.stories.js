import React from 'react'
import {Box} from '@salesforce/retail-react-app/app/components/shared/ui'
import {InputGroup} from '../../overrides/app/components/input-group'

export default {
    title: 'Forms/InputGroup',
    component: InputGroup,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    args: {
        name: 'inputGroup',
        id: 'inputGroup',
        inputNumber: 3,
        maxLength: 1,
        placeholder: '...'
    }
}

const Template = (args) => {
    return (
        <Box w={['calc(100vw - 32px)', null, '400px']} maxWidth="100%">
            <InputGroup
                name={args.name}
                id={args.id}
                inputNumber={args.inputNumber}
                maxLength={args.maxLength}
                placeholder={args.placeholder}
            />
        </Box>
    )
}

export const Default = Template.bind({})
Default.args = {}
