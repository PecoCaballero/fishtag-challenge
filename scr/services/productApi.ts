import api from "./config";




class ProductApi {

    static async getProducts() {
        return await api.get('products.json')
            .then((result) =>
                result.data.products
            )
            .catch((err) => {
                throw err;
            })
    }


}

export default ProductApi;