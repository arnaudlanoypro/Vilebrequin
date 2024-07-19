import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    Box,
    Heading,
    Text
} from '@salesforce/retail-react-app/app/components/shared/ui'
import {PlusIcon, MinusIcon} from '../../overrides/app/components/icons'

export default {
    title: 'Molecules/Accordion',
    component: Accordion,
    subcomponents: {AccordionItem, AccordionButton, AccordionPanel},
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    args: {
        name: 'default',
        allowMultiple: true,
        children: [
            {
                title: 'Accordion Item One - Title',
                content: (
                    <>
                        <Text>
                            Accordion Item One - Description. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua.
                        </Text>
                        <Text fontFamily={'bodyMedium'}>
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                            ut aliquip ex ea commodo consequat.
                        </Text>
                    </>
                )
            },
            {
                title: 'Accordion Item Two - Title',
                content: (
                    <Text>
                        Accordion Item Two - Description. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                    </Text>
                )
            },
            {
                title: 'Accordion Item Three - Title',
                content: (
                    <Text>
                        Accordion Item Two - Description. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                    </Text>
                )
            }
        ]
    }
}

const Template = (args) => {
    return (
        <Accordion
            w={['280px', '280px', '400px', '400px']}
            allowMultiple={args.allowMultiple}
            maxWidth={'896px'}
        >
            {args.children.map((child, i) => (
                <AccordionItem key={i}>
                    {({isExpanded}) => (
                        <>
                            <Heading as="h2">
                                <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                        {child.title}
                                    </Box>
                                    {isExpanded ? (
                                        <MinusIcon boxSize="12px" />
                                    ) : (
                                        <PlusIcon boxSize="12px" />
                                    )}
                                </AccordionButton>
                            </Heading>
                            <AccordionPanel>{child.content}</AccordionPanel>
                        </>
                    )}
                </AccordionItem>
            ))}
        </Accordion>
    )
}

export const Default = Template.bind({})
Default.args = {}
