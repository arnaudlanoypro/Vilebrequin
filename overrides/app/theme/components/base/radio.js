export default {
    baseStyle: {
        container: {display: 'flex'},
        label: {
            width: 'full',
            fontSize: "12px"
        },
        control: {
            width: "16px",
            height: "16px",
            backgroundColor: 'white',
            borderColor: 'darkGray',
            borderWidth: "1px",
            _checked: {
                backgroundColor: 'white',
                borderColor: 'fullBlack',
                _before: {
                    width: "12px",
                    height: "12px",
                    backgroundColor: 'fullBlack',
                },
                _disabled: {
                    backgroundColor: 'white',
                    borderColor: 'gray',
                    _before: {
                        backgroundColor: 'gray',
                    },
                }
            },
            _disabled: {
                backgroundColor: 'white',
                borderColor: 'gray',
            }
        }
    }
}
