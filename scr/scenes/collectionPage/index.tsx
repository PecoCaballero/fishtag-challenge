import React, { Component } from 'react';
import { Dimensions, GestureResponderEvent, View, Text} from 'react-native';
import ProductsList from '../../components/productsList';
import { Product } from '../../model/product';
import CollectionApi from '../../services/collectionApi';
import collectionPageStyles from './styles/styles';

export interface CollectionPageProps {
    navigation: any
    route: any
}

const screen = Dimensions.get("screen");

class CollectionPage extends Component<CollectionPageProps> {

    state = {
        products: Array<Product>()
    }

    componentDidMount() {
        const { collectionName } = this.props.route.params
        this.props.navigation.setParams({ title: collectionName })
        this.getProducts()
    }

    async getProducts(){
        const { collectionId } = this.props.route.params
        const products = await CollectionApi.getProductsByCollectionId(collectionId)
        this.setState({
            products: products
        })
    }

    onPressProduct = (product: Product) => (event: GestureResponderEvent) => {
        // this.props.navigation.navigate(
        //     'product',
        //     {
        //         productName: product.title, collectionId: product.id
        //     }
        // )
        console.log(product)
    }

    productsListBuilder = () => {
        const { products } = this.state
        if (products.length == 0) {
            this.getProducts()
            return <Text>Loading...</Text>
        }
        else {
            return <ProductsList data={products} onPress={this.onPressProduct} />
        }
    }

    render() {

        return <View style={collectionPageStyles.container}>
            <View style={{height: screen.height, flex: 1}}>
            {this.productsListBuilder()}
            </View>
        </View>
    }
}

export default CollectionPage