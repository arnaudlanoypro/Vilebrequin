import {UserIcon} from '../../overrides/app/components/custom-icons'

export default {
    title: 'Icons/UserIcon',
    component: UserIcon,
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

export const User = {
    args: {}
}
