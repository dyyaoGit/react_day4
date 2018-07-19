import React,{Component} from 'react';

class Item extends Component {
    constructor(props) {
        super(props)
    }

    handleClick() {
        this.props.methods.add(this.props.goods.id)
    }

    handleReduce () {
        this.props.methods.reduce(this.props.goods.id)
    }

    render() {
        let {goods,methods} = this.props;
        return (
            <li>
                <div>
                    {goods.name}
                </div>
                <p>
                    {goods.desc}
                </p>
                <div>单价:{goods.price}</div>
                <div className="container">
                    <div className="btns-wrap">
                        <button disabled={goods.count==0?true:false} onClick={this.handleReduce.bind(this)}>
                            -
                        </button>
                        <span style={{padding: "10px",userSelect: "none"}}>
                            {goods.count}
                        </span>
                        <button onClick={this.handleClick.bind(this)}>
                            +
                        </button>
                    </div>
                    <div>
                        小计: {parseInt(goods.count)*parseInt(goods.price)}
                    </div>
                </div>
            </li>
        )

    }
}

export default Item