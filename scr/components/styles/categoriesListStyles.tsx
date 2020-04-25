import { StyleSheet } from 'react-native'

const categoryListStyles = StyleSheet.create({

    card: {
        flex: 1,
        color: '#FFFFFF',
        justifyContent: "space-evenly",
        padding: 8,
        borderRadius: 0,
        margin: 4,
        width: '47%',
        alignItems: "center",
        elevation: 0.5
    },
    cardImage: { height: 48, width: 64 },
    cardTitle: {
        textAlign: 'center',
    }
})


export default categoryListStyles;