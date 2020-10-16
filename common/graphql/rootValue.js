const models = require('../../model');
/*
graphi
GraphQL 예제 소스
데이터 읽기
{
	getProduct( id : 1 ) {
	    id
        price
        name
	}
}
작성하기 postman
POST Content-Type application/json
{
    "query": "mutation addProduct($input: ProductInput) { addProduct(input: $input) { id } }",
    "variables": { "input" : { "name" : "세번째상품" , "price" : 3000 , "description" : "후후후" } }
}
수정하기 postman
POST Content-Type application/json
{
    "query": "mutation updateProduct( $id : ID! , $input: ProductInput! ) { updateProduct( id : $id  , input: $input) { id } }",
    "variables": { "id" : 1 ,"input" : { "name" : "수정상품" , "price" : 1000 , "description" : "후후후" } }
}
삭제하기
POST Content-Type application/json
{
    "query": "mutation deleteProduct( $id : ID! ) { deleteProduct( id : $id  )  }",
    "variables": { "id" : 1  }
}

postman 등 api 요청

http://localhost:8001/graphql?query={hello}

 */
module.exports = {
    hello: () => 'hello graphql',
    nodejs: () => 30,
    getProduct: async ({ id }) => await models.Products.findByPk(parseInt(id)),
    addProduct: async ({ input }) => {
        return await models.Products.create(input);
    },
    updateProduct: async ({ id, input }) => {
        return await models.Products.update(
            input,
            {
                where: { id: parseInt(id) }
            }
        );
    },
    deleteProduct: async ({ id }) => {
        await models.Products.destroy({
            where: {
                id: parseInt(id)
            }
        });
        return "remove success";
    }
};
