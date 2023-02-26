const DisplayData =({names})=>{
    return (
        <div>
            {names.map((name)=>{
                return <li key={name.id}>{name.name}</li>
            })}
        </div>
    )
}

export default DisplayData