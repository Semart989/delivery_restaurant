const { Order, Dish, Order_Dish } = require('../db/models');

const myOrders = async (req, res) => {
  const user = {
    id: 3,
  };

  // const {user} = req.body

  try {
    const arrayOrders = await Dish.findAll({
      include: { model: Order, where: { user_id: user.id } }, raw: true,
    });

    res.status(200).json({ arrayOrders, success: true });
  } catch (error) {
    res.status(404).json({ error: 'error' });
    console.log(error);
  }
};

module.exports = { myOrders };
