import { StyleSheet } from 'react-native'

const productsListStyles = StyleSheet.create({

    card: {
        flex: 1,
        color: '#FFFFFF',
        justifyContent: "space-evenly",
        padding: 8,
        marginVertical: 8,
        width: '100%',
        borderRadius: 0,
        alignItems: "center",
        elevation: 0.5
    },
    cardImage: { height: 48, width: 64 },
    cardTitle: {
        textAlign: 'center',
    }
})


export default productsListStyles;