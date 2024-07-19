/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import React from 'react'
import {Box} from '@salesforce/retail-react-app/app/components/shared/ui'
import {LoaderIcon} from '../custom-icons'
import PropTypes from 'prop-types'

const LoadingSpinner = ({wrapperStyles = {}, spinnerStyles = {}}) => {
    return (
        <Box
            zIndex="overlay"
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            background="rgba(0, 0, 0, 0.5)"
            display="flex"
            justifyContent={'center'}
            alignItems={'center'}
            {...wrapperStyles}
        >
            <LoaderIcon
                data-testid="loading"
                {...spinnerStyles}
                position="absolute"
                width="10%"
                height="auto"
            />
        </Box>
    )
}

LoadingSpinner.propTypes = {
    wrapperStyles: PropTypes.object,
    spinnerStyles: PropTypes.object
}

export default LoadingSpinner
