export default {
    baseStyle: {
        countryContainer: {
            position: 'relative'
        },
        countries: {
            color: 'white',
            width: '92px',
            mr: '-1px',
            _focus: {
                zIndex: 1,
                borderColor: 'fullBlack'
            },
            _invalid: {
                color: 'white',
                borderColor: 'red',
                _focus: {
                    borderColor: 'red'
                }
            }
        },
        countrySelected: {
            position: 'absolute',
            zIndex: 2,
            top: '9px',
            left: '17px'
        },
        label: {
            left: '85px !important'
        }
    },
    parts: ['container', 'countries', 'label']
}
