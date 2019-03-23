const {db} = require('./dbConnect');
const productService = {};

productService.create = (id, customer_id, product_id, dateproducted, dateShipped) => {
    const sql = `
    INSERT INTO products (id, customer_id, product_id, dateproducted, dateShipped) 
    VALUES ($[id], $[customer_id], $[product_id], $[dateproducted], $[dateShipped])`;
    return db.one(sql, {id, customer_id, product_id, dateproducted, dateShipped});
}

productService.read = (id) => {
    const sql = `
    SELECT products.*, products.id AS product_id 
    FROM products
    JOIN products 
        ON products.id = products.product_id
    WHERE products.id = $[id]`;
    return db.one(sql, {id});
}

productService.update = (id, email, password, token) => {
    const sql = `
    UPDATE products
    SET
        email=$[email],
        password=$[password],
        token=$[token]
    WHERE
        id=$[id]`;
    return db.one(sql, {id, email, password, token});
}

productService.delete = (id) => {
    const sql = `
    DELETE from products WHERE id=$[id]`;
    return db.none(sql, {id});
}

module.exports = productService;