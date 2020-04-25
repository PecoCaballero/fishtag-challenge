import { StyleSheet } from 'react-native'


const homePageStyles = StyleSheet.create(
    {
        container: {
            flex: 1,
            paddingHorizontal: 16,
            backgroundColor: '#FFFFFF'
        },
        pageTitleContainer: {
            paddingTop: 32,
            alignItems: 'center',
            justifyContent: 'center',
        },
        pageTitle: {
            color: '#6730EC',
            fontSize: 64,
        },
        pageSubtitle: {
            fontSize: 16,
        },
        pagePurpleSubtitle: {
            color: '#6730EC',
            fontSize: 24,
        },
    }
)

export default homePageStyles