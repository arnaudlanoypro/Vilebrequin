import React from 'react';
import {Image, AspectRatio, useBreakpointValue} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import {useDevicePixelRatio} from 'use-device-pixel-ratio'

export const ResponsivePicture = ({src, ratio, ...props}) => {
    const devicePixelRatio = useDevicePixelRatio();
    const isRetina = devicePixelRatio > 1;
    const imgSrc = useBreakpointValue(
        isRetina
        ? {
            sm: src.sm2x || src.sm,
            md: src.md2x || src.md,
            lg: src.lg2x || src.lg
        }
        : src
    );

    return (
        <AspectRatio ratio={useBreakpointValue(ratio)}>
            <Image src={imgSrc} {...props} />
        </AspectRatio>
    );
};

ResponsivePicture.propTypes = {
    src: PropTypes.shape({
        sm: PropTypes.string.isRequired,
        md: PropTypes.string.isRequired,
        lg: PropTypes.string.isRequired,
        sm2x: PropTypes.string,
        md2x: PropTypes.string,
        lg2x: PropTypes.string
    }).isRequired,
    ratio: PropTypes.any
};
