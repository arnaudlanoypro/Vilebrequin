import {CustomerServiceIcon} from '../../overrides/app/components/custom-icons'

export default {
    title: 'Icons/CustomerServiceIcon',
    component: CustomerServiceIcon,
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

export const CustomerService = {
    args: {}
}
