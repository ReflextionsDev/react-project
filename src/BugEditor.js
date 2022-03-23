import React, { Component } from 'react'
import { getDate, printDate } from "./middleware/datetime"

import Select from 'react-select';

const severityOptions = [
    { value: 'A', label: 'A' },
    { value: 'B', label: 'B' },
    { value: 'C', label: 'C' },
];

const statusOptions = [
    { value: 'open', label: 'open' },
    { value: 'in progress', label: 'in progress' },
    { value: 'blocked', label: 'blocked' },
    { value: 'regression', label: 'regression' },
    { value: 'closed', label: 'closed' },
    { value: 'reopen', label: 'reopen' },
];

export class BugEditor extends Component {

    constructor(props) {
        super(props)
        this.state = {
            // id: this.props.id,
            // title: this.props.title,
            // desc: this.props.desc,
            // severity: this.props.severity,
            // status: this.props.status,
            // time_created: this.props.time_created,
            // time_updated: this.props.time_updated,
            // selectedOption: {
            //     label: this.props.severity,
            //     value: this.props.severity
            // }
        }
    }

    // handleChange = (selectedOption) => {
    //     this.setState({ selectedOption }, () =>
    //         console.log(`Option selected:`, this.state.selectedOption)
    //     );
    // };

    render() {
        return (
            <div className='Bug'>
                <div>New Bug (ID: #{this.props.id})</div>
                <hr />

                <div>
                    <label>Title: </label>
                    <input
                        name="title"
                        value={this.props.title}
                        onChange={this.props.update}
                    ></input>
                </div>

                <div>
                    <label>Description: </label>
                    <input
                        name="desc"
                        value={this.props.desc}
                        onChange={this.props.update}
                    ></input>
                </div>

                <div>
                    <label>Severity: </label>
                    <Select
                        name="severity"
                        value={{
                            label: this.props.severity,
                            value: this.props.severity
                        }}
                        onChange={this.props.updateSeverity}
                        options={severityOptions}
                    />
                </div>


                <div>
                    <label>Status: </label>
                    <Select
                        value={{
                            label: this.props.status,
                            value: this.props.status
                        }}
                        onChange={this.props.updateStatus}
                        options={statusOptions}
                    />
                </div>

                {/* <div>Time Created: {this.props.time_created}</div> */}
                {/* <div>Time Updated: {this.props.time_updated}</div> */}

                <button
                    name="submit"
                    onClick={this.props.submit}
                >Submit</button>
            </div>
        )
    }
}

export default BugEditor