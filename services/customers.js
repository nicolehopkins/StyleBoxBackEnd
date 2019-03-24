const {db} = require('./dbConnect');
const customerService = {};

customerService.create = (email, password, token, shippingAddress=null, billingAddress=null, creditCardInfo=null) => {
    const sql = `
    INSERT INTO customers (email, password, token, shippingAddress, billingAddress, creditCardInfo) 
    VALUES ($[email], $[password], $[token], $[shippingAddress, $[billingAddress], $[creditCardInfo])
    RETURNING id`;
    return db.one(sql, {email, password, token, shippingAddress, billingAddress, creditCardInfo});
}

customerService.read = (id) => {
    const sql = `
    SELECT customers.*, customers.id AS customer_id 
    FROM customers
        JOIN orders ON customers.id = orders.customer_id
        JOIN payments ON customers.id = payments.customer_id
    WHERE id = $[id]`;
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