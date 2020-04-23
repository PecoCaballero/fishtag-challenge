import { StyleSheet } from 'react-native'


const homePageStyles = StyleSheet.create(
    {
        container: {
            padding: 16
        },
        pageTitleContainer: {
            paddingVertical: 32,
            alignItems: 'center',
            justifyContent: 'center',
        },
        pageTitle: {
            color: '#6730EC',
            fontSize: 64,
        },
        pageSubtitle: {
            fontSize: 24,
        },
        pagePurpleSubtitle: {
            color: '#6730EC',
            fontSize: 24,
        },
        card: {
            padding: 8,
            borderRadius: 4,
            margin: 4,
            width: '47%',
            alignItems: "center",
            elevation: 2
        }
    }
)

export default homePageStyles