import {WhatsappIcon} from '../../overrides/app/components/custom-icons'

export default {
    title: 'Icons/WhatsappIcon',
    component: WhatsappIcon,
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

export const Whatsapp = {
    args: {}
}
