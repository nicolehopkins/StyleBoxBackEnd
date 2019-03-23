const {db} = require('./dbConnect');
const paymentService = {};

paymentService.create = (id, date, customer_id, order_id, isPaid) => {
    const sql = `
    INSERT INTO payments (id, date, customer_id, order_id, isPaid) 
    VALUES ($[id], $[date], $[customer_id], $[product_id], $[isPaid])`;
    return db.one(sql, {id, date, customer_id, order_id, isPaid});
}

paymentService.read = (id) => {
    const sql = `
    SELECT payments.*
    FROM payments
    WHERE payments.id = $[id]`;
    return db.one(sql, {id});
}

paymentService.update = (id, date, customer_id, order_id, isPaid) => {
    const sql = `
    UPDATE payments
    SET
        date=$[date],
        customer_id=$[customer_id],
        order_id=$[order_id],
        isPaid=$[isPaid]
    WHERE
        id=$[id]`;
    return db.one(sql, {id, date, customer_id, order_id, isPaid});
}

paymentService.delete = (id) => {
    const sql = `
    DELETE from payments WHERE id=$[id]`;
    return db.none(sql, {id});
}

module.exports = paymentService;