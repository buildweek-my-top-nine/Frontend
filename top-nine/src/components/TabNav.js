import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const Nav = props => <NavLink exact {...props} activeClassName="active" />;

const createLabel = (iconName, labelText) => (
  <span>
    <Icon name={iconName} />
    {labelText}
  </span>
);

const welcomeLabel = createLabel("home", "My Profile");
const characterLabel = createLabel("user", "Dashboard");
const logoutLabel = createLabel("sign-out", "Log Out");

const panes = [
  {
    menuItem: <Menu.Item key="home" as={Nav} to={`/myprofile`} content={welcomeLabel} />
  },
  {
    menuItem: (
      <Menu.Item
        key="characters"
        as={Nav}
        to={`/dashboard`}
        content={characterLabel}
      />
    )
  },
  {
    menuItem: (
      <Menu.Item
        key="episodes"
        as={Nav}
        to={`/`}
        content={logoutLabel}
      />
    )
  }
];

const TabNav = () => <Tab panes={panes} renderActiveOnly={false} />;

export default TabNav;