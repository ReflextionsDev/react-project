import React, { Component } from 'react'
import { getDate, printDate } from "./middleware/datetime"

import Select from 'react-select';

const options = [
    { value: 'A', label: 'A' },
    { value: 'B', label: 'B' },
    { value: 'C', label: 'C' },
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

    handleChange = (selectedOption) => {
        this.setState({ selectedOption }, () =>
            console.log(`Option selected:`, this.state.selectedOption)
        );
    };

    render() {
        return (
            <div className='Bug'>
                <div>New Bug</div>
                <hr />

                <div>ID: {this.props.id}</div>

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
                    <input
                        name="severity"
                        value={this.props.severity}
                        onChange={this.props.update}
                    ></input>

                    <Select
                        value={this.state.selectedOption}
                        onChange={this.handleChange}
                        options={options}
                    />
                    

                </div>


                <div>
                    <label>Status: </label>
                    <input
                        name="status"
                        value={this.props.status}
                        onChange={this.props.update}
                    ></input>
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