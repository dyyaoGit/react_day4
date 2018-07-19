import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './actions/index'
import './App.css'
import Item from './componnets/Item'
import axios from 'axios'

class App extends Component {

    handleInit () {

    }

    getData() {
        this.props.dispatch(actions.initGoods())
    }

    render() {
        let {goods, methods} = this.props;

        function getTotal() {
            let all = 0;
            goods.forEach(good => {
                all += good.count * good.price;
            })
            return all
        }

        return (
            <div className="App">
                <input type="button" value="获取数据" onClick={this.getData.bind(this)}/>
                <h1>用户名:{this.props.users.name}</h1>
                <div>性别:{this.props.users.sex}</div>
                <input type="button" value="获取用户信息" onClick={this.handleInit.bind(this)}/>
                <ul>
                    {
                        goods.map((goods, index) => {
                            return (
                                <Item
                                    goods={goods}
                                    key={index}
                                    methods={methods}>

                                </Item>
                            )
                        })

                    }
                </ul>

                <h2>
                    总计: {getTotal()}

                </h2>
            </div>
        );
    }
}

export default connect(
    state => {
        return {
            goods: state.goodsReducer.goods,
            users: state.usersReducer
        }
    },
    dispatch => {
        return {
            actions: bindActionCreators(actions, dispatch)
        }
    }
)(App);
