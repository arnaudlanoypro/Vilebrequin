import {SearchIcon} from '../../overrides/app/components/custom-icons'

export default {
    title: 'Icons/SearchIcon',
    component: SearchIcon,
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

export const Search = {
    args: {}
}
