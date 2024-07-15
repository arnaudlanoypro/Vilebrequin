import button from './button'

export default {
    baseStyle: {
        color: 'fullBlack',
        fontSize: 'md',
        fontFamily: 'bodyMedium',
        lineHeight: '110%',
        letterSpacing: '0.01em',
        textDecoration: 'underline',
        _hover: {
            color: 'blue'
        },
        _focus: {
            outline: '3px solid #4794F7',
            outlineOffset: '0'
        }
    },
    // New `variants` or `sizes` can be created depending on specific pages/sections
    variants: button.variants,
    sizes: button.sizes
}
