import {MinusIcon} from '../../overrides/app/components/custom-icons'

export default {
    title: 'Icons/MinusIcon',
    component: MinusIcon,
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

export const Minus = {
    args: {}
}
