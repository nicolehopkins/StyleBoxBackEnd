const {db} = require('./dbConnect');
const customerService = {};

customerService.create = (email, password, token, shipping_address=null, billing_address=null, credit_card_number=null) => {
    const sql = `
    INSERT INTO customers (email, password, token, shipping_address, billing_address, credit_card_number) 
    VALUES ($[email], $[password], $[token], $[shipping_address, $[billing_address], $[credit_card_number])
    RETURNING id`;
    return db.one(sql, {email, password, token, shipping_address, billing_address, credit_card_number});
}

customerService.read = (id) => {
    const sql = `
    SELECT * 
    FROM customers
    WHERE id = $[id]`;
    return db.one(sql, {id});
}

customerService.update = (id, email, password, token, shipping_address, billing_address, credit_card_number) => {
    const sql = `
    UPDATE customers
    SET
        email=$[email],
        password=$[password],
        token=$[token],
        shipping_address=$[shipping_address],
        billing_address=$[billing_address],
        credit_card_number=$[credit_card_number]
    WHERE
        id=$[id]`;
    return db.one(sql, {id, email, password, token, shipping_address, billing_address, credit_card_number});
}

customerService.delete = (id) => {
    const sql = `
    DELETE from customers WHERE id=$[id]`;
    return db.none(sql, {id});
}

module.exports = customerService;