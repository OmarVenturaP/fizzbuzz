const ExplorerController = require('../../lib/controllers/explorerController');

describe('Metodos para obtener lista de explorers', () => {
    test('1. Retornando explorer por mision', () => {
        const explorersByMission = ExplorerController.getExplorersByMission("node")
        expect(explorersByMission[3].name).toBe("Woopa4");
    })
    test('2. Retornando Username de explorers en la mision node', () => {
        const explorersmission = ExplorerController.getExplorersByMission("node")
        const usernames = explorersmission.map((explorer) => explorer.githubUsername)
        expect(usernames[3]).toMatch("ajolonauta4");
    })
})