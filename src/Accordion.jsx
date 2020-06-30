import { Component, createElement } from "react";
import { View, Text } from "react-native";

import Lib from "react-native-collapsible/Accordion";

export class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSections: []
    }
    this._updateSections = this._updateSections.bind(this);
  }

  _updateSections = (activeSections) => {
    this.setState({ activeSections });
  }

  render() {
    const { ds, body, header } = this.props;
    return (
      ds.items ?
        <Lib
          sections={ds.items ? ds.items : null}
          activeSections={this.state.activeSections}
          renderHeader={item => header(item)}
          renderContent={item => body(item)}
          onChange={this._updateSections}
        />
        :
        <View>
          <Text>Loading...</Text>
        </View>
    );
  }
}
