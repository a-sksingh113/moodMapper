const express = require('express');
const router = express.Router();
const { getResources, addResource } = require('../controllers/resourcesController');

// Public route for fetching resources
router.route('/').get(getResources);

// Protected route for adding resources (Admin functionality)
router.route('/').post(addResource);

module.exports = router;
