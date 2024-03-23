function Card(props) {

    const {name, description, price, status} = props.phone
    return (
        <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <h6 className="card-status my-2 fs-4 text-body-secondary">{status}</h6>
              <h6 className="card-number my-2 fs-5">${price}</h6>
              <p className="card-text">{description}</p>
              <div className="text-danger" style={{cursor: "pointer"}}>Delete</div>
            </div>
        </div>
    )
}

export default Card;