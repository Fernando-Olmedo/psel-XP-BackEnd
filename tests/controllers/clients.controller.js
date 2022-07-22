const { expect } = require('chai');
const sinon = require('sinon');
const clientsController = require('../../src/controllers/clients.controller');
const clientsService = require('../../src/services/clients.service');

describe('Testa a camada clientsController', () => {
  describe('Testa a rota /clientes/ativos/:codCliente', () => {
    describe('Testa o metodo GET', () => {
      describe('Testa a função findAllAssets', () => {
        const req = {};
        const res = {};
        const assetObj = [
        {
          codCliente: 1,
          codAtivo: 102,
          qtdAtivo: 100,
          valor: 94.31,
        },
        {
          codCliente: 1,
          codAtivo: 101,
          qtdAtivo: 1000,
          valor: 50.21,
        }];
        before(() => {
          req.params = { id: 1 };
          res.status = sinon.stub().returns(res);
          res.json = sinon.stub().returns();
          sinon.stub(clientsService, 'getWallet').resolves(assetObj);
        });

        after(() => {
          clientsService.getWallet.restore();
        });

        it('Testa se STATUS é chamado com o código 201.', async () => {
          await clientsController.findAllAssets(req, res);
          expect(res.status.calledWith(201)).to.be.equal(true);
        });

        it('Testa se JSON é chamado com o ativo correto.', async () => {
          await clientsController.findAllAssets(req, res);
          expect(res.json.calledWith(assetObj)).to.be.equal(true);
        });
      });
    });
  });
});