import React, {useState} from 'react'
import {Box} from '@salesforce/retail-react-app/app/components/shared/ui'
import {MemoryRouter} from 'react-router-dom'
import SwatchGroup from '../../overrides/app/components/swatch-group'
import Swatch from '../../overrides/app/components/swatch-group/swatch'
import {useIntl} from 'react-intl'
import swatchExample from '../../overrides/app/static/img/swatch-example.png'
import swatchExample2 from '../../overrides/app/static/img/swatch-example2.png'

export default {
    title: 'Molecules/ColorSelectorPDP',
    component: SwatchGroup,
    decorators: [
        (Story) => (
            <MemoryRouter>
                <Box textAlign={'center'} w={['calc(100vw - 32px)', null, '400px']} maxWidth="100%">
                    <Story />
                </Box>
            </MemoryRouter>
        )
    ],
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    args: {
        id: 'color',
        name: 'Colour',
        defaultSelectedValue: 'turtles-blue',
        values: [
            {
                name: 'turtles-blue',
                orderable: true,
                value: 'turtles-blue',
                image: {
                    alt: 'Checked Silk Tie, Turtles-blue, swatch',
                    disBaseLink: swatchExample,
                    link: swatchExample,
                    title: 'Checked Silk Tie, Turtles-blue'
                }
            },
            {
                name: 'turtles-black',
                orderable: true,
                value: 'turtles-black',
                image: {
                    alt: 'Checked Silk Tie, Turtles-black, swatch',
                    disBaseLink: swatchExample2,
                    link: swatchExample2,
                    title: 'Checked Silk Tie, Turtles-black'
                }
            },
            {
                name: '#60D4D8',
                orderable: true,
                value: '#60D4D8',
                image: {}
            },
            {
                name: '#EAC545',
                orderable: true,
                value: '#EAC545',
                image: {}
            },
            {
                name: '#52312F',
                orderable: true,
                value: '#52312F',
                image: {}
            },
            {
                name: '#CA85BE',
                orderable: true,
                value: '#CA85BE',
                image: {}
            },
            {
                name: '#D85755',
                orderable: true,
                value: '#D85755',
                image: {}
            },
            {
                name: '#FFFFFF',
                orderable: true,
                value: '#FFFFFF',
                image: {}
            },
            {
                name: '#8BC9D9',
                orderable: true,
                value: '#8BC9D9',
                image: {}
            },
            {
                name: '#DFEB9C',
                orderable: true,
                value: '#DFEB9C',
                image: {}
            },
            {
                name: '#6E6051',
                orderable: true,
                value: '#6E6051',
                image: {}
            },
            {
                name: '#3F3E5B',
                orderable: true,
                value: '#3F3E5B',
                image: {}
            },
            {
                name: '#276B16',
                orderable: true,
                value: '#276B16',
                image: {}
            },
            {
                name: '#E3D3C1',
                orderable: true,
                value: '#E3D3C1',
                image: {}
            },
            {
                name: '#143A64',
                orderable: true,
                value: '#143A64',
                image: {}
            },
            {
                name: '#81281C',
                orderable: true,
                value: '#81281C',
                image: {}
            }
        ]
    }
}

const Template = (args) => {
    const intl = useIntl()
    const [selectedValue, setSelectedValue] = useState(args.defaultSelectedValue)

    const swatches = args.values.map(({href, name, image, value, orderable}, index) => {
        const content = image ? (
            <Box
                height="100%"
                width="100%"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                backgroundColor={name.toLowerCase()}
                backgroundImage={`url(${image.disBaseLink || image.link})`}
            />
        ) : (
            name
        )
        const hasSelection = Boolean(selectedValue)
        const isSelected = selectedValue === value
        const isFirst = index === 0
        // To mimic the behavior of a native radio input, only
        // one swatch should receive tab focus; the rest can be
        // selected using arrow keys when the swatch group has
        // focus. The focused element is the selected option or
        // the first in the group, if no option is selected.
        // This is a slight difference, for simplicity, from the
        // native element, where the first element is focused on
        // `Tab` and the _last_ element is focused on `Shift+Tab`
        const isFocusable = isSelected || (!hasSelection && isFirst)
        return (
            <Swatch
                key={value}
                href={href}
                disabled={!orderable}
                value={value}
                name={name}
                variant={'color'}
                selected={isSelected}
                isFocusable={isFocusable}
            >
                {content}
            </Swatch>
        )
    })
    return (
        <SwatchGroup
            key={args.id}
            value={selectedValue}
            variant={'color'}
            label={intl.formatMessage(
                {
                    defaultMessage: '{variantType}',
                    id: 'product_view.label.variant_type'
                },
                {variantType: name}
            )}
            handleChange={(value) => {
                setSelectedValue(value)
            }}
        >
            {swatches}
        </SwatchGroup>
    )
}

export const Default = Template.bind({})
Default.args = {}
