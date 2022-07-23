const { expect } = require('chai');
const sinon = require('sinon');
const loginController = require('../../src/controllers/login.controller');
const loginService = require('../../src/services/login.service');

describe('Testa a camada loginController', () => {
  describe('Testa a rota /login', () => {
    describe('Testa o metodo POST', () => {
      describe('Testa a função login', () => {
        const req = {};
        const res = {};
        const loginObj = 'meuToken';
        const tokenObj = {
          token: 'meuToken'
        };
        const bodyObj = {
          "email": 'email@test.com',
          "passowrd": '123456',
        };
        before(() => {
          req.body = bodyObj;
          res.status = sinon.stub().returns(res);
          res.json = sinon.stub().returns();
          sinon.stub(loginService, 'login').resolves(loginObj);
        });

        after(() => {
          loginService.login.restore();
        });

        it('Testa se STATUS é chamado com o código 200.', async () => {
          await loginController.login(req, res);
          expect(res.status.calledWith(200)).to.be.equal(true);
        });

        it('Testa se JSON é chamado com o token correto.', async () => {
          await loginController.login(req, res);
          expect(res.json.calledWith(tokenObj)).to.be.equal(true);
        });
      });
    });
  });
});