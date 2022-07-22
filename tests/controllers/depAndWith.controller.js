const { expect } = require('chai');
const sinon = require('sinon');
const depAndWithController = require('../../src/controllers/depAndWith.controller');
const depAndWithService = require('../../src/services/depAndWith.service');

describe('Testa a camada depAndWithController', () => {
  describe('Testa a rota /conta/{codCliente}', () => {

  });
  describe('Testa a rota /conta/(saque || deposito)', () => {
    const req = {};
    const res = {};
    const contaObj = {
      codCliente: 1,
      saldo: 102,
    };
    const bodyObj = {
      "codCliente": 1,
      "codAtivo": 102,
      "qtdAtivo": 100
    };
    before(() => {
      req.body = bodyObj;
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(depAndWithService, 'createMov').resolves(contaObj);
    });

    after(() => {
      depAndWithService.createMov.restore();
    });

    describe('Testa a rota /conta/deposito', () => {
      describe('Testa o metodo POST', () => {
        describe('Testa a função deposit', () => {
          it('Testa se STATUS é chamado com o código 201.', async () => {
            await depAndWithController.deposit(req, res);
            expect(res.status.calledWith(201)).to.be.equal(true);
          });

          it('Testa se JSON é chamado com o ativo correto.', async () => {
            await depAndWithController.deposit(req, res);
            expect(res.json.calledWith(contaObj)).to.be.equal(true);
          });
        });
      });
    });
    describe('Testa a rota /conta/saque', () => {
      describe('Testa o metodo POST', () => {
        describe('Testa a função withdrawal', () => {
          it('Testa se STATUS é chamado com o código 201.', async () => {
            await depAndWithController.withdrawal(req, res);
            expect(res.status.calledWith(201)).to.be.equal(true);
          });

          it('Testa se JSON é chamado com o ativo correto.', async () => {
            await depAndWithController.withdrawal(req, res);
            expect(res.json.calledWith(contaObj)).to.be.equal(true);
          });
        });
      });
    });
  });
});