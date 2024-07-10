export default {
    variants: {
        floating: {
            container: {
                _focusWithin: {
                    label: {
                        transform: 'scale(0.9) translateY(-29px)',
                        backgroundColor: 'white'
                    }
                },
                'input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label, .chakra-input__group:has(input:not(:placeholder-shown)) + label, .chakra-input__group:has(.chakra-select__wrapper) + label':
                    {
                        transform: 'scale(0.9) translateY(-29px)',
                        backgroundColor: 'white'
                    },
                label: {
                    top: '17px',
                    left: 0,
                    zIndex: 2,
                    position: 'absolute',
                    pointerEvents: 'none',
                    my: '1px',
                    ml: '14px',
                    px: '6px',
                    transformOrigin: 'left top',
                    fontSize: '12px',
                    fontWeight: 'normal',
                    lineHeight: '1.25',
                    color: 'darkGray',
                    _disabled: {
                        opacity: '1',
                        color: 'dimGray'
                    },
                    _invalid: {
                        color: 'red'
                    }
                }
            }
        }
    }
}
