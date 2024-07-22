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
    Flex,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    InputRightElement,
    IconButton,
    InputGroup,
    useStyleConfig
} from '@salesforce/retail-react-app/app/components/shared/ui'
import {RightArrowIcon} from '../custom-icons'

const InputWithSubmit = ({
    name,
    label,
    formLabel,
    rules = {},
    error,
    inputProps,
    control,
    autoComplete,
    defaultValue,
    helpText,
    isDisabled,
    children,
    isSubmitting
}) => {
    const styles = useStyleConfig('InputWithSubmit')
    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            defaultValue={defaultValue}
            render={({field: {onChange, value, ref}}) => {
                const _inputProps =
                    typeof inputProps === 'function' ? inputProps({value, onChange}) : inputProps

                return (
                    <Flex {...styles.container}>
                        <FormControl
                            variant="floating"
                            id={name}
                            isInvalid={error}
                            isDisabled={isDisabled}
                            isRequired={Object.prototype.hasOwnProperty.call(rules, 'required')}
                        >
                            <InputGroup>
                                <Input
                                    variant="basic"
                                    ref={ref}
                                    onChange={onChange}
                                    value={value}
                                    type="text"
                                    placeholder=""
                                    autoComplete={autoComplete}
                                    {..._inputProps}
                                />
                                <InputRightElement>
                                    <IconButton
                                        type="submit"
                                        size="inputElement"
                                        icon={<RightArrowIcon color="fullBlack" boxSize={5} />}
                                        // onClick={() => form.clearErrors('global')}
                                        isLoading={isSubmitting}
                                        isDisabled={isDisabled}
                                    />
                                </InputRightElement>

                                {children}
                            </InputGroup>

                            {formLabel || <FormLabel {...styles.label}>{label}</FormLabel>}

                            {error && <FormErrorMessage>{error.message}</FormErrorMessage>}

                            {helpText}
                        </FormControl>
                    </Flex>
                )
            }}
        />
    )
}

InputWithSubmit.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    autoComplete: PropTypes.string,
    formLabel: PropTypes.any,
    rules: PropTypes.object,
    error: PropTypes.shape({message: PropTypes.string}),
    inputProps: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    control: PropTypes.object,
    defaultValue: PropTypes.any,
    helpText: PropTypes.any,
    isDisabled: PropTypes.bool,
    children: PropTypes.any,
    isSubmitting: PropTypes.bool
}

export default InputWithSubmit
