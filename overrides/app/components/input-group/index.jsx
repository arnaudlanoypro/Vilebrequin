/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import React from 'react'
import PropTypes from 'prop-types'
import {Flex, Input, useStyleConfig} from '@salesforce/retail-react-app/app/components/shared/ui'

export const InputGroup = ({name, id, inputNumber, maxLength, placeholder = ' ', _inputProps}) => {
    const styles = useStyleConfig('InputGroup')

    return (
        <Flex as="ul" {...styles.list} w="100%">
            {[...Array(inputNumber)].map((child, index) => (
                <Flex as="li" key={index} {...styles.item}>
                    <Input
                        name={`${name}${index}`}
                        id={`${id}${index}`}
                        variant="inputGroup"
                        maxLength={maxLength}
                        type="text"
                        placeholder={placeholder}
                        {..._inputProps}
                    />
                </Flex>
            ))}
        </Flex>
    )
}

InputGroup.propTypes = {
    name: PropTypes.string,
    id: PropTypes.string,
    inputNumber: PropTypes.number,
    maxLength: PropTypes.number,
    placeholder: PropTypes.string,
    _inputProps: PropTypes.any
}
