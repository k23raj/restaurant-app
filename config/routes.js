const express = require('express')
const router = express.Router()
const cityController = require('../app/controllers/cityController')
const cuisineController = require('../app/controllers/cuisineController')
const restaurantController = require('../app/controllers/restaurantController')

router.get('/cities', cityController.list)
router.post('/cities', cityController.create)
router.get('/cities/:id', cityController.show)
router.put('/cities/:id', cityController.update)
router.delete('/cities/:id', cityController.destroy)


router.get('/cuisines', cuisineController.list)
router.post('/cuisines', cuisineController.create)
router.get('/cuisines/:id', cuisineController.show)
router.put('/cuisines/:id', cuisineController.update)
router.delete('/cuisines/:id', cuisineController.destroy)

router.get('/restaurants', restaurantController.list)
router.post('/restaurants', restaurantController.create)
router.get('/restaurants/:id', restaurantController.show)
router.put('/restaurants/:id', restaurantController.update)
router.delete('/restaurants/:id', restaurantController.destroy)


module.exports = router
