import {WishlistIcon} from '../../overrides/app/components/custom-icons'

export default {
    title: 'Icons/WishlistIcon',
    component: WishlistIcon,
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

export const Wishlist = {
    args: {}
}
