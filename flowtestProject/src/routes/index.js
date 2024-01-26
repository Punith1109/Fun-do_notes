import express from 'express';
const router = express.Router();

import userRoute from './user.route';
/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = () => {
  router.get('/getmsg', (req, res) => {
    res.json('Welcome');
  });
  router.use('/users', userRoute);

  return router;
};

export default routes;
