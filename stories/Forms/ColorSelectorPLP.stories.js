import React, {useState} from 'react'
import {Flex} from '@salesforce/retail-react-app/app/components/shared/ui'
import {MemoryRouter} from 'react-router-dom'
import ColorRefinements from '../../overrides/app/pages/product-list/partials/color-refinements'

export default {
    title: 'Molecules/ColorSelectorPLP',
    component: ColorRefinements,
    decorators: [
        (Story) => (
            <MemoryRouter>
                <Flex
                    justifyContent={'center'}
                    w={['calc(100vw - 32px)', null, '483px']}
                    maxWidth="100%"
                >
                    <Story />
                </Flex>
            </MemoryRouter>
        )
    ],
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    args: {
        defaultSelectedFilters: [],
        filter: {
            attributeId: 'c_refinementColor',
            label: 'Colour',
            values: [
                {
                    hitCount: 3,
                    label: 'Beige',
                    presentationId: 'beige',
                    value: 'Beige'
                },
                {
                    hitCount: 13,
                    label: 'Black',
                    presentationId: 'black',
                    value: 'Black'
                },
                {
                    hitCount: 10,
                    label: 'Blue',
                    presentationId: 'blue',
                    value: 'Blue'
                },
                {
                    hitCount: 2,
                    label: 'Navy',
                    presentationId: 'navy',
                    value: 'Navy'
                },
                {
                    hitCount: 3,
                    label: 'Brown',
                    presentationId: 'brown',
                    value: 'Brown'
                },
                {
                    hitCount: 1,
                    label: 'Green',
                    presentationId: 'green',
                    value: 'Green'
                },
                {
                    hitCount: 10,
                    label: 'Grey',
                    presentationId: 'grey',
                    value: 'Grey'
                },
                {
                    hitCount: 0,
                    label: 'Orange',
                    presentationId: 'orange',
                    value: 'Orange'
                },
                {
                    hitCount: 1,
                    label: 'Pink',
                    presentationId: 'pink',
                    value: 'Pink'
                },
                {
                    hitCount: 0,
                    label: 'Purple',
                    presentationId: 'purple',
                    value: 'Purple'
                },
                {
                    hitCount: 2,
                    label: 'Red',
                    presentationId: 'red',
                    value: 'Red'
                },
                {
                    hitCount: 5,
                    label: 'White',
                    presentationId: 'white',
                    value: 'White'
                },
                {
                    hitCount: 2,
                    label: 'Yellow',
                    presentationId: 'yellow',
                    value: 'Yellow'
                },
                {
                    hitCount: 1,
                    label: 'Multi',
                    presentationId: 'miscellaneous',
                    value: 'Miscellaneous'
                }
            ]
        }
    }
}

const Template = (args) => {
    const [selectedFilters, setSelectedFilters] = useState(args.defaultSelectedFilters)
    const toggleFilter = (value, attributeId, selected, allowMultiple = true) => {
        if (allowMultiple) {
            const newSelectedFilters = selected
                ? selectedFilters.filter((filter) => filter !== value.value)
                : [...selectedFilters, value.value]
            setSelectedFilters(newSelectedFilters)
        } else {
            setSelectedFilters([value.value])
        }
    }

    return (
        <ColorRefinements
            {...args}
            filter={args.filter}
            selectedFilters={selectedFilters}
            toggleFilter={toggleFilter}
        />
    )
}

export const Default = Template.bind({})
Default.args = {}
