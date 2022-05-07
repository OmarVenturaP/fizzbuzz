const ExplorerController = require("../controllers/explorerController");
const FizzbuzzService = require("../services/fizzbuzzService");
const Reader = require("../utils/reader");

class ExplorerService {
    static filterByMission(explorers, mission) {
        const explorersByMission = explorers.filter((explorer) => explorer.mission == mission);
        return explorersByMission;
    }
    static getAmountOfExplorersByMission(explorers, mission) {
        const explorersByMission = explorers.filter((explorer) => explorer.mission == mission);
        return explorersByMission.length;
    }
    static getExplorersUsernamesByMission(explorers, mission) {
        const explorersInNodeToGetUsernames = explorers.filter((explorer) => explorer.mission == mission);
        const usernamesInNode = explorersInNodeToGetUsernames.map((explorer) => explorer.githubUsername);
        return usernamesInNode;
    }
    static getExplorersNamesByMission(mission) {
        if(mission == "node"||mission == "java"){
            const explorers = Reader.readJsonFile("explorers.json");
            const mapExplorers = explorers.filter((explorer) => explorer.mission == mission);
            const namesByMission = mapExplorers.map((explorer) => explorer.name);
            const namesMaped = namesByMission.join("  -  ")
            const responseBot = `${JSON.stringify(namesMaped)}`
            return responseBot;
        }else{
            return mission;
        }
    }
    static applyValidationBot(number){
        const inputDataBot = (number);
        if(!isNaN(inputDataBot)){
            const fizzbuzzTrick = FizzbuzzService.applyValidationInNumber(inputDataBot);
            const responseBot = `Tu número es: ${inputDataBot}. Validación: ${fizzbuzzTrick}`;
            return responseBot;
        }else if(inputDataBot == "node"||inputDataBot == "java"){
            const fizzbuzzMission = ExplorerService.getExplorersNamesByMission(inputDataBot)
            const responseBot = `Estos son los Explorers que están en ${inputDataBot}: ${fizzbuzzMission}`;
            return responseBot;
        }else{
            return `Ingresa un número o una mision valida (node o java).`;
        }
    }
}

module.exports = ExplorerService;