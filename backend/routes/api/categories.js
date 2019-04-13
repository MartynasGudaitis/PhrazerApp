const express = require('express');
const router = express.Router();

const Category = require('../../models/Category');

// @route GET api/categories
// @desc Get all categories
// @access Private
router.get('/', (req, res) => {
    Category
        .find()
        .sort({ date: -1 })
        .then(categories => res.json(categories))
});

// @route POST api/categories
// @desc Create new category
// @access Private
router.post('/', (req, res) => {
    const newCategory = new Category({
        name: req.body.name
    });

    newCategory
    .save()
    .then(category => res.json(category));    
});

module.exports = router;

