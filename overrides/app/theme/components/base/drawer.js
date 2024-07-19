export default {
    baseStyle: {
        dialog: {bg: 'white'},
        header: {
            paddingTop: 20,
            paddingRight: 20,
            paddingBottom: 20,
            paddingLeft: 20,
            boxShadow: 'base'
        },
        body: {
            padding: [10, 10, 20, 20]
        },
        footer: {
            paddingTop: 20,
            paddingRight: 20,
            paddingBottom: 20,
            paddingLeft: 20
        },
        closeButton: {
            top: '14px',
            right: '14px',
            _focus: {
                outline: '3px solid #4794F7',
                outlineOffset: '0'
            }
        }
    },
    sizes: {
        sm: {
            w: '400px'
        },
        md: {
            w: '700px'
        },
        lg: {
            w: '1000px'
        }
    }
}
