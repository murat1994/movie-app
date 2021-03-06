import React, { Component } from "react";
import { Container, Image, Menu, Visibility } from "semantic-ui-react";
import { menuStyle, fixedMenuStyle } from "../helpers/styleHelper";
import { Link,NavLink } from "react-router-dom";


export default class Header extends Component {
  state = {
    menuFixed: null,
    overlayFixed: null,
  };
  stickOverlay = () => this.setState({ overlayFixed: true });
  stickTopMenu = () => this.setState({ menuFixed: null });
  unStickOverlay = () => this.setState({ overlayFixed: null });
  unStickTopMenu = () => this.setState({ menuFixed: false });
  render() {
    const { menuFixed, overlayFixed, overlayRect } = this.state;
    return (
      <div>
        <Visibility
          onBottomPassed={this.stickTopMenu}
          onBottomVisible={this.unStickTopMenu}
          once={false}
        >
          <Menu
            borderless
            fixed={menuFixed ? "top" : undefined}
            style={menuFixed ? fixedMenuStyle : menuStyle}
          >
            <Container text>
              <Menu.Item as={Link} to="/" exact="true">
                <Image
                  size="mini"
                  src="https://react.semantic-ui.com/logo.png"
                />
              </Menu.Item>
              <Menu.Item as={Link} to="/" header exact="true" >Movies App</Menu.Item>
              <Menu.Item as={NavLink} to="/movies" exact>
                Movies
                </Menu.Item>
                <Menu.Item as={NavLink} to="/movies/new" exact>
                Add New
              </Menu.Item>
            </Container>
          </Menu>
        </Visibility>
      </div>
    );
  }
}