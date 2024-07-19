import {RightArrowIcon} from '../../overrides/app/components/custom-icons'

export default {
    title: 'Icons/RightArrowIcon',
    component: RightArrowIcon,
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

export const RightArrow = {
    args: {}
}
