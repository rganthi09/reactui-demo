
import React, {Component} from 'react'
import ApiService from "../../service/ApiService";

class AddScenarioComponent extends Component{
    constructor(props) {
        super(props);
        this.state ={
            scenarioName: '',
            scenarioDescription: '',
            scenarioVersion: '',
            Jobs: '',
            lastModified: '',
        }
        this.saveScenario = this.saveScenario.bind(this);
    }

    saveScenario = (e) => {
        e.preventDefault();
        let scenario = {
            scenarioName: this.state.scenarioName,
            scenarioDescription: this.state.scenarioDescription,
            scenarioVersion: this.state.scenarioVersion,
            Jobs: this.state.Jobs,
            lastModified: this.state.lastModified
        };
        ApiService.addScenario(scenario)
            .then(res => {
                this.setState({message: 'Scenario Added Successfully.'});
                this.props.history.push('/scenario');
            });
    }
    onchange = (e) =>
         this.setState({[e.target.name]: e.target.value});
    render(){
        return(
            <div>
                <h2 className="text-center">Add Scenario</h2>
                <form>
                    <div className="form-group">
                        <label>ScenarioName:</label>
                        <input type="text" placeholder="scenarioName" name="scenarioName" className="form-control" value={this.state.scenarioName} onChange={this.onchange}/>
                    </div>
                    <div className="form-group">
                        <label>scenarioDescription:</label>
                        <input type="text" placeholder="scenarioDescription" name="scenarioDescription" className="form-control" value={this.state.scenarioDescription} onChange={this.onchange}/>
                    </div>
                    <div className="form-group">
                        <label>scenarioVersion:</label>
                        <input type="text" placeholder="scenarioVersion" name="scenarioVersion" className="form-control" value={this.state.scenarioVersion} onChange={this.onchange}/>
                    </div>
                    <div className="form-group">
                        <label>Jobs:</label>
                        <input type="text" placeholder="Jobs" name="Jobs" className="form-control" value={this.state.Jobs} onChange={this.onchange}/>
                    </div>
                    <div className="form-group">
                        <label>lastModified:</label>
                        <input type="date" placeholder="lastModified" name="lastModified" className="form-control" value={this.state.lastModified} onChange={this.onchange}/>
                    </div>
                    <button className="btn btn-success" onClick={this.saveScenario}>Save</button>
                </form>
            </div>
        );

    }

}

export default AddScenarioComponent;