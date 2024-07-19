import React from 'react'
import {HStack, Divider, Link} from '@salesforce/retail-react-app/app/components/shared/ui'

export default {
    title: 'Molecules/Anchor',
    component: Link,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    args: {children: ['Destinations', 'Collaborations', 'Collections', 'Events']}
}

const Template = (args) => {
    return (
        <HStack>
            {args.children.map((child, i) => (
                <React.Fragment key={i}>
                    <Link textDecoration="none" href="#">
                        {child}
                    </Link>
                    {i !== args.children.length - 1 && (
                        <Divider
                            orientation="vertical"
                            color="gray"
                            mx={[null, null, '1em']}
                            height="13px"
                        />
                    )}
                </React.Fragment>
            ))}
        </HStack>
    )
}

export const Default = Template.bind({})
Default.args = {}
