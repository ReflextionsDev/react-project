import React, { Component } from 'react'
// import Select from 'react-select';

// const options = [
//     { value: 'A', label: 'A' },
//     { value: 'B', label: 'B' },
//     { value: 'C', label: 'C' },
// ];

export class BugEditor extends Component {

    constructor(props) {
        super(props)
        this.state = {
            // id: this.props.id,
            title: this.props.title,
            desc: this.props.desc,
            severity: this.props.severity,
            status: this.props.status,
            time_created: this.props.time_created,
            time_updated: this.props.time_updated,
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

    updateText = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

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
                        value={this.state.title}
                        onChange={this.updateText}
                    ></input>
                </div>

                <div>
                    <label>Description: </label>
                    <input
                        name="desc"
                        value={this.state.desc}
                        onChange={this.updateText}
                    ></input>
                </div>

                <div>
                    <label>Severity: </label>
                    <input
                        name="severity"
                        value={this.state.severity}
                        // onChange={this.updateText}
                        
                    ></input>

                    {/* <Select
                        value={this.state.selectedOption}
                        onChange={this.handleChange}
                        options={options}
                    />
                     */}

                </div>




                {/* <div>Description: {this.props.desc}</div>
                <div>Severity: {props.severity}</div>
                <div>Status: {props.status}</div>
                <div>Time Created: {props.time_created}</div>
                <div>Time Updated: {props.time_updated}</div> */}
            </div>
        )
    }
}

export default BugEditor