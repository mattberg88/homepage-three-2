import React, { useState } from 'react';

import {
  Menu, Image, Button,
} from 'semantic-ui-react';

export default function NavBar() {
  const [activeItem, setActiveItem] = useState('viewer');

  const handleItemClick = (e, props) => {
    const { name } = props;
    setActiveItem(name);
  };

  return (
    <Menu inverted>
      <Menu.Item
        name="home"
        active={activeItem === 'home'}
        onClick={handleItemClick}
      />
      <Menu.Item
        name="about"
        active={activeItem === 'about'}
        onClick={handleItemClick}
      />
      <Menu.Item
        name="viewer"
        active={activeItem === 'viewer'}
        onClick={handleItemClick}
      />
      <Menu.Item
        name="tools"
        active={activeItem === 'tools'}
        onClick={handleItemClick}
      />
      <Menu.Item
        name="contact"
        active={activeItem === 'contact'}
        onClick={handleItemClick}
      />
      <Menu.Menu
        position="right"
      >
        <Menu.Item>
          <Image className="unite_logo" src="unite-logo-transparency.png" size="tiny" />
        </Menu.Item>
        <Menu.Item>
          <Button.Group circular="true" size="mini">
            <Button>Login</Button>
            <Button.Or />
            <Button primary>Sign Up</Button>
          </Button.Group>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}
