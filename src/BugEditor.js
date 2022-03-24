import React, { Component } from 'react'
import Select from 'react-select';
import { statusOptions, severityOptions } from "./App"

export class BugEditor extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

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
                    <textarea
                        name="desc"
                        value={this.props.desc}
                        onChange={this.props.update}
                    ></textarea>
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