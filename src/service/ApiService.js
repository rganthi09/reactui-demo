import axios from 'axios'
const SCENARIO_API_BASE_URL = 'http://localhost:8080/scenarios';

class ApiService{
    fetchScenarios(){
        return axios.get(SCENARIO_API_BASE_URL);
    }
    //FETCH scenario
    fetchScenarioById(scenarioId){
        return axios.get(SCENARIO_API_BASE_URL + '/'+scenarioId);
    }
    //DELETE Scenario
    deleteScenario(scenarioId){
        return axios.delete(SCENARIO_API_BASE_URL + '/'+scenarioId);
    }
    //ADD Scenario
    addScenario(scenario){
        return axios.post(SCENARIO_API_BASE_URL + '/'+scenario);
    }
    //Edit Scenario
    editScenario(scenario){
        return axios.put(SCENARIO_API_BASE_URL + '/'+scenario.id, scenario);
    }
}

export default new ApiService();

