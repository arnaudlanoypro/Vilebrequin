import {AlertIcon} from '../../overrides/app/components/custom-icons'

export default {
    title: 'Icons/AlertIcon',
    component: AlertIcon,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {
        color: {
            control: {type: 'color'}
        }
    },
    args: {color: 'fullBlack', boxSize: 6}
}

export const Alert = {
    args: {}
}
