import { printDate } from "./middleware/datetime"


function Bug(props) {
    return (
        <div className='item item--item'>
            <div className="item__id">#{props.id}</div>
            <div className="item__title">{props.title}</div>
            {/* <div>Description: {props.desc}</div> */}
            <div className="item__severity">{props.severity}</div>
            <div className="item__status">{props.status}</div>
            <div className="item__updated">{printDate(props.time_updated)}</div>
            <div className="item__created">{printDate(props.time_created)}</div>
        </div>
    )
}

export default Bug