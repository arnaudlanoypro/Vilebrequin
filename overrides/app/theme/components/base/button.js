import colors from '../../foundations/colors'

const buttonBaseStyle = {
    _active: {
        color: 'white',
        bg: 'fullBlack',
        border: 'none'
    },
    _disabled: {
        opacity: 1
    }
}

export default {
    baseStyle: {
        bg: 'transparent',
        color: 'fullBlack',
        borderRadius: 'none',
        fontSize: 'md',
        textTransform: 'uppercase',
        fontWeight: 'medium'
    },
    variants: {
        primary: {
            ...buttonBaseStyle,
            bg: 'fullBlack',
            color: 'white',
            _hover: {
                backgroundColor: 'darkGray',
                _disabled: {
                    bg: 'borderGray'
                }
            },
            _disabled: {
                color: 'darkGray',
                bg: 'borderGray'
            }
        },
        secondary: {
            ...buttonBaseStyle,
            color: 'fullBlack',
            border: '1px solid',
            borderColor: 'gray',
            bg: 'transparent',
            _hover: {
                backgroundColor: 'transparent',
                borderColor: 'darkGray',
                _disabled: {
                    borderColor: 'borderGray'
                }
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
            ...buttonBaseStyle,
            color: 'fullBlack',
            bg: 'white',
            _hover: {
                color: 'white',
                backgroundColor: 'fullBlack',
                _disabled: {
                    color: 'darkGray',
                    bg: 'white'
                }
            },
            _disabled: {
                color: 'darkGray'
            }
        },
        invertedOutline: {
            ...buttonBaseStyle,
            color: 'white',
            bg: 'transparent',
            border: '1px solid',
            borderColor: 'white',
            _hover: {
                color: 'fullBlack',
                backgroundColor: 'white',
                borderColor: 'transparent',
                _disabled: {
                    color: 'white',
                    borderColor: 'white'
                }
            },
            _focus: {
                color: 'white',
                bg: 'fullBlack',
                borderColor: 'fullBlack'
            }
        },
        link: {
            ...buttonBaseStyle,
            color: 'fullBlack',
            textTransform: 'none',
            textDecoration: 'underline',
            fontWeight: 'medium',
            lineHeight: '110%',
            letterSpacing: '0.01em'
        }
    },
    sizes: {
        inputElement: {
            height: '40px',
            width: '40px'
        },
        md: {
            height: '50px',
            minWidth: 11,
            px: '32px'
        }
    }
}
