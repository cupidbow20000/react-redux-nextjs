import React from "react"
import { Button } from "antd"

import Notification from "components/Notification"
import { authGetInfo } from "actions"
import { pageWrapper } from "utils/wrapper"

class Index extends React.Component {
  static async getInitialProps(ctx) {
    // do something in server here!
    const { store } = ctx

    const sendString = "I Got You in Server! Dont believe? You can view page source and find me there!..."
    store.dispatch(authGetInfo(sendString))

    return {}
  }

  render() {
    return (
      <div>
        <div className="hero">
          <div className="hero-body">
            <h1>Welcome to the boilerplate!</h1>
            <h3>{this.props.auth.info}</h3>
            <div>
              <Button
                type="danger"
                style={{ marginTop: 20 }}
                onClick={() => Notification.success("Yay!", "You clicked!")}
              >
                Click Me!
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

export default pageWrapper(mapStateToProps, { authGetInfo })(Index)
