const loginService = require('../services/login.service');

const login = async (req, res) => {
    const token = await loginService.login(req.body);
    return res.status(200).json({ token });
};

module.exports = { login };