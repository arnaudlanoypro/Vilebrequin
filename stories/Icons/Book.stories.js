import {BookIcon} from '../../overrides/app/components/custom-icons'

export default {
    title: 'Icons/BookIcon',
    component: BookIcon,
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

export const Book = {
    args: {}
}
