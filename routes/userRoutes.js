const router = require('express').Router()


// to signup a user 
router.post('/user/signup',)
// login a user 
router.get('/user/login')
// update the user
router.patch('/user/update')
// delete a user 
router.delete('/user/delete')
// get user by id 
router.get('/user/get/:id')
// get all user 
router.get('/user/get')
// delete the single user
router.get('/user/delete/:id')
// search 
router.get('/search')





module.exports = router