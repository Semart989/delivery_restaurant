const { Order, Dish } = require('../db/models');

const myOrders = async (req, res) => {
  // const user = {
  //   id: 3,
  // };

  const { user } = req.session;

  try {
    const array = await Dish.findAll({
      include: { model: Order, where: { user_id: user.id } }, raw: true,
    });

    const objOrders = {};

    array.forEach((obj) => {
      objOrders[obj['Orders.id']] = [...array.filter((el) => el['Orders.id'] === obj['Orders.id'])];
    });

    res.status(200).json({ objOrders, success: true });
  } catch (error) {
    res.status(404).json({ error: 'error' });
    console.log(error);
  }
};

module.exports = { myOrders };
