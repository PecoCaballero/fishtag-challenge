import api from "./config";
import { Collection } from "../model/collection";
import { Product } from "../model/product";

class CollectionApi {

    static async getCollections() {
        return await api.get('smart_collections.json')
            .then((result) => {
                var collections: Collection[] = []
                result.data.smart_collections.forEach((collection: any) => {
                    if (collection.image) {
                        collections.push({
                            "id": collection.id,
                            "title": collection.title,
                            "image": collection.image?.src
                        })
                    }
                });

                return collections
            })
            .catch((err) => { throw err; })
    }

    static async getCollectionById(id: string) {
        return await api.get(`collections/${id}.json`)
            .then((result) => result.data)
            .catch((err) => { throw err; })
    }

    static async getProductsByCollectionId(id: string) {
        return await api.get(`collections/${id}/products.json`)
            .then((result) => {
                var products: Array<Product> = []
                var numberRegex = RegExp(/\d\/\d/)
                var fInParenthesisRegex = RegExp(/\(.*F.*\)/)
                var tripleFRegex = RegExp(/FFF/)
                result.data.products.forEach((product: any) => {
                    if (product.image &&
                        (!numberRegex.test(product.title) && !fInParenthesisRegex.test(product.title) &&
                            !tripleFRegex.test(product.title))) {
                        products.push({
                            "id": product.id,
                            "title": product.title,
                            "image": product.image?.src
                        })
                    }
                });

                return products
            }
            )
            .catch((err) => {
                throw err;
            })
    }

}

export default CollectionApi;