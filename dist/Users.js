"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.send('All users');
});
router.get('/:id', (req, res) => {
    res.send(`User with ID ${req.params.id}`);
});
exports.default = router;
