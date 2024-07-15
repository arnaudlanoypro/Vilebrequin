export default {
    baseStyle: {
        container: {style: {alignItems: 'baseline'}},
        label: {
            width: 'full',
            fontSize: '12px',
            lineHeight: '16.8px',
            letterSpacing: '0.01em'
        },
        control: {
            borderWidth: '1px',
            borderRadius: '0',
            borderColor: 'darkGray',
            width: '12px',
            height: '12px',
            _checked: {
                backgroundColor: 'fullBlack',
                borderColor: 'fullBlack',
                _disabled: {
                    backgroundColor: 'gray',
                    borderColor: 'gray'
                }
            },
            _disabled: {
                borderColor: 'gray'
            }
        }
    }
}
