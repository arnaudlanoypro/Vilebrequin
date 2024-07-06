export default {
    baseStyle: {
        header: {
            fontSize: "16px",
            fontWeight: "semibold"
        },
        dialog: {
            borderRadius: '0'
        },
        body: {
            fontSize: "13px",
        },
        closeButton: {
            top: "24px",
            right: "24px",
            _focus: {
                outline: '3px solid #4794F7',
                outlineOffset: '0'
            },
        }
    },
    sizes: {
        small: {
            dialog: {
                width: '400px'
            }
        },
        medium: {
            dialog: {
                width: '700px'
            }
        },
        large: {
            dialog: {
                width: '1000px'
            }
        }
    }
}
