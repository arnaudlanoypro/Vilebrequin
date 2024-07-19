import {PhoneIcon} from '../../overrides/app/components/custom-icons'

export default {
    title: 'Icons/PhoneIcon',
    component: PhoneIcon,
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

export const Phone = {
    args: {}
}
