import './App.css'
import React, { Component } from 'react'
import Select from 'react-select';
import Bug from './Bug'
import BugEditor from './BugEditor'
import { getDate, printDate } from './middleware/datetime'

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

const tempDate = new Date('2022-03-23T16:12:14.771477+00:00')

getDate()
console.log(printDate(tempDate))

export class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      bugs: [
        {
          id: 1,
          title: "Cannot pickup smg",
          desc: "It's busted",
          severity: "B",
          status: "Not Started",
          time_created: tempDate,
          time_updated: tempDate,
        },
        {
          id: 2,
          title: "Cannot heal",
          desc: "It's really busted",
          severity: "A",
          status: "Not Started",
          time_created: tempDate,
          time_updated: tempDate,
        },
        {
          id: 3,
          title: "Player animation desyncs after taunt",
          desc: "Still busted",
          severity: "C",
          status: "In Progress",
          time_created: tempDate,
          time_updated: tempDate,
        },
        {
          id: 4,
          title: "Stuff",
          desc: "Still busted",
          severity: "C",
          status: "In Progress",
          time_created: tempDate,
          time_updated: tempDate,
        },
        {
          id: 5,
          title: "Another bug",
          desc: "Still busted",
          severity: "A",
          status: "regression",
          time_created: tempDate,
          time_updated: tempDate,
        }
      ],
      currentBug: {
        id: 4,
        title: "New Bug",
        desc: "description",
        severity: "B",
        status: "open",
        time_created: tempDate,
        time_updated: tempDate,
      },
      filters: {
        // Populate with all severity drop down options
        severity: severityOptions.map(option => option.value)
      }
    }
  }

  //text 

  updateCurrentBug = (e) => {
    const newData = { ...this.state }
    newData.currentBug[e.target.name] = e.target.value
    this.setState(newData)
  }

  // select 
  updateCurrentBugSeverity = (e) => {
    const newData = { ...this.state }
    newData.currentBug.severity = e.value
    this.setState(newData)

  }

  updateCurrentBugStatus = (e) => {
    const newData = { ...this.state }
    newData.currentBug.status = e.value
    this.setState(newData)
  }

  ////

  submitNewBug = async (e) => {
    const newData = { ...this.state }

    // Create new Bug
    const newBug = {
      id: this.state.currentBug.id,
      title: this.state.currentBug.title,
      desc: this.state.currentBug.desc,
      severity: this.state.currentBug.severity,
      status: this.state.currentBug.status,
      time_created: await getDate(),
      time_updated: await getDate(),
    }
    newData.bugs.push(newBug)

    // Clear current bug
    const clearBug = {
      id: newData.bugs.length + 1,
      title: "New Bug",
      desc: "",
      severity: "B",
      status: "open",
      time_created: "",
      time_updated: "",
    }
    newData.currentBug = clearBug

    this.setState(newData)
  }


  // Filters

  filterSeverity = (e) => {
    // Get value from each selected item and create array with all
    const filters = e.map(obj => obj.value)
    const newData = { ...this.state }
    newData.filters.severity = filters
    this.setState(newData)
  }

  render() {
    return (
      <div className="app">

        <header className='nav'>
          <div>Bug Tracker</div>
          <div>
            {/* Multi select boxes to filter items */}
            <div>Severity: </div>

            <Select
              name="filterSeverity"
              isMulti
              defaultValue={[...severityOptions]}
              onChange={this.filterSeverity}
              options={severityOptions}
            />

            <div>Status: </div>
          </div>
        </header>

        <main>

          <div className='items'>

            <div className='item item--header'>
              <div className='item__id'>ID</div>
              <div className='item__title'>Title</div>
              <div className='item__severity'>Severity</div>
              <div className='item__status'>Status</div>
              <div className='item__updated'>Updated</div>
              <div className='item__created'>Created</div>
            </div>

            {this.state.bugs.map(({ id, title, desc, severity, status, time_created, time_updated }, idx) => {
              return (
                <Bug
                  key={`bug-${idx}`}
                  id={id}
                  title={title}
                  desc={desc}
                  severity={severity}
                  status={status}
                  time_created={time_created}
                  time_updated={time_updated}
                />
              )
            })}
          </div>

          <div className='editor'>
            <BugEditor
              key={`bug-${this.state.currentBug.id}`}
              id={this.state.currentBug.id}
              title={this.state.currentBug.title}
              desc={this.state.currentBug.desc}
              severity={this.state.currentBug.severity}
              status={this.state.currentBug.status}
              time_created={this.state.currentBug.time_created}
              time_updated={this.state.currentBug.time_updated}
              update={this.updateCurrentBug}
              submit={this.submitNewBug}
              updateSeverity={this.updateCurrentBugSeverity}
              updateStatus={this.updateCurrentBugStatus}
            />
          </div>
        </main>
      </div>

    )
  }
}

export default App

export {
  severityOptions,
  statusOptions
}