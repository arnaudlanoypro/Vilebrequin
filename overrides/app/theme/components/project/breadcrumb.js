export default {
    baseStyle: {
        container: {
            minHeight: 4,
            fontSize: 'sm'
        },
        separator: {
            color: "darkGray",
        },
        link: {
            paddingTop: 3,
            paddingBottom: 3,
            color: "darkGray",
            fontSize: "md",
            _focus: {
                outline: '3px solid #4794F7',
                outlineOffset: '0'
            },
        },
        lastitem: {
            color: "fullBlack"
        }
    },
    parts: ['container', 'separator', 'link', 'lastitem']
}
