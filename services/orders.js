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
    JOIN payments 
        ON orders.id = payments.order_id
    WHERE orders.id = $[id]`;
    return db.one(sql, {id});
}

orderService.update = (id, customer_id, product_id, dateOrdered, dateShipped) => {
    const sql = `
    UPDATE orders
    SET
        customer_id=$[customer_id],
        product_id=$[product_id],
        dateOrdered=$[dateOrdered],
        dateShipped=$[dateShipped]
    WHERE
        id=$[id]`;
    return db.one(sql, {id, customer_id, product_id, dateOrdered, dateShipped});
}

orderService.delete = (id) => {
    const sql = `
    DELETE from orders WHERE id=$[id]`;
    return db.none(sql, {id});
}

module.exports = orderService;