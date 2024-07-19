import React from 'react'
import {Tooltip, Button} from '@salesforce/retail-react-app/app/components/shared/ui'

export default {
    title: 'Molecules/Tooltip',
    component: Tooltip,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    args: {
        name: 'default',
        placement: 'top'
    }
}

const Template = (args) => {
    return (
        <Tooltip
            hasArrow
            label={`Here is the tooltip text info - placement ${args.placement}`}
            placement={args.placement}
            arrowSize={15}
            gutter={15}
            {...args}
        >
            <Button type="button" variant={'primary'} maxWidth="300px">
                Hover me!
            </Button>
        </Tooltip>
    )
}

export const Bottom = Template.bind({})
Bottom.args = {
    placement: 'bottom'
}

export const Top = Template.bind({})
Top.args = {
    placement: 'top'
}

export const Left = Template.bind({})
Left.args = {
    placement: 'left'
}

export const Right = Template.bind({})
Right.args = {
    placement: 'right'
}
