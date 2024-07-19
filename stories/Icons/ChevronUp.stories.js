import {ChevronUpIcon} from '../../overrides/app/components/custom-icons'

export default {
    title: 'Icons/ChevronUpIcon',
    component: ChevronUpIcon,
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

export const ChevronUp = {
    args: {}
}
