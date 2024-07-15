import {fn} from '@storybook/test'
import {Link} from '@salesforce/retail-react-app/app/components/shared/ui/Link'

export default {
    title: 'Molecules/Link',
    component: Link,
    parameters: {
        layout: 'centered',
        backgrounds: {
            default: 'soapstone'
        }
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            options: ['', 'primary', 'secondary', 'tertiary', 'invertedOutline'],
            control: {type: 'select'}
        },
        size: {
            options: ['', 'md'],
            control: {type: 'select'}
        },
        isDisabled: {
            control: {type: 'boolean'}
        }
    },
    args: {onClick: fn(), href: '#', children: 'Link'}
}

export const Default = {
    args: {}
}

export const Primary = {
    args: {
        variant: 'primary',
        size: 'md'
    }
}

export const Secondary = {
    args: {
        variant: 'secondary',
        size: 'md'
    }
}

export const Tertiary = {
    args: {
        variant: 'tertiary',
        size: 'md'
    }
}

export const InvertedOutline = {
    args: {
        variant: 'invertedOutline',
        size: 'md'
    }
}
