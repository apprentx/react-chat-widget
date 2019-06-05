import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Popup from "reactjs-popup";

import close from "../../../../../../../assets/clear-button.svg";
import tools from "../../../../../../../assets/iconfinder-icon.svg";
import exit from "../../../../../../../assets/iconfinder_button_close_352915.svg";

import "./style.scss";

class Header extends PureComponent {
  constructor(props) {
    super(props);

    this.popupRef = React.createRef();
  }

  handleMenuSelection = () => {
    this.popupRef.current.closePopup();
  };

  render() {
    const {
      title,
      subtitle,
      toggleChat,
      showCloseButton,
      titleAvatar,
      menuItems
    } = this.props;

    return (
      <div className="rcw-header">
        {console.log("showCloseButton", showCloseButton)}

        <h4 className="rcw-title">
          {titleAvatar && (
            <img src={titleAvatar} className="avatar" alt="profile" />
          )}
          <span>{title}</span>
          {menuItems &&
            menuItems.length > 0 && (
              <Popup
                ref={this.popupRef}
                closeOnDocumentClick
                className="popup"
                trigger={
                  <button className="rcw-tools-button">
                    <img src={tools} className="rcw-tools" alt="tools" />
                  </button>
                }
                position="right top"
              >
                {menuItems.map(item => (
                  <div
                    className="item"
                    key={item.label}
                    onClick={() => {
                      this.handleMenuSelection();
                      item.onClick();
                    }}
                  >
                    {item.label}
                  </div>
                ))}
              </Popup>
            )}
        </h4>
        <span>{subtitle}</span>
      </div>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  toggleChat: PropTypes.func,
  showCloseButton: PropTypes.bool,
  titleAvatar: PropTypes.string
};
export default Header;
