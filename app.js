import express from 'express';

import { PORT } from './config/env.js';

import userRouter from './Routes/user.routes.js';
import authRouter from './Routes/auth.routes.js';
import subscriptionRouter from './Routes/subscription.routes.js';
import connectToDatabase from './database/mongodb.js';

const app = express();

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/subscriptions', subscriptionRouter);

app.get('/', (req, res) => {
    res.send('Welcome to API');
})

app.listen(PORT, async ()=>{
    console.log(`Server running on ${PORT}`);

    await connectToDatabase();
})

export default app;