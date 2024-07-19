import {InfoIcon} from '../../overrides/app/components/custom-icons'

export default {
    title: 'Icons/InfoIcon',
    component: InfoIcon,
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

export const Info = {
    args: {}
}
