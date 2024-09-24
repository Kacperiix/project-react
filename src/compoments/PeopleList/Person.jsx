function Person({name, age, children, fun}) {
    return <div className="person" onMouseEnter={fun}>
        <p>{name}</p>
        <p>{age}</p>
        {children}
    </div>
}

export default Person