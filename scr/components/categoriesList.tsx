
import React from 'react';
import { FlatList, TouchableOpacity, Image, Text, GestureResponderEvent } from "react-native"
import { item } from "../model/item";
import categoryListStyles from "./styles/categoriesListStyles";

interface CategoriesListProps {
    data: Array<item>,
    onPress: (item: item) => (event: GestureResponderEvent) => void
}

const CategoriesList: React.FC<CategoriesListProps> = ({data, onPress}) => {
        return <FlatList
            style={{flexGrow: 1}}
            contentContainerStyle={{ paddingVertical: 16}}
            showsVerticalScrollIndicator={false}
            data={data}
            keyExtractor={item => item.id}
            numColumns={2}
            renderItem={({ item }) => {
                return (    
                    <TouchableOpacity
                        style={categoryListStyles.card}
                        onPress={onPress(item)}
                    >
                            <Image
                                style={categoryListStyles.cardImage}
                                source={{ uri: item.image }}
                            ></Image>
                            <Text style={categoryListStyles.cardTitle}>{item.title}</Text>
                    </TouchableOpacity>
                )
            }}
        />
}

export default CategoriesList