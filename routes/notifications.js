import express from 'express';
import initKnex from 'knex';
import configuration from '../knexfile.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();
const knex = initKnex(configuration);

// Route to get notifications (only for admin)
router.get('/', verifyToken, async (req, res) => {
  try {
    const notifications = await knex('notifications')
      .join('inventory', 'notifications.item_id', 'inventory.id')
      .select(
        'notifications.id',
        'notifications.created_at',
        'inventory.item_name',
        'inventory.image'
      )
      .orderBy('notifications.created_at', 'desc');
    res.json(notifications);
  } catch (error) {
    console.error('Error fetching notifications:', error);
    res.status(500).send('Server error');
  }
});

// Route to report an item
router.post('/report', verifyToken, async (req, res) => {
  const { item_id } = req.body;
  if (!item_id) {
    return res.status(400).send('Item ID is required');
  }

  try {
    const item = await knex('inventory').where({ id: item_id }).first();
    if (!item) {
      return res.status(404).send('Item not found');
    }

    await knex('notifications').insert({
      item_id,
      created_at: new Date(),
    });

    res.status(201).send('Report has been sent!');
  } catch (error) {
    console.error('Error reporting item:', error);
    res.status(500).send('Server error');
  }
});

export default router;
