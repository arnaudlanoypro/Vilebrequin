import {SuccessIcon} from '../../overrides/app/components/custom-icons'

export default {
    title: 'Icons/SuccessIcon',
    component: SuccessIcon,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {
        color: {
            control: {type: 'color'}
        }
    },
    args: {color: '#32592D', boxSize: 6}
}

export const Success = {
    args: {}
}
