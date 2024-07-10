/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import React from 'react'
import PropTypes from 'prop-types'
import {FormattedMessage} from 'react-intl'
import {Controller} from 'react-hook-form'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    InputGroup,
    Select,
    useStyleConfig
} from '@salesforce/retail-react-app/app/components/shared/ui'
import {ChevronDownIcon} from '../icons'
import {useDateSelect} from 'react-ymd-date-select'

const CustomDateSelect = ({value, onChange}) => {
    const styles = useStyleConfig('DateField')
    const dateSelect = useDateSelect(value, onChange, {
        firstYear: new Date().getFullYear(),
        lastYear: new Date().getFullYear() - 100
    })

    return (
        <>
            <Select
                icon={<ChevronDownIcon />}
                variant="basic"
                onChange={dateSelect.onDayChange}
                value={dateSelect.dayValue}
                placeholder=""
                {...styles.select}
            >
                <option value="" disabled>
                    <FormattedMessage defaultMessage="Day" id="datefield.day.option" />
                </option>
                {dateSelect.dayOptions.map((opt) => (
                    <option key={`${opt.label}-${opt.value}`} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </Select>
            <Select
                icon={<ChevronDownIcon />}
                variant="basic"
                onChange={dateSelect.onMonthChange}
                value={dateSelect.monthValue}
                placeholder=""
                {...styles.select}
            >
                <option value="" disabled>
                    <FormattedMessage defaultMessage="Month" id="datefield.month.option" />
                </option>
                {dateSelect.monthOptions.map((opt) => (
                    <option key={`${opt.label}-${opt.value}`} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </Select>
            <Select
                icon={<ChevronDownIcon />}
                variant="basic"
                onChange={dateSelect.onYearChange}
                value={dateSelect.yearValue}
                placeholder=""
                {...styles.select}
            >
                <option value="" disabled>
                    <FormattedMessage defaultMessage="Year" id="datefield.year.option" />
                </option>
                {dateSelect.yearOptions.map((opt) => (
                    <option key={`${opt.label}-${opt.value}`} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </Select>
        </>
    )
}

CustomDateSelect.propTypes = {
    value: PropTypes.any,
    onChange: PropTypes.func
}

const DateField = ({
    name,
    label,
    formLabel,
    rules = {},
    error,
    control,
    defaultValue,
    helpText,
    isDisabled,
    children
}) => {
    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            render={({field: {onChange, value, ref}}) => {
                return (
                    <FormControl
                        variant="floating"
                        id={name}
                        isInvalid={error}
                        isDisabled={isDisabled}
                    >
                        <InputGroup>
                            <CustomDateSelect value={value} onChange={onChange} />
                            {children}
                        </InputGroup>

                        {formLabel || <FormLabel>{label}</FormLabel>}

                        {error && <FormErrorMessage>{error.message}</FormErrorMessage>}

                        {helpText}
                    </FormControl>
                )
            }}
        />
    )
}

DateField.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    formLabel: PropTypes.any,
    rules: PropTypes.object,
    error: PropTypes.shape({message: PropTypes.string}),
    inputProps: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    control: PropTypes.object,
    defaultValue: PropTypes.any,
    helpText: PropTypes.any,
    isDisabled: PropTypes.bool,
    children: PropTypes.any
}

export default DateField
