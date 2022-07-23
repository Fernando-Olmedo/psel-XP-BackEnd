const { expect } = require('chai');
const sinon = require('sinon');
const investmentsController = require('../../src/controllers/investments.controller');
const investmentsService = require('../../src/services/investments.service');

describe('Testa a camada investmentsController', () => {
  const req = {};
  const res = {};
  const orderObj = {
    codCliente: 1,
    codtAtivo: 101,
    qtdeAtivo: 100,
  };
  const bodyObj = {
    "codCliente": 1,
    "codtAtivo": 101,
    "qtdeAtivo": 100
  };
  
  before(() => {
    req.body = bodyObj;
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(investmentsService, 'createOrdem').resolves(orderObj);
  });

  after(() => {
    investmentsService.createOrdem.restore();
  });

  describe('Testa a rota /investimentos/compra', () => {
    describe('Testa o metodo POST', () => {
      describe('Testa a função buyOrder', () => {
        it('Testa se STATUS é chamado com o código 201.', async () => {
          await investmentsController.buyOrder(req, res);
          expect(res.status.calledWith(201)).to.be.equal(true);
        });

        it('Testa se JSON é chamado com o codClinte, codAtivo e qtdeAtivo corretos.', async () => {
          await investmentsController.buyOrder(req, res);
          expect(res.json.calledWith(orderObj)).to.be.equal(true);
        });
      });
    });
  });
  describe('Testa a rota /investimentos/venda', () => {
    describe('Testa o metodo POST', () => {
      describe('Testa a função sellOrder', () => {
        it('Testa se STATUS é chamado com o código 201.', async () => {
          await investmentsController.sellOrder(req, res);
          expect(res.status.calledWith(201)).to.be.equal(true);
        });

        it('Testa se JSON é chamado com o codClinte, codAtivo e qtdeAtivo corretos.', async () => {
          await investmentsController.sellOrder(req, res);
          expect(res.json.calledWith(orderObj)).to.be.equal(true);
        });
      });
    });
  });
});