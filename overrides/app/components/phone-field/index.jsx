/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import React from 'react'
import PropTypes from 'prop-types'
import {Controller} from 'react-hook-form'
import {
    Box,
    Flex,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    InputGroup,
    Select,
    useStyleConfig
} from '@salesforce/retail-react-app/app/components/shared/ui'
import {ChevronDownIcon} from '../custom-icons'

const PhoneField = ({
    name,
    label,
    formLabel,
    countries = [],
    rules = {},
    error,
    inputProps,
    control,
    autoComplete,
    defaultCountry,
    defaultValue,
    helpText,
    isDisabled,
    children
}) => {
    const styles = useStyleConfig('PhoneField')
    return (
        <Flex {...styles.container}>
            <FormControl variant="floating" id={name} isInvalid={error} isDisabled={isDisabled}>
                <InputGroup>
                    <Controller
                        name={`${name}-countries`}
                        control={control}
                        rules={rules}
                        render={({field: {onChange, value, ref}}) => {
                            const currentCountry = value ? value : defaultCountry
                            return (
                                <Box {...styles.countryContainer}>
                                    <Box {...styles.countrySelected}>
                                        {
                                            countries.find((opt) => opt.value === currentCountry)
                                                ?.icon
                                        }
                                    </Box>
                                    <Select
                                        icon={<ChevronDownIcon />}
                                        variant="basic"
                                        ref={ref}
                                        onChange={onChange}
                                        defaultValue={defaultCountry}
                                        value={value}
                                        placeholder=""
                                        {...styles.countries}
                                    >
                                        {countries.map((opt) => (
                                            <option key={opt.value} value={opt.value}>
                                                {opt.label}
                                            </option>
                                        ))}
                                    </Select>
                                </Box>
                            )
                        }}
                    />
                    <Controller
                        name={name}
                        control={control}
                        rules={rules}
                        defaultValue={defaultValue}
                        render={({field: {onChange, value, ref}}) => {
                            const _inputProps =
                                typeof inputProps === 'function'
                                    ? inputProps({value, onChange})
                                    : inputProps

                            return (
                                <Input
                                    variant="basic"
                                    ref={ref}
                                    onChange={onChange}
                                    value={value}
                                    type="tel"
                                    placeholder=""
                                    autoComplete={autoComplete}
                                    {..._inputProps}
                                />
                            )
                        }}
                    />

                    {children}
                </InputGroup>

                {formLabel || <FormLabel {...styles.label}>{label}</FormLabel>}

                {error && <FormErrorMessage>{error.message}</FormErrorMessage>}

                {helpText}
            </FormControl>
        </Flex>
    )
}

PhoneField.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    autoComplete: PropTypes.string,
    formLabel: PropTypes.any,
    countries: PropTypes.arrayOf(PropTypes.shape({icon: PropTypes.object, value: PropTypes.any})),
    rules: PropTypes.object,
    error: PropTypes.shape({message: PropTypes.string}),
    inputProps: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    control: PropTypes.object,
    defaultCountry: PropTypes.any,
    defaultValue: PropTypes.any,
    helpText: PropTypes.any,
    isDisabled: PropTypes.bool,
    children: PropTypes.any
}

export default PhoneField
