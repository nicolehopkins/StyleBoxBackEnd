const {db} = require('./dbConnect');
const paymentService = {};

paymentService.create = (id, customer_id, product_id, datepaymented, dateShipped) => {
    const sql = `
    INSERT INTO payments (id, customer_id, product_id, datepaymented, dateShipped) 
    VALUES ($[id], $[customer_id], $[product_id], $[datepaymented], $[dateShipped])`;
    return db.one(sql, {id, customer_id, product_id, datepaymented, dateShipped});
}

paymentService.read = (id) => {
    const sql = `
    SELECT payments.*, payments.id AS payment_id 
    FROM payments
    JOIN payments 
        ON payments.id = payments.payment_id
    WHERE payments.id = $[id]`;
    return db.one(sql, {id});
}

paymentService.update = (id, email, password, token) => {
    const sql = `
    UPDATE payments
    SET
        email=$[email],
        password=$[password],
        token=$[token]
    WHERE
        id=$[id]`;
    return db.one(sql, {id, email, password, token});
}

paymentService.delete = (id) => {
    const sql = `
    DELETE from payments WHERE id=$[id]`;
    return db.none(sql, {id});
}

module.exports = paymentService;