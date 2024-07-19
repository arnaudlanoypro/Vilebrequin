import {FilterIcon} from '../../overrides/app/components/custom-icons'

export default {
    title: 'Icons/FilterIcon',
    component: FilterIcon,
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

export const Filter = {
    args: {}
}
