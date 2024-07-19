import {PrivacyIcon} from '../../overrides/app/components/custom-icons'

export default {
    title: 'Icons/PrivacyIcon',
    component: PrivacyIcon,
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

export const Privacy = {
    args: {}
}
