/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import React from 'react'
import PropTypes from 'prop-types'
import {
    Box,
    Flex,
    useRadio,
    useRadioGroup,
    useStyleConfig,
    useMultiStyleConfig
} from '@salesforce/retail-react-app/app/components/shared/ui'

const RadioCardGroupContext = React.createContext()

export const RadioCard = (props) => {
    const styles = useMultiStyleConfig('RadioCard')
    const getRadioProps = React.useContext(RadioCardGroupContext)
    const {getInputProps, getCheckboxProps} = useRadio(getRadioProps(props))

    const input = getInputProps()
    const checkbox = getCheckboxProps()
    return (
        <Box as="label" {...styles.label}>
            <input {...input} />
            <Box {...checkbox} aria-hidden={false} {...styles.card}>
                {props.children}
            </Box>
        </Box>
    )
}

export const RadioCardGroup = (props) => {
    const styles = useStyleConfig('RadioCardGroup')
    const {getRootProps, getRadioProps} = useRadioGroup(props)
    const group = getRootProps()

    return (
        <RadioCardGroupContext.Provider value={getRadioProps}>
            <Flex as="ul" {...group} {...styles.list} w="100%">
                {props.children.map((child) => (
                    <Flex as="li" key={child.props.value} {...styles.item}>
                        {child}
                    </Flex>
                ))}
            </Flex>
        </RadioCardGroupContext.Provider>
    )
}

RadioCard.propTypes = {children: PropTypes.any}
RadioCardGroup.propTypes = {children: PropTypes.any}
