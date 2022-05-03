const ExplorerService = require("../services/explorerService");
const Reader = require("../utils/reader");

class ExplorerController {
    static getExplorersByMission(mission){
        const explorer = Reader.readJsonFile("explorers.json");
        return ExplorerService.filterByMission(explorer, mission);
    }
    static getExplorersUsernamesByMission(mission){
        const explorer = ExplorerController.getExplorersByMission(mission);
        return ExplorerService.getExplorersUsernamesByMission(explorer, mission);
    }
    static getAmountOfExplorersByMission(mission){
        const explorer = ExplorerController.getExplorersByMission(mission);
        return ExplorerService.getAmountOfExplorersByMission(explorer, mission);
    }
}

module.exports = ExplorerController;