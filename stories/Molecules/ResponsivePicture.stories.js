import React from 'react'
import {ResponsivePicture} from '../../overrides/app/components/responsive-picture'
import {Box} from '@salesforce/retail-react-app/app/components/shared/ui'

export default {
    title: 'Molecules/ResponsivePicture',
    component: ResponsivePicture,
    parameters: {
        layout: 'centered'
    },
    decorators: [
        (Story) => (
            <Box textAlign={'center'} w={['calc(100vw - 32px)', null, '1000px']} maxWidth="100%">
                <Story />
            </Box>
        )
    ],
    tags: ['autodocs'],
    args: {
        src: {
            sm: '/img/hero-sm.jpg',
            md: '/img/hero-md.jpg',
            lg: '/img/hero-lg.jpg',
            sm2x: '/img/hero-sm2x.jpg',
            md2x: '/img/hero-md2x.jpg',
            lg2x: '/img/hero-lg2x.jpg'
        },
        loading: 'auto',
        fetchpriority: 'high',
        ratio: {sm: 390 / 416, md: 16 / 9, lg: 1512 / 455},
        alt: 'Banner image',
        width: '100%',
        height: 'auto'
    }
}

export const Default = {
    args: {}
}
