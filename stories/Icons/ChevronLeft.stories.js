import {ChevronLeftIcon} from '../../overrides/app/components/custom-icons'

export default {
    title: 'Icons/ChevronLeftIcon',
    component: ChevronLeftIcon,
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

export const ChevronLeft = {
    args: {}
}
