import {NoLocationIcon} from '../../overrides/app/components/custom-icons'

export default {
    title: 'Icons/NoLocationIcon',
    component: NoLocationIcon,
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

export const NoLocation = {
    args: {}
}
