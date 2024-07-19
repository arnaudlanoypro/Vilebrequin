export default {
    baseStyle: {
        select: {
            minWidth: '123px',
            flex: 1,
            mr: '-1px',
            _focus: {
                zIndex: 1,
                borderColor: 'fullBlack'
            },
            _invalid: {
                borderColor: 'red',
                _focus: {
                    borderColor: 'red'
                }
            }
        }
    },
    parts: ['select']
}
