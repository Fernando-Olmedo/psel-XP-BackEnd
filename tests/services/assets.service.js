const { expect } = require('chai');
const sinon = require('sinon');
const { Ativo } = require('../../src/database/models');
const assetsService = require('../../src/services/assets.service');
const { asset } = require('../mocks/assets');

describe('Testa a camada assetsService', () => {
  describe('Testa a rota /assets/ativos/:codAtivo', () => {
    describe('Testa o metodo GET', () => {
      describe('Testa a função findAsset', () => {
        describe('Testa se existir um ativo no DB', () => {
          before(() => {
            sinon.stub(Ativo, 'findByPk').resolves(asset);
          });
  
          after(() => {
            Ativo.findByPk.restore();
          });
  
          it('Testa se é retornado um objeto.', async () => {
            const response = await assetsService.getAsset(102);
            expect(response).to.be.an('object');
          });
  
          it('Testa se o objeto possui as chaves codAtivo, qtdeAtivo e valor', async () => {
            const response = await assetsService.getAsset(102);
            expect(response).to.contain.all.keys('codAtivo', 'qtdeAtivo', 'valor');
          });
        });
        describe('Testa se NÃO existir um ativo no DB', () => {
          before(() => {
            sinon.stub(Ativo, 'findByPk').resolves(null);
          });
  
          after(() => {
            Ativo.findByPk.restore();
          });

          it('Testa se retorna com status http 400', async () => {
            try {
              await assetsService.getAsset(999);
            } catch (error) {
              expect(error.status).to.be.equals(404);
            }
          });
          it('Testa se retorna a mensagem "Asset not found"', async () => {
            try {
              await assetsService.getAsset(999);
            } catch (error) {
              expect(error.message).to.be.equals('Asset not found');
            }
          });
        });
      });
    });
  });
});