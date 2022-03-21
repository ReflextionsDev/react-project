function Bug(props) {
    return (
        <div className='Bug'>
            <div>Bug</div>
            <div>ID: {props.id}</div>
            <div>Title: {props.title}</div>
            <div>Description: {props.desc}</div>
            <div>Severity: {props.severity}</div>
            <div>Status: {props.status}</div>
            <div>Time Created: {props.time_created}</div>
            <div>Time Updated: {props.time_updated}</div>
        </div>
    )
}

export default Bug