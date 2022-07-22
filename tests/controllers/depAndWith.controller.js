const { expect } = require('chai');
const sinon = require('sinon');
const depAndWithController = require('../../src/controllers/depAndWith.controller');
const depAndWithService = require('../../src/services/depAndWith.service');

describe('Testa a camada depAndWithController', () => {
  describe('Testa a rota /conta/{codCliente}', () => {
    describe('Testa o metodo GET', () => {
      describe('Testa a função balance', () => {
        const req = {};
        const res = {};
        const contaObj = {
          codCliente: 1,
          saldo: 500.00,
        };
        before(() => {
          req.params = { id: 1 };
          res.status = sinon.stub().returns(res);
          res.json = sinon.stub().returns();
          sinon.stub(depAndWithService, 'getBalance').resolves(contaObj);
        });
    
        after(() => {
          depAndWithService.getBalance.restore();
        });

        it('Testa se STATUS é chamado com o código 200.', async () => {
          await depAndWithController.balance(req, res);
          expect(res.status.calledWith(200)).to.be.equal(true);
        });

        it('Testa se JSON é chamado com o saldo e codCliente corretos.', async () => {
          await depAndWithController.balance(req, res);
          expect(res.json.calledWith(contaObj)).to.be.equal(true);
        });

      });
    });
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
      "valor": 102
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

          it('Testa se JSON é chamado com o saldo e codCliente corretos.', async () => {
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

          it('Testa se JSON é chamado com o saldo e codCliente corretos.', async () => {
            await depAndWithController.withdrawal(req, res);
            expect(res.json.calledWith(contaObj)).to.be.equal(true);
          });
        });
      });
    });
  });
});