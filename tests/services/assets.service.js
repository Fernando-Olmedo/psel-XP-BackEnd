const { expect } = require('chai');
const sinon = require('sinon');
const assetsModel = require('../../src/database/models/ativo');
const assetsService = require('../../src/services/assets.service');

// describe('Testa a camada assetsController', () => {
//   describe('Testa a rota /assets/ativos/:codAtivo', () => {
//     describe('Testa o metodo GET', () => {
//       describe('Testa a função findAsset', () => {
//         const req = {};
//         const res = {};
//         const assetObj = {
//           codAtivo: 102,
//           qtdAtivo: 100,
//           valor: 94.31,
//         };
//         before(() => {
//           req.params = { id: 102 };
//           res.status = sinon.stub().returns(res);
//           res.json = sinon.stub().returns();
//           sinon.stub(assetsService, 'getAsset').resolves(assetObj);
//         });

//         after(() => {
//           assetsService.getAsset.restore();
//         });

//         it('Testa se STATUS é chamado com o código 200.', async () => {
//           await assetsController.findAsset(req, res);
//           expect(res.status.calledWith(200)).to.be.equal(true);
//         });

//         it('Testa se JSON é chamado com o ativo correto.', async () => {
//           await assetsController.findAsset(req, res);
//           expect(res.json.calledWith(assetObj)).to.be.equal(true);
//         });
//       });
//     });
//   });
// });