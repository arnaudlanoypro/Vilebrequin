export default {
    sizes: {},
    baseStyle: {
        field: {}
    },
    variants: {
        basic: {
            field: {
                borderWidth: "1px",
                borderColor: "borderGray",
                h: "50px",
                borderRadius: "0",
                px: "20",
                _focus: {
                    borderColor: 'fullBlack',
                },
                _disabled: {
                    opacity: "1",
                    borderColor: "borderGray",
                    backgroundColor: "whiteSmoke",
                },
                _invalid: {
                    borderColor: "red",
                },
            }
        }
    }
}
