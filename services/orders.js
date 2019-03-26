const {db} = require('./dbConnect');
const orderService = {};

orderService.create = (id, customer_id, product_id, amount, dateOrdered, dateShipped) => {
    const sql = `
    INSERT INTO orders (id, customer_id, product_id, amount, dateOrdered, dateShipped) 
    VALUES ($[id], $[customer_id], $[product_id], $[amount], $[dateOrdered], $[dateShipped])`;
    return db.one(sql, {id, customer_id, product_id, amount, dateOrdered, dateShipped});
}

orderService.read = (id) => {
    const sql = `
    SELECT *
    FROM orders
    WHERE id = $[id]`;
    return db.one(sql, {id});
}

orderService.update = (id, customer_id, product_id, amount, dateOrdered, dateShipped) => {
    const sql = `
    UPDATE orders
    SET
        customer_id=$[customer_id],
        product_id=$[product_id],
        amount=$[amount],
        dateOrdered=$[dateOrdered],
        dateShipped=$[dateShipped]
    WHERE
        id=$[id]`;
    return db.one(sql, {id, customer_id, product_id, amount, dateOrdered, dateShipped});
}

orderService.delete = (id) => {
    const sql = `
    DELETE from orders WHERE id=$[id]`;
    return db.none(sql, {id});
}

module.exports = orderService;