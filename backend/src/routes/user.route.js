const express = require('express');
const router = express.Router();
const { creatUser, getUser,updateUser,deleteUser,getTotlalUsers } = require('../controller/user.controller.js');

router.post('/create-user', creatUser);
router.get('/get-users', getUser);
router.put('/update-user/:id', updateUser);
router.delete('/delete-user/:id', deleteUser);
router.get('/total-users', getTotlalUsers);

module.exports = router;