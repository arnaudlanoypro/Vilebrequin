import {CheckIcon} from '../../overrides/app/components/custom-icons'

export default {
    title: 'Icons/CheckIcon',
    component: CheckIcon,
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

export const Check = {
    args: {}
}
