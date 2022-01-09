// const axios = require('axios');
const {
  Op,
} = require('sequelize');
const {
  Order,
  Dish,
  Order_Dish,
  Order_Status,
  User,
  Category,
} = require('../db/models');

const order = {
  user_id: 1,
  dishes: [{
    // order_id: 4,
    dish_id: 10,
    quantity: 2,
  }, {
    // order_id: 4,
    dish_id: 12,
    quantity: 1,
  }],
};

const newOrder = async (req, res) => {
  // console.log(req.body, 'body======');

  const {
    totalCart,
    totalSum,
    user,
  } = req.body;

  try {
    const createOrder = await Order.create({
      user_id: user.id,
      totalSum,
      currentStatus: 'awaitOrder',
    });

    await Order_Status.create({
      order_id: createOrder.id,
      status: 'awaitOrder',
    });

    totalCart.forEach(async (dish) => {
      await Order_Dish.create({
        order_id: createOrder.id,
        dish_id: dish.id,
        quantity: dish.quantity,

      });
    });

    res.status(200).json({
      success: true,
    });
  } catch (error) {
    res.status(404).json({
      error: 'error',
    });
    console.log(error);
  }
};

// Вынимаем из базы массив заказов для отрисовки у администратора и повара
// При этом нам ещё понадобятся имя, номер комнаты и телефон клиента
// Также понадобятся блюда и категории.
const getOrders = async (req, res) => {
  try {
    const pureOrders = await Order.findAll({
      include: [User,
        {
          model: Dish,
          include: [Category],
        },
      ],
      raw: true,
    });

    const objOrders = {};
    pureOrders.forEach((obj) => {
      objOrders[obj.id] = [...pureOrders.filter((el) => el.id === obj.id)];
    });

    const orders = Object.entries(objOrders).map(([key, value]) => {
      const result = {};
      result.id = value[0].id;
      result.totalSum = value[0].totalSum;
      result.currentStatus = value[0].currentStatus;
      result.userName = value[0]['User.name'];
      result.room = value[0]['User.room'];
      result.phone = value[0]['User.phone'];
      result.dishes = [];
      value.forEach((item) => {
        const dish = {};
        dish.id = item['Dishes.id'];
        dish.name = item['Dishes.name'];
        dish.picture = item['Dishes.picture'];
        dish.price = item['Dishes.price'];
        dish.quantity = item['Dishes.Order_Dish.quantity'];
        dish.time = item['Dishes.time'];
        dish.description = item['Dishes.description'];
        dish.ingredients = item['Dishes.ingredients'];
        dish.categoryId = item['Dishes.Category.id'];
        dish.category = item['Dishes.Category.name'];
        dish.categoryPicture = item['Dishes.Category.picture'];
        dish.createdAt = item['Dishes.Order_Dish.createdAt'];
        dish.updatedAt = item['Dishes.Order_Dish.updatedAt'];
        result.dishes.push(dish);
      });
      return result;
    });

    res.status(200).json({
      orders,
    });
  } catch (error) {
    res.status(404).json({
      error: 'error',
    });
  }
};

const changeStatusOrder = async (req, res) => {
  const {
    id,
    currentStatus,
  } = req.body;
  try {
    const orderUpdate = await Order.update({
      currentStatus,
    }, {
      where: {
        id,
      },
    });

    await Order_Status.create({
      order_id: id,
      status: currentStatus,
    });
    res.status(200).json({
      order: orderUpdate,
    });
  } catch (error) {
    res.status(404).json({
      error: 'error',
    });
  }
};

const deleteDish = async (req, res) => {
  try {
    const obj = req.body;
    const order = await Order_Dish.destroy({
      where: {
        [Op.and]: [
          { order_id: obj.orderId },
          { dish_id: obj.dishId },
          { createdAt: obj.dishCreatedAt },
          { updatedAt: obj.dishUpdateAt },
        ],
      },
    });
    res.status(200).json({ order });
  } catch (error) {
    res.status(404).json({
      error: 'error',
    });
  }
};

module.exports = {
  newOrder,
  getOrders,
  changeStatusOrder,
  deleteDish,
};
