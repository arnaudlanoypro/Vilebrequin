import React, {useState} from 'react'
import {Box, Text} from '@salesforce/retail-react-app/app/components/shared/ui'
import {MemoryRouter} from 'react-router-dom'
import SwatchGroup from '../../overrides/app/components/swatch-group'
import Swatch from '../../overrides/app/components/swatch-group/swatch'
import {useIntl} from 'react-intl'

export default {
    title: 'Molecules/SizeSelector',
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
        id: 'size',
        name: 'Size',
        values: [
            {
                name: '28',
                orderable: true,
                value: '28'
            },
            {
                name: '29',
                orderable: true,
                value: '29'
            },
            {
                name: '30',
                orderable: true,
                value: '30'
            },
            {
                name: '31',
                orderable: true,
                value: '31'
            },
            {
                name: '32',
                orderable: false,
                value: '32'
            },
            {
                name: '33',
                orderable: true,
                value: '33'
            },
            {
                name: '34',
                orderable: true,
                value: '34'
            },
            {
                name: '36',
                orderable: true,
                value: '36'
            },
            {
                name: '38',
                orderable: true,
                value: '38'
            },
            {
                name: '40',
                orderable: true,
                value: '40'
            }
        ],
        defaultSelectedValue: undefined
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
            <Text variant="descriptor">{name}</Text>
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
                variant={'size'}
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
            variant={'size'}
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
