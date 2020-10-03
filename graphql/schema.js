const { buildSchema } = require('graphql');

module.exports = buildSchema(`
    input ProductInput {
        name: String
        price: Int
        description : String
    }
    type Product {
        id: ID!
        name: String
        price: Int
        description : String
    }
    type Query {
        hello: String,
        nodejs: Int,
        getProduct ( id: ID! ): Product,
    }
    type Mutation {
        addProduct(input: ProductInput): Product
        updateProduct( id: ID! , input: ProductInput! ): Product
        deleteProduct( id: ID! ) : String
    }
`);
