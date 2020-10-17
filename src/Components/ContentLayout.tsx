import { Layout } from "antd";
import React, { Component } from "react";
import { MenuList } from "../Utilities/Constants";
import WindowsPowerPlan from "./Content/WindowsPowerPlan";

const { Header, Content, Footer } = Layout;

interface Props {
  currentPage: MenuList;
}

interface State {}

export default class ContentLayout extends Component<Props, State> {
  render() {
    return (
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, textAlign: "center" }}
          >
            {this.props.currentPage === "Windows Power Plan" ? (
              <WindowsPowerPlan />
            ) : (
              "ok"
            )}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}
