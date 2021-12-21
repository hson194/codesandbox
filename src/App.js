import React, { PureComponent } from "react";

import SVGIcon from "./Component/SVGIcon.react";

const pros_map = {
  research: {
    id: 0,
    label: "Research Suburbs",
    description:
      "Get started swiftly & easily by importing a  demo of your choice in a single click.",
    icon: "search",
    iconVariant: "purple"
  },

  valuation: {
    id: 1,
    label: "Instant Valuation",
    description:
      "Over 30 high quality profession designed re-built website concepts to choose from.",
    icon: "hand_plus",
    iconVariant: "blue"
  },

  property: {
    id: 2,
    label: "Track Property",
    description:
      "Build your website using fully visual interface, using our revolutionary page builder.",
    icon: "building",
    iconVariant: "pink"
  }
};

class App extends PureComponent {
  render() {
    return (
      <div className="App container d-flex flex-column justify-content-center">
        <div className="App-inner">
          <div className="App-title text-center">How it works?</div>
          <div className="row">
            {Object.values(pros_map).map((item) => (
              <div key={item.id} className="col-md-4 col-12">
                <div className="ContentCard text-center d-flex flex-column align-items-center">
                  <div
                    className={`ContentCard-iconWrapper 
                    ContentCard-iconWrapper--${item.iconVariant}
                    d-flex justify-content-center align-items-center
                  `}
                  >
                    <div className="ContentCard-icon">
                      <SVGIcon name={item.icon} variant={item.iconVariant} />
                    </div>
                  </div>

                  <div className="ContentCard-label">{item.label}</div>

                  <div className="ContentCard-description">
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
