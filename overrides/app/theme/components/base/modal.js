export default {
    baseStyle: {
        header: {
            fontSize: '14px',
            fontFamily: 'bodySemiBold',
            px: 0,
            py: 0
        },
        dialog: {
            p: '24px',
            borderRadius: '0'
        },
        body: {
            fontSize: '13px',
            px: 0,
            py: '16px'
        },
        closeButton: {
            top: '18px',
            right: '16px',
            _focus: {
                outline: '3px solid #4794F7',
                outlineOffset: '0'
            }
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
