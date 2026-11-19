db.orders.insertMany([
  { orderId: 1, status: "delivered" },
  { orderId: 2, status: "pending" },
  { orderId: 3, status: "delivered" },
  { orderId: 4, status: "cancelled" },
  { orderId: 5, status: "delivered" }
]);


db.orders.aggregate([
    {
        $group: {
            _id: "$status",
            count: { $sum: 1 }
        }
    },
    {
        $sort: { count: -1 }
    }
]);
