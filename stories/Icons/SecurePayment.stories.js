import {SecurePaymentIcon} from '../../overrides/app/components/custom-icons'

export default {
    title: 'Icons/SecurePaymentIcon',
    component: SecurePaymentIcon,
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

export const SecurePayment = {
    args: {}
}
