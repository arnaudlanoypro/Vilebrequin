export default {
    baseStyle: {
        borderRadius: 'none',
        fontSize: 'md',
        bg: 'fullBlack',
        color: 'white',
        textTransform: 'uppercase',
        fontWeight: 'medium',
        _focus: {
            outline: '3px solid #4794F7',
            outlineOffset: '0'
        },
        _active: {
            color: 'white',
            bg: 'fullBlack',
            border: 'none'
        },
        _disabled: {
            opacity: 1
        }
    },
    variants: {
        primary: {
            _hover: {
                backgroundColor: 'darkGray'
            },
            _disabled: {
                color: 'darkGray',
                bg: 'borderGray'
            }
        },
        secondary: {
            color: 'fullBlack',
            border: '1px solid',
            borderColor: 'gray',
            bg: 'transparent',
            _hover: {
                backgroundColor: 'transparent',
                borderColor: 'darkGray'
            },
            _focus: {
                color: 'white',
                bg: 'fullBlack',
                borderColor: 'fullBlack'
            },
            _disabled: {
                color: 'darkGray',
                borderColor: 'borderGray'
            }
        },
        tertiary: {
            color: 'fullBlack',
            bg: 'white',
            _hover: {
                color: 'white',
                backgroundColor: 'fullBlack'
            },
            _disabled: {
                color: 'darkGray'
            }
        },
        invertedOutline: {
            color: 'white',
            bg: 'transparent',
            border: '1px solid',
            borderColor: 'white',
            _hover: {
                color: 'fullBlack',
                backgroundColor: 'white',
                border: 'none'
            },
            _focus: {
                color: 'white',
                bg: 'fullBlack',
                borderColor: 'fullBlack'
            }
        }
    },
    sizes: {
        md: {
            height: '50px',
            minWidth: 11,
            px: '32px'
        }
    }
}
