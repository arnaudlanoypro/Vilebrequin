import {VisibilityOffIcon} from '../../overrides/app/components/custom-icons'

export default {
    title: 'Icons/VisibilityOffIcon',
    component: VisibilityOffIcon,
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

export const VisibilityOff = {
    args: {}
}
