export default {
    baseStyle: {
        borderRadius: 'base'
    },
    variants: {
        ghost: {
            fontSize: '2xl',
            bg: 'orange',
            color: 'white',
            _hover: {
                backgroundColor: 'fullBlack',
                color: 'white',
            },
            _active: {
                bg: 'fullBlack'
            },
            paddingLeft: 30,
            paddingRight: 30
        },
    },
    sizes: {
        md: {
            height: 11,
            minWidth: 11
        }
    }
};
