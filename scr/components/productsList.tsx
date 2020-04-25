
import React from 'react';
import { FlatList, GestureResponderEvent, Image, Text, TouchableOpacity } from "react-native";
import { item } from "../model/item";
import productsListStyles from './styles/productsListStyles';

interface ProductsListProps {
    data: Array<item>,
    onPress: (item: item) => (event: GestureResponderEvent) => void
}

const ProductsList: React.FC<ProductsListProps> = ({ data, onPress }) => {
    return <FlatList
        style={{ flexGrow: 1 }}
        contentContainerStyle={{ paddingVertical: 16 }}
        showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={item => item.id}
        numColumns={1}
        renderItem={({ item }) => {
            return (
                <TouchableOpacity
                    style={productsListStyles.card}
                    onPress={onPress(item)}
                >
                    <Image
                        style={productsListStyles.cardImage}
                        source={{ uri: item.image }}
                    ></Image>
                    <Text style={productsListStyles.cardTitle}>{item.title}</Text>
                </TouchableOpacity>
            )
        }}
    />
}

export default ProductsList