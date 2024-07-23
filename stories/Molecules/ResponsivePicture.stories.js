import React from 'react'
import {ResponsivePicture} from '../../overrides/app/components/responsive-picture'
import {Box} from '@salesforce/retail-react-app/app/components/shared/ui'
import herosm from '../../overrides/app/static/img/hero-sm.jpg'
import heromd from '../../overrides/app/static/img/hero-md.jpg'
import herolg from '../../overrides/app/static/img/hero-lg.jpg'
import herosm2x from '../../overrides/app/static/img/hero-sm2x.jpg'
import heromd2x from '../../overrides/app/static/img/hero-md2x.jpg'
import herolg2x from '../../overrides/app/static/img/hero-lg2x.jpg'

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
            sm: herosm,
            md: heromd,
            lg: herolg,
            sm2x: herosm2x,
            md2x: heromd2x,
            lg2x: herolg2x
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
