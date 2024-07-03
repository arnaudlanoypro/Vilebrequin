export default {
    baseStyle: {
        borderRadius: 'none',
        zIndex: "1111",
    },
    variants: {
        basic: {
            fontSize: '2xl',
            bg: 'fullBlack',
            color: 'white',
            _hover: {
                backgroundColor: 'darkGray',
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
