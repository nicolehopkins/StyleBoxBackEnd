const {db} = require('./dbConnect');
const productService = {};

productService.create = (name, description, price, stock, image) => {
    const sql = `
    INSERT INTO products (name, description, price, stock, image) 
    VALUES ($[name], $[description], $[price], $[stock], $[image])
    RETURNING id`;
    return db.one(sql, {name, description, price, stock, image});
}

productService.read = (id) => {
    const sql = `
    SELECT * 
    FROM products
    WHERE id = $[id]`;
    return db.one(sql, {id});
}

productService.update = (id, name, description, price, stock, image) => {
    const sql = `
    UPDATE products
    SET
        email=$[email],
        password=$[password],
        token=$[token],
        description=$[description],
        price=$[price],
        stock=$[stock],
        image=$[image]
    WHERE
        id=$[id]`;
    return db.one(sql, {id, name, description, price, stock, image});
}

productService.delete = (id) => {
    const sql = `
    DELETE from products WHERE id=$[id]`;
    return db.none(sql, {id});
}

module.exports = productService;