import { Component, createElement } from "react";
import { Text, View } from "react-native";

import Lib from "react-native-collapsible/Accordion";

export class Accordion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeSections: []
        };
        this._updateSections = this._updateSections.bind(this);
        this._renderHeader = this._renderHeader.bind(this);
    }

    _updateSections(activeSections) {
        this.setState({
            activeSections: activeSections
        });
    }

    _renderHeader(item, index, isActive) {
        const { headerOpen, headerClosed } = this.props;
        return isActive ? headerOpen(item) : headerClosed(item);
    }

    render() {
        const { ds, body } = this.props;
        return ds.status === "available" ? (
            <Lib
                sections={ds.items}
                activeSections={this.state.activeSections}
                renderHeader={this._renderHeader}
                renderContent={body}
                onChange={this._updateSections}
                underlayColor={"transparent"}
                expandMultiple={true}
            />
        ) : (
            <View>
                <Text>Loading...</Text>
            </View>
        );
    }
}
