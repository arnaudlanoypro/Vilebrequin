import React from 'react'
import Colors from './Colors'
import colors from '../overrides/app/theme/foundations/colors'

export default {
    title: 'Atoms/Colors',
    component: Colors,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs']
}

export const Default = {
    args: {
        colors
    }
}
