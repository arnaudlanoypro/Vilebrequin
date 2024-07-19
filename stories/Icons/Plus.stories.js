import {PlusIcon} from '../../overrides/app/components/custom-icons'

export default {
    title: 'Icons/PlusIcon',
    component: PlusIcon,
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

export const Plus = {
    args: {}
}
