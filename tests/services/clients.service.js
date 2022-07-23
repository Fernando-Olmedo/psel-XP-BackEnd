const { expect } = require('chai');
const sinon = require('sinon');
const clientsService = require('../../src/services/clients.service');
const { Carteira } = require('../../src/database/models');
const { clientAssets, emptyAssets } = require('../mocks/clients');

describe('Testa a camada clientsService', () => {
  describe('Testa a rota /clientes/ativos/:codCliente', () => {
    describe('Testa o metodo GET', () => {
      describe('Testa a função getWallet', () => {
        describe('Testa se existir um ativo no DB', () => {
          before(() => {
            sinon.stub(Carteira, 'findAll').resolves(clientAssets);
          });
  
          after(() => {
            Carteira.findAll.restore();
          });
  
          it('Testa se é retornado um array.', async () => {
            const response = await clientsService.getWallet(1);
            expect(response).to.be.an('array');
          });
  
          it('Testa se o objeto possui as chaves codCliente, codAtivo, qtdeAtivo e valor', async () => {
            const response = await clientsService.getWallet(1);
            expect(response[0]).to.contain.all.keys('codCliente', 'codAtivo', 'qtdeAtivo', 'valor');
          });
        });
        describe('Testa se esse cliente não possuir um ativo no DB', () => {
          before(() => {
            sinon.stub(Carteira, 'findAll').resolves(emptyAssets);
          });
  
          after(() => {
            Carteira.findAll.restore();
          });

          it('Testa se é retornado um array.', async () => {
            const response = await clientsService.getWallet(2);
            expect(response).to.be.an('array');
          });
          it('Testa se o array retornado está vazio.', async () => {
            const response = await clientsService.getWallet(2);
            expect(response).to.be.empty;
          });

        });
      });
    });
  });
});