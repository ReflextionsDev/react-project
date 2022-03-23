import './App.css'
import React, { Component } from 'react'
import Bug from './Bug'
import BugEditor from './BugEditor'
import date from 'date-and-time';

const tempDate = new Date('2022-03-23T16:12:14.771477+00:00')
const timeURL = 'http://worldtimeapi.org/api/timezone/gmt'

async function getDate() {
  const response = await fetch(timeURL)
  let data = await response.json()
  let newDate = new Date(data.datetime)
  console.log("Get Date:",newDate)
  console.log("Print Date:", printDate(newDate))
  return newDate;
}

function printDate(dateObj) {
  return date.format(dateObj, 'MM/DD/YYYY HH:mm')
}

getDate()

// console.log(getDate())

// let datetime = getDate()
// console.log(datetime)
// console.log(printDate(datetime))

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
        }
      ],
      currentBug: {
        id: 4,
        title: "New Bug",
        desc: "description",
        severity: "B",
        status: "open",
        time_created: "before",
        time_updated: "now",
      }
    }
  }

  updateCurrentBug = (e) => {
    const newData = { ...this.state }
    newData.currentBug[e.target.name] = e.target.value
    this.setState(newData)
  }

  submitNewBug = (e) => {
    const newData = { ...this.state }

    // Create new Bug
    const newBug = {
      id: this.state.currentBug.id,
      title: this.state.currentBug.title,
      desc: this.state.currentBug.desc,
      severity: this.state.currentBug.severity,
      status: this.state.currentBug.status,
      time_created: this.state.currentBug.time_created,
      time_updated: this.state.currentBug.time_updated,
    }
    newData.bugs.push(newBug)

    // Clear current bug
    const clearBug = {
      id: newData.bugs.length + 1,
      title: "New Bug",
      desc: "",
      severity: "B",
      status: "",
      time_created: "",
      time_updated: "",
    }
    newData.currentBug = clearBug

    this.setState(newData)
  }


  render() {
    return (
      <div className="app">

        <header className='nav'>Bug Tracker</header>

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
            />
          </div>
        </main>
      </div>

    )
  }
}

export default App

export {
  printDate,
}