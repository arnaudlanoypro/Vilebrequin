export default {
    sizes: {},
    baseStyle: {
        field: {}
    },
    variants: {
        basic: {
            field: {
                fontSize: ['md', 'md', 'md', '2xl'],
                borderWidth: '1px',
                borderColor: 'borderGray',
                h: '50px',
                borderRadius: '0',
                px: '18',
                _focus: {
                    borderColor: 'fullBlack'
                },
                _disabled: {
                    opacity: '1',
                    borderColor: 'borderGray',
                    backgroundColor: 'whiteSmoke'
                },
                _invalid: {
                    color: 'red',
                    borderColor: 'red'
                },
                _focusVisible: {
                    boxShadow: `0 0 0 1px lightBlue`
                }
            },
            icon: {
                zIndex: 1,
                fontSize: '16px',
                width: '50px',
                _invalid: {
                    color: 'red'
                }
            }
        }
    }
}
