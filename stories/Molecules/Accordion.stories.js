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
import {IntlProvider} from 'react-intl'

export default {
    title: 'Molecules/Accordion',
    component: Accordion,
    decorators: [
        (Story) => (
            <IntlProvider locale="en">
                <Story />
            </IntlProvider>
        )
    ],
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    args: {
        name: 'default'
    }
}

const Template = (args) => {
    return (
        <Accordion w={['280px', '280px', '400px', '400px']} allowMultiple maxWidth={'896px'}>
            <AccordionItem>
                {({isExpanded}) => (
                    <>
                        <Heading as="h2">
                            <AccordionButton>
                                <Box flex="1" textAlign="left">
                                    Accordion Item One - Title
                                </Box>
                                {isExpanded ? (
                                    <MinusIcon boxSize="12px" />
                                ) : (
                                    <PlusIcon boxSize="12px" />
                                )}
                            </AccordionButton>
                        </Heading>
                        <AccordionPanel>
                            <Text>
                                Accordion Item One - Description. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua.
                            </Text>
                            <Text fontFamily={'bodyMedium'}>
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat.
                            </Text>
                        </AccordionPanel>
                    </>
                )}
            </AccordionItem>

            <AccordionItem>
                {({isExpanded}) => (
                    <>
                        <Heading as="h2">
                            <AccordionButton>
                                <Box flex="1" textAlign="left">
                                    Accordion Item Two - Title
                                </Box>
                                {isExpanded ? (
                                    <MinusIcon boxSize="12px" />
                                ) : (
                                    <PlusIcon boxSize="12px" />
                                )}
                            </AccordionButton>
                        </Heading>
                        <AccordionPanel>
                            <Text>
                                Accordion Item Two - Description. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                            </Text>
                        </AccordionPanel>
                    </>
                )}
            </AccordionItem>

            <AccordionItem>
                {({isExpanded}) => (
                    <>
                        <Heading as="h2">
                            <AccordionButton>
                                <Box flex="1" textAlign="left">
                                    Accordion Item Three - Title
                                </Box>
                                {isExpanded ? (
                                    <MinusIcon boxSize="12px" />
                                ) : (
                                    <PlusIcon boxSize="12px" />
                                )}
                            </AccordionButton>
                        </Heading>
                        <AccordionPanel>
                            <Text>
                                Accordion Item Three - Description. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                            </Text>
                        </AccordionPanel>
                    </>
                )}
            </AccordionItem>
        </Accordion>
    )
}

export const Default = Template.bind({})
Default.args = {}
