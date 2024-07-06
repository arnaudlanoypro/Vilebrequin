import theme from '@salesforce/retail-react-app/app/components/shared/theme'

export default {
    baseStyle: {
        container: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'white',
            minWidth: '320px'
        },
        headerWrapper: {
            position: 'sticky',
            top: 0,
            zIndex: theme.zIndices.sticky
        }
    },
    parts: ['container']
}
