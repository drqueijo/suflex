import React from 'react';
import Icon from '../../atoms/Icon/Icon';
import {ReactComponent as Logo} from '../../../../images/logo.svg'

function Header() {
  return (
    <div className="header">
        
        <Icon customClass='icon--big' img={<Logo />}/>
    </div>
  )
}

export default Header