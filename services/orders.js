const {db} = require('./dbConnect');
const orderService = {};

orderService.create = (id, customer_id, product_id, dateOrdered, dateShipped) => {
    const sql = `
    INSERT INTO orders (id, customer_id, product_id, dateOrdered, dateShipped) 
    VALUES ($[id], $[customer_id], $[product_id], $[dateOrdered], $[dateShipped])`;
    return db.one(sql, {id, customer_id, product_id, dateOrdered, dateShipped});
}

orderService.read = (id) => {
    const sql = `
    SELECT orders.*, orders.id AS order_id 
    FROM orders
    JOIN orders 
        ON orders.id = orders.order_id
    WHERE orders.id = $[id]`;
    return db.one(sql, {id});
}

orderService.update = (id, email, password, token) => {
    const sql = `
    UPDATE orders
    SET
        email=$[email],
        password=$[password],
        token=$[token]
    WHERE
        id=$[id]`;
    return db.one(sql, {id, email, password, token});
}

orderService.delete = (id) => {
    const sql = `
    DELETE from orders WHERE id=$[id]`;
    return db.none(sql, {id});
}

module.exports = orderService;