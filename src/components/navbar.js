import React, { useState } from 'react'
import { Menu, Image, Button, Divider } from 'semantic-ui-react'

export default function NavBar() {
  const [activeItem, setActiveItem] = useState('viewer')

  const handleItemClick = (e, props) => {
    setActiveItem(props.name)
  }

  return (
    <Menu inverted>
      <Menu.Item
        name='home'
        active={activeItem === 'home'}
        onClick={handleItemClick}
      />
      <Menu.Item
        name='viewer'
        active={activeItem === 'viewer'}
        onClick={handleItemClick}
      />
      <Menu.Item
        name='about'
        active={activeItem === 'about'}
        onClick={handleItemClick}
      />
      <Menu.Menu
        position='right'
      >
        <Menu.Item>
          <Image className='unite_logo' src='unite-logo-transparency.png' size='tiny' />
        </Menu.Item>
        <Menu.Item>
          <Button color='grey' circular={true} size='mini'>Login</Button>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  )
}