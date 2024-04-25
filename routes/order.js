const Order = require("../models/Order");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");
const router = require("express").Router();

// Create Order
router.post("/", verifyToken, async (req, res) => {
    const newOrder = new Order(req.body);
    try {
        const order = await newOrder.save();
        res.status(201).json("Order created successfull!");
    } catch (error) {
        res.status(500).json(error);
    }
});

// Update Order
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true });
        res.status(200).json("Order updated successfull!");
    } catch (error) {
        res.status(500).json(error);
    }
});

// Delete Order
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id);
        res.status(200).json("Order deleted successfull!");
    } catch (error) {
        res.status(500).json(error);
    }
});

// Get User Order
router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const order = await Order.find({ userId: req.params.userId });
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json(error);
    }
});

// Get All Order
router.get("/", verifyTokenAndAdmin, async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json(error);
    }
});

// Get Order Monthly Income
router.get("/income", async (req, res) => {
    productId = req.query.pid;
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
    try {
        const income = await Order.aggregate([
            { $match: { 
                createdAt: { 
                    $gte: previousMonth 
                    },
                    ...(productId && {
                        products: {
                            $elemMatch: {
                                productId
                            }
                        }
                    })
                } 
            },
            {
                $project: {
                    month: { $month: "$createdAt" },
                    sales: "$amount",
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: "$sales" },
                },
            },
        ]);
        res.status(200).json(income);
    } catch (error) {
        res.status(500).json(error);
    }
});



module.exports = router;