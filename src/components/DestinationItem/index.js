// Write your code here
import './index.css'

const DestinationItem = props => {
  const {name, image} = props

  return (
    <li className="each-image">
      <img src={image} alt={`${name}`} className="image-style" />
      <p className="image-title"> {name} </p>
    </li>
  )
}

export default DestinationItem
