import {CloseIcon} from '../../overrides/app/components/custom-icons'

export default {
    title: 'Icons/CloseIcon',
    component: CloseIcon,
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

export const Close = {
    args: {}
}
