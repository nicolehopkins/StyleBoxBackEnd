const {db} = require('./dbConnect');
const productService = {};

productService.create = (id, name, description, price, stock) => {
    const sql = `
    INSERT INTO products (id, name, description, price, stock) 
    VALUES ($[id], $[customer_id], $[product_id], $[description], $[price], $[stock])`;
    return db.one(sql, {id, name, description, price, stock});
}

productService.read = (id) => {
    const sql = `
    SELECT * 
    FROM products
    WHERE id = $[id]`;
    return db.one(sql, {id});
}

productService.update = (id, name, description, price, stock) => {
    const sql = `
    UPDATE products
    SET
        email=$[email],
        password=$[password],
        token=$[token],
        description=$[description],
        price=$[price],
        stock=$[stock]
    WHERE
        id=$[id]`;
    return db.one(sql, {id, name, description, price, stock});
}

productService.delete = (id) => {
    const sql = `
    DELETE from products WHERE id=$[id]`;
    return db.none(sql, {id});
}

module.exports = productService;