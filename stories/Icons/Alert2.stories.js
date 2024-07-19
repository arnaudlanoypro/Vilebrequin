import {Alert2Icon} from '../../overrides/app/components/custom-icons'

export default {
    title: 'Icons/Alert2Icon',
    component: Alert2Icon,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {
        color: {
            control: {type: 'color'}
        }
    },
    args: {color: '#F22F2F', boxSize: 6}
}

export const Alert2 = {
    args: {}
}
