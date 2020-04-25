import React, { Component } from 'react';
import { GestureResponderEvent, Text, View, Dimensions } from 'react-native';
import CategoriesList from '../../components/categoriesList';
import CollectionApi from '../../services/collectionApi';
import { Collection } from '../../model/collection';
import homePageStyles from './styles/styles';

interface HomePageProps {
    navigation: any
}

const screen = Dimensions.get('screen')

class HomePage extends Component<HomePageProps> {

    state = {
        collections: Array<Collection>(),
    };

    componentDidMount() {
        this.getCollections()
    }

    async getCollections() {
        const collections = await CollectionApi.getCollections()
        this.setState({ collections: collections })

    }

    onPressCategory = (item: Collection) => (event: GestureResponderEvent) => {
        this.props.navigation.navigate(
            'collection',
            {
                collectionName: item.title, collectionId: item.id
            }
        )
    }

    categoriesBuilder() {
        const { collections } = this.state
        if (collections.length == 0) {
            this.getCollections()
            return <Text>Loading...</Text>
        }
        else {
            return <CategoriesList data={collections} onPress={this.onPressCategory} />
        }
    }

    render() {
        return <View style={homePageStyles.container}>
            <View style={homePageStyles.pageTitleContainer}>
                <Text style={homePageStyles.pageTitle}>Fishtag</Text>
            </View>
            <Text style={homePageStyles.pagePurpleSubtitle}>Escolha o melhor,</Text>
            <Text style={homePageStyles.pageSubtitle}>a gente cuida de tudo</Text>
            <View style={{ height: screen.height, flex: 1, marginTop: 8}}>
                {this.categoriesBuilder()}
            </View>
        </View>
    }

}

export default HomePage;