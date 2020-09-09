import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function MenuContent (props) {
    const { children, value, index, ...other} = props
    return (
        <div
            hidden = {value !== index}
            id= {`menu-conten-${index}`}
            {...other}
        >
            {
                value === index && (
                    <Content>{children}</Content>
                )
            }
        </div>
    )
}

function allContentProps (index) {
    return {
        className: `site-layout-background-${index}`,
        style: {
            padding: 24,
            margin: 0,
            minHeight: 280,
        },
        index: index
    }
}

export const initialState = {
    menuIndex: 1

}

export const types = {
    CHANGE_MENU: "CHANGE_MENU"
}

export const actions = {
    changeMenu(key) {
        return{type: types.CHANGE_MENU, payload: key}
    }
}

export function reducer(state = initialState, action) {
    const payload = action.payload
    switch (action.type) {
        case types.CHANGE_MENU:
            return {...state, menuIndex: payload}
        default:
            return state;
    }
}

class LayoutComponent extends Component {
    constructor (props) {
        super(props)
    }

    componentDidMount() {

    }

    componentDidUpdate () {

    }
    handle = (event) => {
        this.props.actions.changeMenu(parseInt(event.key))
    }

    render() {
        return(
            <div><style jsx>{`
            .logo {
                width: 120px;
                height: 31px;
                background: rgba(255, 255, 255, 0.2);
                margin: 16px 28px 16px 0;
                float: left;
            }
            .site-layout-background {
            background: #fff;
            }
            .logo {
                background: rgba(255, 255, 255, 0.3);
            }
            `}
            </style>
                <Layout>
                    <Header className="header">
                    <div className="logo" />
                    {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item key="1">nav 1</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                    </Menu> */}
                    </Header>
                    <Layout>
                    <Sider width={200} className="site-layout-background">
                        <Menu onClick={this.handle}
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                        >
                        <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                            <Menu.Item key="1">option1</Menu.Item>
                            <Menu.Item key="2">option2</Menu.Item>
                            <Menu.Item key="3">option3</Menu.Item>
                            <Menu.Item key="4">option4</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                            <Menu.Item key="5">option5</Menu.Item>
                            <Menu.Item key="6">option6</Menu.Item>
                            <Menu.Item key="7">option7</Menu.Item>
                            <Menu.Item key="8">option8</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
                            <Menu.Item key="9">option9</Menu.Item>
                            <Menu.Item key="10">option10</Menu.Item>
                            <Menu.Item key="11">option11</Menu.Item>
                            <Menu.Item key="12">option12</Menu.Item>
                        </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <MenuContent {...allContentProps(1)} value={this.props.menuIndex}>
                        menu 1
                        </MenuContent>
                        <MenuContent {...allContentProps(2)} value={this.props.menuIndex}>
                        menu 2
                        </MenuContent>
                        <MenuContent {...allContentProps(3)} value={this.props.menuIndex}>
                        menu 3
                        </MenuContent>
                    </Layout>
                    </Layout>
                </Layout>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    menuIndex: state.LayoutComponent.menuIndex
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
})

const view = connect(mapStateToProps, mapDispatchToProps)(LayoutComponent)

export { view }
