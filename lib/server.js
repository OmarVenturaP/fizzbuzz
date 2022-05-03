const ExplorerController = require('./controllers/explorerController');

const express = require('express');
const app = express();
app.use(express.json());
const port = 3000

app.get('/', (req, res) => {
    res.json({message: "FizzBuzz Api welcome"});
});
app.get("/v1/explorer/:mission", (req, res) => {
    const mission = req.params.mission;
    const explorersInMission = ExplorerController.getExplorersByMission(mission);
    res.json(explorersInMission);
});
app.get("/v1/explorer/amount/:mission", (req, res) => {
    const mission = req.params.mission;
    const amountExplorersInMission = ExplorerController.getAmountOfExplorersByMission(mission);
    res.json({mission: req.params.mission, quantity: amountExplorersInMission});
});


app.listen(port, () => {
    console.log(`FizzBuzz API in localhost: ${port}`);
})