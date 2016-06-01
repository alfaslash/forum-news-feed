var Messages = require('../models/messages');
var express = require('express');
var router = express.Router();

router.route('/messages')
    .get(function (req, res) {
        Messages.find(function (err, messages) {
            if (err) {
                return res.send(err);
            }

            res.json(messages);
        });
    })
    .post(function (req, res) {
        var message = new Messages(req.body);

        message.save(function (err, message) {
            if (err) {
                return res.send(err);
            }

            res.json(message);
        });
    });

router.route('/messages/:id').put(function (req, res) {
    Messages.findOne({_id: req.params.id}, function (err) {
        if (err) {
            return res.send(err);
        }

        for (prop in req.body) {
            message[prop] = req.body[prop];
        }

        // save the message
        message.save(function (err) {
            if (err) {
                return res.send(err);
            }

            res.json({message: 'Massage updated!'});
        });
    });
});

router.route('/messages/:id').get(function (req, res) {
    Messages.findOne({_id: req.params.id}, function (err, message) {
        if (err) {
            return res.send(err);
        }

        res.json(message);
    });
});

router.route('/messages/:id').delete(function (req, res) {
    Messages.remove({
        _id: req.params.id
    }, function (err) {
        if (err) {
            return res.send(err);
        }

        res.json(req.params.id);
    });
});

module.exports = router;