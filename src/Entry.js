import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/duotone-light-svg-icons'
const Entry = (props) => {
  
  return (
    <article className="article">
      <div className="main-image-container">
      <img src={props.img.src} alt={props.img.alt} className='fujipic'/>
      </div>
    <div class="japan">
    <FontAwesomeIcon icon={faLocationDot} className="icon"/>
    <h4>{props.country}</h4>
    <a href={props.googleMapsLink}>View on Google Maps</a>
    </div>
    <div className="japan-info">
    <h1>{props.title}</h1>
    <h4>{props.dates}</h4>
    <p>{props.text}</p>
    </div>
    </article>
  )
}

export default Entry