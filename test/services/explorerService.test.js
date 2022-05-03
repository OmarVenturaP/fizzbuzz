const ExplorerService = require('../../lib/services/explorerService');

describe('Test Explorer Service app', ()=> {
    test('1. filter explorers by mission', () => {
        const explorers = [{mission: "node"}]
        const explorersByMission = ExplorerService.filterByMission(explorers, "node");
        expect(explorersByMission).toBeDefined();
     })
     test('2. filter amount explorers by mission', () => {
        const explorers = [{mission: "node"}]
        const explorersByMission = ExplorerService.filterByMission(explorers, "node");
        expect(explorersByMission.length).toBe(1);
     })
})