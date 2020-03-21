
import React, {Component } from 'react'
import ApiService from "../../service/ApiService";

class ListScenarioComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            scenarios: [],
            message: null
        }
        this.deleteScenario = this.deleteScenario.bind(this);
        this.editScenario = this.editScenario.bind(this);
        this.addScenario = this.addScenario.bind(this);
        this.reloadScenarioList = this.reloadScenarioList.bind(this);
    }

    componentDidMount() {
        this.reloadScenarioList();
    }

    reloadScenarioList(){
        ApiService.fetchSceanrios()
            .then((res)=>{this.setState({scenarios:res.data.result})});
    }

    deleteScenario(scenarioId){
        ApiService.deleteScenarios(scenarioId)
            .then(res => {
                this.setState({messgae : 'User Deleted Successfully.'});
                this.setState({scenarios: this.state.scenarios.filter(scenario => scenario.id !== scenarioId)});
                 })
    }

    editScenario(id){
        window.localStorage.setItem("scenarioId", id);
        this.props.history.push('/edit-scenario');
    }

    addScenario(id){
        window.localStorage.removeItem("scenarioId");
        this.props.history.push('/add-scenario');
    }

    render(){
        return(
            <div>
                <h2 className="text-center">Scenario Details</h2>
                <button className="btn btn-danger" onclick={() => this.addScenario()}>Add Scenario</button>
                <table className="table table-stripped">
                    <thread>
                        <tr>
                            <th className="hidden">Id</th>
                            <th>scenarioName</th>
                            <th>scenarioDesctiption</th>
                            <th>scenarioVersion</th>
                            <th>Jobs</th>
                            <th>LastModified</th>
                        </tr>
                    </thread>
                    <tbody>
                    {
                        this.state.scenarios.map(
                            scenario => <tr key={scenario.id}>
                                <td>{scenario.scenarioName}</td>
                                <td>{scenario.scenarioDesctiption}</td>
                                <td>{scenario.scenarioVersion}</td>
                                <td>{scenario.Jobs}</td>
                                <td>{scenario.LastModified}</td>
                                <td>
                                    <button className="btn btn-success" onClick={() => this.deleteScenario(scenario.id)}>Delete</button>
                                    <button className="btn btn-success" onClick={() => this.editScenario(scenario.id)}>Edit</button>

                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        );
    }

}

export default ListScenarioComponent;