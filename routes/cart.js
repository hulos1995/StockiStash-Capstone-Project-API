import express from 'express';
import knex from '../db/knex.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();
// Add an item to the cart or update its quantity if it already exists
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
    res.status(500).send('Internal server error');
  }
});

// Get all items in the user's cart
router.get('/', verifyToken, async (req, res) => {
  const user_id = req.user.id;
  try {
    const cartItems = await knex('cart')
      .join('inventory', 'cart.inventory_id', 'inventory.id')
      .select('cart.id', 'cart.inventory_id', 'inventory.item_name', 'cart.quantity', 'inventory.description', 'inventory.image', 'inventory.status', 'inventory.link')
      .where('cart.user_id', user_id);
    res.status(200).json(cartItems);
  } catch (error) {
    console.error('Error fetching cart items:', error);
    res.status(500).send('Internal server error');
  }
});

// Increment the quantity of an item in the cart
router.put('/increment', verifyToken, async (req, res) => {
  const { inventory_id } = req.body;
  const user_id = req.user.id;
  try {
    await knex('cart').where({ user_id, inventory_id }).increment('quantity', 1);
    res.status(200).send('Item quantity added');
  } catch (error) {
    console.error('Error adding item quantity:', error);
    res.status(500).send('Internal server error');
  }
});

// Decrement the quantity of an item in the cart
router.put('/decrement', verifyToken, async (req, res) => {
  const { inventory_id } = req.body;
  const user_id = req.user.id;
  try {
    await knex('cart').where({ user_id, inventory_id }).decrement('quantity', 1);
    res.status(200).send('Item quantity decreased');
  } catch (error) {
    console.error('Error decresing item quantity:', error);
    res.status(500).send('Internal server error');
  }
});

// Remove an item from the cart
router.delete('/:inventory_id', verifyToken, async (req, res) => {
  const { inventory_id } = req.params;
  const user_id = req.user.id;
  try {
    await knex('cart').where({ user_id, inventory_id }).del();
    res.status(200).send('Item removed from cart');
  } catch (error) {
    console.error('Error removing item from cart:', error);
    res.status(500).send('Internal server error');
  }
});

export default router;
