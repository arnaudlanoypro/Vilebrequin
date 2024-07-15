export default {
    baseStyle: {
        container: {display: 'flex'},
        label: {
            width: 'full',
            fontSize: '12px',
            lineHeight: '16.8px'
        },
        control: {
            width: '12px',
            height: '12px',
            backgroundColor: 'white',
            borderColor: 'darkGray',
            borderWidth: '1px',
            _checked: {
                backgroundColor: 'white',
                borderColor: 'fullBlack',
                _before: {
                    width: '8px',
                    height: '8px',
                    backgroundColor: 'fullBlack'
                },
                _disabled: {
                    backgroundColor: 'white',
                    borderColor: 'gray',
                    _before: {
                        backgroundColor: 'gray'
                    }
                }
            },
            _disabled: {
                backgroundColor: 'white',
                borderColor: 'gray'
            }
        }
    }
}
