const Reader = require("../utils/reader");
const ExplorerService = require("./explorerService");
class FizzbuzzService {
    static applyValidationInExplorer(explorer){
        if(explorer.score%5 === 0 && explorer.score%3 === 0){
            explorer.trick = "FIZZBUZZ";
            return explorer;
        }else if(explorer.score%3 === 0){
            explorer.trick = "FIZZ";
            return explorer;
        }else if(explorer.score%5 === 0){
            explorer.trick = "BUZZ";
            return explorer;
        }else{
            explorer.trick = explorer.score;
            return explorer;
        }
    }
    static applyValidationInNumber(number){
        if(number%5 === 0 && number%3 === 0){
            return "FIZZBUZZ";
        }else if(number%3 === 0){
            return "FIZZ";
        }else if(number%5 === 0){
            return "BUZZ";
        }else{
            return number;
        }
    }
    static applyValidationMission(mission){
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
}
module.exports = FizzbuzzService;