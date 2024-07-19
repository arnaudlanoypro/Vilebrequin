import {Heading} from '@salesforce/retail-react-app/app/components/shared/ui/Heading'

export default {
    title: 'Atoms/Heading',
    component: Heading,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    args: {children: 'ANTON'}
}

export const Heading1 = {
    args: {
        as: 'h1',
        fontSize: '6xl'
    }
}

export const Heading2 = {
    args: {
        as: 'h2',
        fontSize: '5xl'
    }
}
export const Heading3 = {
    args: {
        as: 'h3',
        fontSize: '4xl'
    }
}
export const Heading4 = {
    args: {
        as: 'h4',
        fontSize: '3xl'
    }
}
export const Heading5 = {
    args: {
        as: 'h5',
        fontSize: '2xl'
    }
}
export const Heading6 = {
    args: {
        as: 'h6',
        fontSize: 'xl'
    }
}
