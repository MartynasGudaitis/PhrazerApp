const express = require('express');
const router =  express.Router();

 // Phrase Model
const Phrase = require('../../models/Phrase');

// @route GET api/phrases
// @desc Get all phrases
// @access Private
router.get('/', (req, res) => {
    Phrase
        .find()
        .sort({ date: -1 })
        .then(phrases => res.json(phrases))
});

// @route POST api/phrases
// @desc Create new phrase
// @access Private
router.post('/', (req, res) => {
    const newPhrase = new Phrase({
        phrase: req.body.phrase,
        translation: req.body.translation,
        category_id: req.body.category_id
    });
    
    newPhrase
    .save()
    .then(phrase => res.json(phrase));      
});

// @route DELETE api/phrases
// @desc Remove a phrase
// @access Private
router.delete('/:id', (req, res) => {
    Phrase
        .findById(req.params.id)
        .then(phrase => phrase.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));;
});

// @route GET
// @desc Get all by category
// @access Private
router.get('/', (req, res) => {
    Phrase
        .find(req.query.category_id)
        .then(phrases => res.json(phrases))
});

module.exports = router;