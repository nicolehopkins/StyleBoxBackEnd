const {db} = require('./dbConnect');
const orderService = {};

orderService.create = (customer_id, product_id, amount, date_ordered, date_shipped=null) => {
    const sql = `
    INSERT INTO orders (customer_id, product_id, amount, date_ordered, date_shipped) 
    VALUES ($[customer_id], $[product_id], $[amount], $[date_ordered], $[date_shipped])
    RETURNING id`;
    return db.one(sql, {customer_id, product_id, amount, date_ordered, date_shipped});
}

orderService.read = (id) => {
    const sql = `
    SELECT *
    FROM orders
    WHERE id = $[id]`;
    return db.one(sql, {id});
}

orderService.update = (customer_id, product_id, amount, date_ordered, date_shipped=null) => {
    const sql = `
    UPDATE orders
    SET
        customer_id=$[customer_id],
        product_id=$[product_id],
        amount=$[amount],
        date_ordered=$[date_ordered],
        date_shipped=$[date_shipped]
    WHERE
        id=$[id]`;
    return db.one(sql, {id, customer_id, product_id, amount, date_ordered, date_shipped});
}

orderService.delete = (id) => {
    const sql = `
    DELETE from orders WHERE id=$[id]`;
    return db.none(sql, {id});
}

module.exports = orderService;