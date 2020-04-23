import React, { Component } from 'react';
import { FlatList, Text, View, Image } from 'react-native';
import homePageStyles from './styles/styles';
import { Card } from 'react-native-elements'

class HomePage extends Component {

    state = {
        data: [
            { id: "00", name: "Peixe" },
            { id: "01", name: "Camarão" },
            { id: "02", name: "Doc Hudson" },
            { id: "03", name: "Lula" },
            { id: "04", name: "Peixe" },
            { id: "05", name: "Camarão" },
            { id: "06", name: "Doc" },
            { id: "07", name: "Lula" },
            { id: "08", name: "Peixe" },
            { id: "09", name: "Camarão" },
            { id: "10", name: "Doc Hudson" },
            { id: "11", name: "Lula" },
            { id: "12", name: "Peixe" },
            { id: "13", name: "Camarão" },
            { id: "14", name: "Doc Hudson" },
            { id: "15", name: "Lula" },
        ]
    };

    render() {
        return <View style={homePageStyles.container}>
            <View style={homePageStyles.pageTitleContainer}>
                <Text style={homePageStyles.pageTitle}>Fishtag</Text>
            </View>
            <Text style={homePageStyles.pagePurpleSubtitle}>Escolha o melhor,</Text>
            <Text style={homePageStyles.pageSubtitle}>a gente cuida de tudo</Text>
            <View style={{ height: 300, marginVertical: 16 }}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={this.state.data}
                    keyExtractor={item => item.id}
                    numColumns={2}
                    renderItem={({ item }) => {
                        return (
                            <View style={homePageStyles.card}>
                                <Image
                                    style={{height: 48, width: 64}}
                                    source={require('../../assets/ATUM_medium.jpg')}
                                ></Image>
                                <Text>{item.name}</Text>
                            </View>
                        )
                    }}
                />
            </View>
        </View>
    }

}

export default HomePage;