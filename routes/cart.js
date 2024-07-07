import express from 'express';
import knex from '../db/knex.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();
router.post('/', verifyToken, async (req, res) => {
  const { inventory_id, quantity } = req.body;
  const user_id = req.user.id;
  try {
    const existingItem = await knex('cart').where({ user_id, inventory_id }).first();
    if (existingItem) {
      await knex('cart')
        .where({ user_id, inventory_id })
        .update({
          quantity: existingItem.quantity + quantity,
          updated_at: knex.fn.now(),
        });
    } else {
      await knex('cart').insert({
        user_id,
        inventory_id,
        quantity,
      });
    }
    res.status(200).send('Item added to cart');
  } catch (error) {
    console.error('Error adding item to cart:', error);
    res.status(500).send('Server error');
  }
});

router.get('/', verifyToken, async (req, res) => {
  const user_id = req.user.id;
  try {
    const cartItems = await knex('cart')
      .join('inventory', 'cart.inventory_id', 'inventory.id')
      .select('cart.id', 'inventory.item_name', 'cart.quantity', 'inventory.description', 'inventory.image', 'inventory.status', 'inventory.link')
      .where('cart.user_id', user_id);
    res.status(200).json(cartItems);
  } catch (error) {
    console.error('Error fetching cart items:', error);
    res.status(500).send('Server error');
  }
});

export default router;
