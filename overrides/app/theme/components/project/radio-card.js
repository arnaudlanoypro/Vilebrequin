export default {
    baseStyle: {
        label: {
            position: 'relative',
            flex: 1
        },
        card: {
            textTransform: 'uppercase',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 'xl',
            fontFamily: 'bodySemiBold',
            fontWeight: 'normal',
            w: 'calc(100% + 1px)',
            position: 'relative',
            cursor: 'pointer',
            height: ['50px', null, '38px'],
            minWidth: 11,
            color: 'fullBlack',
            border: '1px solid',
            borderColor: ['gray', null, 'borderGray'],
            bg: 'transparent',
            _hover: {
                zIndex: 1,
                backgroundColor: 'transparent',
                borderColor: 'darkGray'
            },
            _checked: {
                bg: 'fullBlack',
                color: 'white',
                _hover: {
                    color: 'white',
                    backgroundColor: 'darkGray',
                    textDecoration: 'none',
                    _disabled: {
                        bg: 'borderGray'
                    }
                },
                border: 0
            },
            _focus: {
                boxShadow: 'outline'
            }
        }
    },
    parts: ['label', 'card']
}
