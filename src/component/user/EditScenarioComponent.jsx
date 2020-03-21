
import React, {Component} from 'react'
import ApiService from "../../service/ApiService";

class EditScenarioComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scenarioId: '',
            scenarioName: '',
            scenarioDescription: '',
            scenarioVersion:'',
        }
        this.saveScenario = this.saveScenario.bind(this);
        this.loadScenario = this.loadScenario.bind(this);
    }

    componentDidMount() {
        this.loadScenario();
    }

    loadScenario(){
        ApiService.fetchScenarioById(window.localStorage.getItem("scenarioId"))
            .then((res) =>{
                let scenario = res.data.result;
                this.setState({
                    scenarioId: scenario.id,
                    scenarioName: scenario.scenarioName,
                    scenarioDescription: scenario.scenarioDescription,
                    scenarioVersion: scenario.scenarioVersion,
                })
            });
    }

    onChange = (e) =>
        this.setState({[e.target.name]: e.target.value});

    saveScenario = (e) => {
        e.preventDefault();
        let scenario = {
            scenarioId:this.state.scenarioId,
            scenarioName: this.state.scenarioName,
            scenarioDescription: this.state.scenarioDescription,
            scenarioVersion: this.state.scenarioVersion
        };
        ApiService.editScenario(scenario)
            .then(res => {
                this.setState({message: 'Scenario Added Successfully.'});
                this.props.history.push('/scenario');
            });
    }

    render() {
        return(
            <div>
                <h2 className="text-center">Edit Scenario</h2>
                <form>
                    <div className="form-group">
                        <label>scenarioId:</label>
                        <input type='text' placeholder="scenarioId" name="scenarioId" className="form-control" readOnly="true" defaultValue={this.state.scenarioId} />
                    </div>
                    <div className="form-group">
                        <label>scenarioName:</label>
                        <input placeholder="scenarioName" name="scenarioName" className="form-control" value={this.state.scenarioName} onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                        <label>scenarioDescription:</label>
                        <input placeholder="scenarioDescription" name="scenarioDescription" className="form-control" value={this.state.scenarioDescription} onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                        <label>scenarioVersion:</label>
                        <input type="number" placeholder="scenarioVersion" name="scenarioVersion" className="form-control" value={this.state.scenarioVersion} onChange={this.onChange}/>
                    </div>
                    <button className="btn btn-success" onClick={this.saveScenario}>Save</button>
                </form>
            </div>
        );
    }

}

export  default EditScenarioComponent;