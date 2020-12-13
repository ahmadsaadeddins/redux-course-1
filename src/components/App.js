import React from "react";
import Todos from "./Todos";
import Goals from "./Goals";
import { connect } from "react-redux";
import { handleFetch } from "../actions/shared";

class App extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleFetch());
  }
  render() {
    const { loading } = this.props;
    return (
      <div>
        {loading ? (
          <h3>Loading</h3>
        ) : (
          <div>
            <Todos />
            <Goals />
          </div>
        )}
      </div>
    );
  }
}

export default connect((state) => ({
  loading: state.loading,
}))(App);
