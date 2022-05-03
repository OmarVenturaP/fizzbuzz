const ExplorerController = require('../../lib/controllers/explorerController');

describe('Metodos para obtener lista de explorers', () => {
    test('1. Retornando explorer por mision', () => {
        const explorersByMission = ExplorerController.getExplorersByMission("node")
        expect(explorersByMission[3].name).toBe("Woopa4");
    })
})