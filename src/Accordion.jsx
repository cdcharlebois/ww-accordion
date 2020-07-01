import { Component, createElement } from "react";
import { View, Text } from "react-native";

import Lib from "react-native-collapsible/Accordion";

const styles = {
  header: {
    padding: 5
  },
  headerText: {
    textAlign: "center"
  }
}

export class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSections: []
    }
    this._updateSections = this._updateSections.bind(this);
    this._renderHeader = this._renderHeader.bind(this);
  }

  _updateSections = (activeSections) => {
    this.setState({
      activeSections: activeSections
    });
  }

  _renderHeader = (item, index, isActive) => {
    // const { attr } = this.props;
    // return (
    //   <View style={styles.header}>
    //     <Text style={styles.headerText}>{attr(item).displayValue}</Text>
    //   </View>
    // )
    const { headerOpen, headerClosed } = this.props;
    if (isActive) {
      return headerOpen(item)
    } else {
      return headerClosed(item)
    }
  }

  render() {
    const { ds, body } = this.props;
    return (
      ds.items ?
        <Lib
          sections={ds.items}
          activeSections={this.state.activeSections}
          renderHeader={this._renderHeader}
          renderContent={(item) => body(item)}
          onChange={this._updateSections}
          underlayColor={"transparent"}
          expandMultiple={true}
        />
        :
        <View>
          <Text>Loading...</Text>
        </View>
    );
  }
}
