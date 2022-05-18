import React from 'react'; 

function Icon(props) {
  return (
    <div className={`icon ${props.customClass}`}>
        {props.img}
    </div>
  )
}

export default Icon