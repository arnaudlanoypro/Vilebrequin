import {EasyReturnsIcon} from '../../overrides/app/components/custom-icons'

export default {
    title: 'Icons/EasyReturnsIcon',
    component: EasyReturnsIcon,
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

export const EasyReturns = {
    args: {}
}
