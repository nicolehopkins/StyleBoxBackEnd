const {db} = require('./dbConnect');
const customerService = {};

customerService.create = (id, email, password, token) => {
    const sql = `
    INSERT INTO customers (id, email, password, token) 
    VALUES ($[id], $[email], $[password], $[token])`;
    return db.any(sql, {id, email, password, token});
}

customerService.read = (id) => {
    const sql = `
    SELECT customers.*, customers.id AS customer_id 
    FROM customers
    JOIN orders 
        ON customers.id = orders.customer_id
    WHERE customers.id = $[id]`;
    return db.one(sql, {id});
}

customerService.update = (id, email, password, token) => {
    const sql = `
    UPDATE customers
    SET
        email=$[email],
        password=$[password],
        token=$[token]
    WHERE
        id=$[id]`;
    return db.one(sql, {id, email, password, token});
}

customerService.delete = (id) => {
    const sql = `
    DELETE from customers WHERE id=$[id]`;
    return db.none(sql, {id});
}

module.exports = customerService;