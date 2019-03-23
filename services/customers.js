const {db} = require('./dbConnect');
const customerService = {};

customerService.create = (id, email, password, token, shippingAddress, billingAddress, creditCardInfo) => {
    const sql = `
    INSERT INTO customers (id, email, password, token, shippingAddress, billingAddress, creditCardInfo) 
    VALUES ($[id], $[email], $[password], $[token], $[shippingAddress, $[billingAddress], $[creditCardInfo])`;
    return db.one(sql, {id, email, password, token, shippingAddress, billingAddress, creditCardInfo});
}

customerService.read = (id) => {
    const sql = `
    SELECT customers.*, customers.id AS customer_id 
    FROM customers
    JOIN orders, payments 
        ON customers.id = orders.customer_id,
        customers.id = payments.customer_id
    WHERE customers.id = $[id]`;
    return db.one(sql, {id});
}

customerService.update = (id, email, password, token, shippingAddress, billingAddress, creditCardInfo) => {
    const sql = `
    UPDATE customers
    SET
        email=$[email],
        password=$[password],
        token=$[token],
        shippingAddress=$[shippingAddress],
        billingAddress=$[billingAddress],
        creditCardInfo=$[creditCardInfo]
    WHERE
        id=$[id]`;
    return db.one(sql, {id, email, password, token, shippingAddress, billingAddress, creditCardInfo});
}

customerService.delete = (id) => {
    const sql = `
    DELETE from customers WHERE id=$[id]`;
    return db.none(sql, {id});
}

module.exports = customerService;