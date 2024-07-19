export default {
    sizes: {},
    baseStyle: {
        field: {
            backgroundColor: 'white'
        },
        element: {
            height: '50px',
            mr: '8px'
        }
    },
    variants: {
        basic: {
            field: {
                fontSize: ['md', 'md', 'md', '2xl'],
                borderWidth: '1px',
                borderColor: 'borderGray',
                height: '50px',
                borderRadius: '0',
                paddingLeft: '18px',
                paddingRight: '14px',
                colorScheme: 'light',
                '&::-webkit-calendar-picker-indicator': {
                    fontSize: '2xl'
                },
                _focus: {
                    borderWidth: '1px',
                    borderColor: 'fullBlack'
                },
                _disabled: {
                    opacity: '1',
                    borderColor: 'borderGray',
                    backgroundColor: 'whiteSmoke'
                },
                _invalid: {
                    color: 'red',
                    borderColor: 'red',
                    _focus: {
                        borderColor: 'red'
                    }
                },
                _focusVisible: {
                    boxShadow: `0 0 0 1px lightBlue`
                }
            }
        },
        inputGroup: {
            field: {
                textAlign: 'center',
                fontSize: ['md', 'md', 'md', '2xl'],
                fontFamily: 'bodyMedium',
                borderWidth: '1px',
                borderColor: 'borderGray',
                height: ['50px', null, '38px'],
                width: 'calc(100% + 1px)',
                mr: '-1px',
                borderRadius: '0',
                paddingX: '18',
                _placeholder: {
                    color: 'dimGray'
                },
                _focus: {
                    zIndex: 1,
                    borderWidth: '1px',
                    borderColor: 'fullBlack'
                },
                _disabled: {
                    opacity: '1',
                    borderColor: 'borderGray',
                    backgroundColor: 'whiteSmoke'
                },
                _invalid: {
                    color: 'red',
                    borderColor: 'red',
                    _focus: {
                        borderColor: 'red'
                    }
                },
                _focusVisible: {
                    boxShadow: `0 0 0 1px lightBlue`
                },
                '&:not(:placeholder-shown):not(:focus)': {
                    color: 'white',
                    bg: 'fullBlack',
                    borderColor: 'fullBlack'
                }
            }
        }
    }
}
