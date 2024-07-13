import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import inventory from './routes/inventory.js';
import login from './routes/login.js';
import signup from './routes/signup.js';
import profile from './routes/profile.js';
import cart from './routes/cart.js';
import notifications from './routes/notifications.js'; 
const app = express();
const { CORS_URL } = process.env;
app.use(express.json());
app.use(cors({ origin: CORS_URL }));
const PORT = process.env.PORT || 5173;
app.use(express.static('public'));
app.get("/", (_req, res) => {
  res.send("Welcome to my API");
});

app.use('/inventory', inventory);
app.use('/login', login);
app.use('/signup', signup);
app.use('/profile', profile);
app.use('/cart', cart);
app.use('/notifications', notifications);
app.listen(PORT, function () {
  console.log(`App is listening on port ${PORT}`);
});
