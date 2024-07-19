/*
 * Copyright (c) 2023, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

import React from 'react'
import {
    Box,
    Flex,
    SimpleGrid,
    Text,
    Button,
    useMultiStyleConfig
} from '@salesforce/retail-react-app/app/components/shared/ui'
import PropTypes from 'prop-types'
import {cssColorGroups} from '../../../constants'
import {useIntl} from 'react-intl'
import {
    ADD_FILTER_HIT_COUNT,
    REMOVE_FILTER_HIT_COUNT
} from '@salesforce/retail-react-app/app/pages/product-list/partials/refinements-utils'

const ColorRefinements = ({filter, toggleFilter, selectedFilters}) => {
    const intl = useIntl()
    const styles = useMultiStyleConfig('SwatchGroup', {
        variant: 'buttonWithChip',
        disabled: false
    })

    return (
        <SimpleGrid as="ul" columns={[4, null, 6]} spacingY={5} mt={1}>
            {filter.values.map((value, idx) => {
                const isSelected = selectedFilters.includes(value.value)
                const bgColor = cssColorGroups[value.presentationId.toLowerCase()]

                // Don't display refinements with no results, unless we got there by selecting too
                // many refinements
                if (value.hitCount === 0 && !isSelected) return

                return (
                    <Flex as="li" key={idx} listStyleType="none">
                        <Button
                            {...styles.swatch}
                            onClick={() => toggleFilter(value, filter.attributeId, isSelected)}
                            aria-checked={isSelected}
                            borderColor={isSelected ? 'fullBlack' : 'gray'}
                            bgColor={isSelected ? 'fullBlack' : 'transparent'}
                            zIndex={isSelected ? 1 : 0}
                            variant="outline"
                            aria-label={intl.formatMessage(
                                isSelected ? REMOVE_FILTER_HIT_COUNT : ADD_FILTER_HIT_COUNT,
                                value
                            )}
                        >
                            <Box
                                {...styles.chip}
                                marginRight={0}
                                backgroundRepeat="no-repeat"
                                backgroundSize="cover"
                                backgroundColor={bgColor}
                                background={
                                    value.presentationId.toLowerCase() === 'miscellaneous' &&
                                    bgColor
                                }
                                borderWidth={
                                    value.label.toLowerCase() === 'white' ||
                                    (value.label.toLowerCase() === 'black' && isSelected)
                                        ? '1px'
                                        : 0
                                }
                                borderColor={
                                    value.label.toLowerCase() === 'black' && isSelected
                                        ? 'white'
                                        : 'gray'
                                }
                            />
                            <Text
                                variant={'bodySmall'}
                                {...styles.text}
                                color={isSelected ? 'white' : 'darkGray'}
                                aria-hidden="true" // avoid redundant readout since swatch has aria label
                            >
                                {value.label}
                            </Text>
                        </Button>
                    </Flex>
                )
            })}
        </SimpleGrid>
    )
}

ColorRefinements.propTypes = {
    filter: PropTypes.object,
    toggleFilter: PropTypes.func,
    selectedFilters: PropTypes.array
}

export default ColorRefinements
