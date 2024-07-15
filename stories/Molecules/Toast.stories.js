import React from 'react'
import {Button, Link} from '@salesforce/retail-react-app/app/components/shared/ui'
import {useToast} from '../../overrides/app/hooks/use-toast'
import {IntlProvider} from 'react-intl'

export default {
    title: 'Molecules/Toast',
    component: Button,
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
    argTypes: {
        variant: {
            options: ['', 'warning', 'error'],
            control: {type: 'select'}
        }
    },
    args: {
        name: 'default',
        title: 'Item added to wishlist',
        duration: 3000,
        isClosable: true,
        variant: '',
        action: null
    }
}

const Template = (args) => {
    const toast = useToast()
    return (
        <Button
            type="button"
            variant={'primary'}
            maxWidth="300px"
            onClick={() => {
                toast({
                    title: args.title,
                    duration: args.duration,
                    isClosable: args.isClosable,
                    variant: args.variant,
                    action: args.action
                })
            }}
        >
            Show toast!
        </Button>
    )
}

export const Default = Template.bind({})
Default.args = {
    title: 'Item added to wishlist!',
    duration: 3000,
    isClosable: true
}

export const Warning = Template.bind({})
Warning.args = {
    title: 'Apple Pay is currently not available in your cart. Please proceed to checkout to enjoy the convenience of Apple Pay.',
    variant: 'warning',
    duration: 3000,
    isClosable: true,
    action: <Link to={'/'}>VIEW</Link>
}

export const Error = Template.bind({})
Error.args = {
    title: 'Something went wrong',
    variant: 'error',
    duration: 3000,
    isClosable: true
}
