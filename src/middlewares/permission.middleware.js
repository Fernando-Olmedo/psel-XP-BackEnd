const permissionMiddleware = async (req, res, next) => {
    let codCliente;
    if (req.params.codCliente) {
        codCliente = req.params.codCliente;
    } else codCliente = req.body.codCliente;

    const codUser = res.locals.payload.codCliente;
    // console.log('permiddleware', codCliente);
    // console.log('permiddleware', codUser);
    if (codUser !== codCliente) {
        const errorObject = { status: 401, message: 'Unauthorized user' };
        throw errorObject;
    }

    next();
};

module.exports = permissionMiddleware;