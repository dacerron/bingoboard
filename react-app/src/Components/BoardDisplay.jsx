function BoardDisplay({activities}){
    return (<>
    {activities.map((e) => { return <p>{e}</p>})}
    </>)
}

export default BoardDisplay