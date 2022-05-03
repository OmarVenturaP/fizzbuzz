const ExplorerService = require('../services/explorerService');
const FizzBuzzService = require('../services/fizzBuzzService');
const Reader = require('../utils/reader');

class ExplorerController {
    static getExplorersByMission(mission){
        const explorer = Reader.readJsonFile("explorers.json");
        return ExplorerService.filterByMission(explorer, mission)
    }
}

module.exports = ExplorerController;