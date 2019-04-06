const {db} = require('./dbConnect');
const paymentService = {};

paymentService.create = (id, date, customer_id, order_id, paid) => {
    const sql = `
    INSERT INTO payments (id, date, customer_id, order_id, paid) 
    VALUES ($[id], $[date], $[customer_id], $[product_id], $[paid])`;
    return db.one(sql, {id, date, customer_id, order_id, paid});
}

paymentService.read = (id) => {
    const sql = `
    SELECT *
    FROM payments
    WHERE id = $[id]`;
    return db.one(sql, {id});
}

paymentService.update = (id, date, customer_id, order_id, paid) => {
    const sql = `
    UPDATE payments
    SET
        date=$[date],
        customer_id=$[customer_id],
        order_id=$[order_id],
        paid=$[paid]
    WHERE
        id=$[id]`;
    return db.one(sql, {id, date, customer_id, order_id, paid});
}

paymentService.delete = (id) => {
    const sql = `
    DELETE from payments WHERE id=$[id]`;
    return db.none(sql, {id});
}

module.exports = paymentService;