import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {id, name, imgUrl} = destinationDetails
  return (
    <li className="list-item">
      <img src={imgUrl} className="pic" alt={name} />
      <p className="place">{name}</p>
    </li>
  )
}

export default DestinationItem
