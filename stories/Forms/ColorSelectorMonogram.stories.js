import React, {useState} from 'react'
import {Box, useMultiStyleConfig} from '@salesforce/retail-react-app/app/components/shared/ui'
import {MemoryRouter} from 'react-router-dom'
import SwatchGroup from '../../overrides/app/components/swatch-group'
import Swatch from '../../overrides/app/components/swatch-group/swatch'
import {useIntl} from 'react-intl'

export default {
    title: 'Molecules/ColorSelectorMonogram',
    component: SwatchGroup,
    decorators: [
        (Story) => (
            <MemoryRouter>
                <Box textAlign="center" w={['calc(100vw - 32px)', null, '444px']} maxWidth="100%">
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
        defaultSelectedValue: null,
        values: [
            {
                name: 'Beige',
                orderable: true,
                value: '#E3D3C1',
                image: {}
            },
            {
                name: 'Orange',
                orderable: true,
                value: '#FE7502',
                image: {}
            },
            {
                name: 'Pink',
                orderable: true,
                value: '#E3C9CF',
                image: {}
            },
            {
                name: 'White',
                orderable: true,
                value: '#FFFFFF',
                image: {}
            },
            {
                name: 'Red',
                orderable: true,
                value: '#81281C',
                image: {}
            },
            {
                name: 'Blue',
                orderable: true,
                value: '#A7CAD9',
                image: {}
            }
        ]
    }
}

const Template = (args) => {
    const intl = useIntl()
    const [selectedValue, setSelectedValue] = useState(args.defaultSelectedValue)
    const styles = useMultiStyleConfig('SwatchGroup', {
        variant: 'buttonWithChip',
        disabled: false
    })

    const swatches = args.values.map(({href, name, image, value, orderable}, index) => {
        const content = image ? (
            <Box
                {...styles.chip}
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                backgroundColor={value}
                backgroundImage={`url(${image.disBaseLink || image.link})`}
                borderWidth={name.toLowerCase() === 'white' ? '1px' : 0}
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
                variant="buttonWithChip"
                selected={isSelected}
                isFocusable={isFocusable}
                label={name}
            >
                {content}
            </Swatch>
        )
    })
    return (
        <SwatchGroup
            key={args.id}
            value={selectedValue}
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
            variant={'buttonWithChip'}
        >
            {swatches}
        </SwatchGroup>
    )
}

export const Default = Template.bind({})
Default.args = {}
