const ExplorerService = require('../../lib/services/explorerService');

describe('Test Explorer Service app', ()=> {
    test('1. filter explorers by mission', () => {
        const explorers = [{mission: "node"}]
        const explorersByMission = ExplorerService.filterByMission(explorers, "node");
        expect(explorersByMission).toBeDefined();
     })
     test('2. get amount of explorers by mission', () => {
        const explorers = [{mission: "node"}]
        const explorersByMission = ExplorerService.filterByMission(explorers, "node");
        expect(explorersByMission.length).toBe(1);
     })
     test('3. get username of explorers by mission', () => {
        const explorers = [{mission: "node"}]
        const explorersByMission = ExplorerService.filterByMission(explorers, "node");
        expect(explorersByMission[0].githubUsername).toBe();
     })
})