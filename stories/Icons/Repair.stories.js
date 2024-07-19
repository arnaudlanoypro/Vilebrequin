import {RepairIcon} from '../../overrides/app/components/custom-icons'

export default {
    title: 'Icons/RepairIcon',
    component: RepairIcon,
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

export const Repair = {
    args: {}
}
