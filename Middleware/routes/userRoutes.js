const express = require('express')
const router = express.Router()
const {getUser,postUser,putUser,deleteUser} = require('../Controller/userController.js')

router.get("/get",getUser)
router.post("/create",postUser)
router.put("/edit",putUser)
router.delete("/delete",deleteUser)

module.exports = router