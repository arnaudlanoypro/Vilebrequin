
export default {
    baseStyle: {
        container: {style: {alignItems: 'baseline'}},
        label: {
            width: 'full',
            fontSize: "12px"
        },
        control: {
            marginTop: '2px',
            borderColor: 'darkGray',
            _checked: {
                backgroundColor: 'fullBlack',
                borderColor: 'fullBlack',
                _disabled: {
                    backgroundColor: 'gray',
                    borderColor: 'gray',
                }
            },
            _disabled: {
                borderColor: 'gray',
            }
        }
    }
}
