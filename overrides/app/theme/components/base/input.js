export default {
    sizes: {},
    baseStyle: {
        field: {},
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
                paddingX: '18',
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
        }
    }
}
