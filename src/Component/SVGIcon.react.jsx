import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import Icons from "../const/Icons.react";

class SVGIcon extends PureComponent {
  render() {
    let { name } = this.props;
    const icon = Icons[name];

    if (!icon) {
      console.error(`Not found icon with name: ${name}`);
      return;
    }
    return (
      <svg
        width={icon.width}
        height={icon.height}
        viewBox={icon.viewBox}
        fill={this.props.fill}
      >
        {icon.paths.map((path, i) => (
          <path key={i} d={path.d} fill={path.fill} />
        ))}
      </svg>
    );
  }
}

SVGIcon.propTypes = {
  name: PropTypes.string.isRequired
};

export default SVGIcon;
