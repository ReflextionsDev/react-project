// Make drop downs for serverity and status
// Make description a text area

function Bug(props) {
    return (
        <div className='Item'>
            <div className="ItemID">#{props.id}</div>
            <div>{props.title}</div>
            {/* <div>Description: {props.desc}</div> */}
            <div className="ItemSeverity">{props.severity}</div>
            <div>{props.status}</div>
            <div>{props.time_updated}</div>
            <div>{props.time_created}</div>
        </div>
    )
}

export default Bug