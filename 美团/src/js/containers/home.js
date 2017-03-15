/**
 * Created by chenyang on 17/3/9.
 */
import React,{ Component } from 'react'
import Header from "../components/header.js"
import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';
import "../../css/home.css";

const Sort = () => (

        <Carousel className="my-carousel"
                  dots={true} dragging={true} swiping={true} autoplay={false}
        >
            <div className="v-item">
                <ul>
                    <li>
                        <a href="javascript:;">
                            <span className="icon-font" style={{"backgroundColor":'#fd9d21'}}>&#xe610;</span>
                            <span className="sort-name">美食</span>
                        </a>

                    </li>
                    <li>
                        <a href="javascript:;">
                            <span className="icon-font" style={{"backgroundColor":'#ff6767'}}>&#xe600;</span>
                            <span className="sort-name">猫眼电影</span>
                        </a>

                    </li>
                    <li>
                        <a href="javascript:;">
                            <span className="icon-font" style={{"backgroundColor":'#8a90fa'}}>&#xe633;</span>
                            <span className="sort-name">酒店</span>
                        </a>

                    </li>
                    <li>
                        <a href="javascript:;">
                            <span className="icon-font" style={{"backgroundColor":'#fed030'}}>&#xe61a;</span>
                            <span className="sort-name">休闲娱乐</span>
                        </a>

                    </li>
                    <li>
                        <a href="javascript:;">
                            <span className="icon-font" style={{"backgroundColor":'#fd9d21'}}>&#xe619;</span>
                            <span className="sort-name">外卖</span>
                        </a>

                    </li>
                    <li>
                        <a href="javascript:;">
                            <span className="icon-font" style={{"backgroundColor":'#fed030'}}>&#xe614;</span>
                            <span className="sort-name">KTV</span>
                        </a>

                    </li>
                    <li>
                        <a href="javascript:;">
                            <span className="icon-font" style={{"backgroundColor":'#4dc6ee'}}>&#xe613;</span>
                            <span className="sort-name">周边游</span>
                        </a>

                    </li>
                    <li>
                        <a href="javascript:;">
                            <span className="icon-font" style={{"backgroundColor":'#ff80c2'}}>&#xe606;</span>
                            <span className="sort-name">丽人</span>
                        </a>

                    </li>
                    <li>
                        <a href="javascript:;">
                            <span className="icon-font" style={{"backgroundColor":'#fd9d21'}}>&#xe62b;</span>
                            <span className="sort-name">小吃快餐</span>
                        </a>

                    </li>
                    <li>
                        <a href="javascript:;">
                            <span className="icon-font" style={{"backgroundColor":'#599eec'}}>&#xe601;</span>
                            <span className="sort-name">机票/火车票</span>
                        </a>

                    </li>
                </ul>
            </div>
            <div className="v-item">
                <ul>
                    <li>
                        <a href="javascript:;">
                            <span className="icon-font" style={{"backgroundColor":'#fd9d21'}}>&#xe610;</span>
                            <span className="sort-name">美食</span>
                        </a>

                    </li>
                    <li>
                        <a href="javascript:;">
                            <span className="icon-font" style={{"backgroundColor":'#ff6767'}}>&#xe600;</span>
                            <span className="sort-name">猫眼电影</span>
                        </a>

                    </li>
                    <li>
                        <a href="javascript:;">
                            <span className="icon-font" style={{"backgroundColor":'#8a90fa'}}>&#xe633;</span>
                            <span className="sort-name">酒店</span>
                        </a>

                    </li>
                    <li>
                        <a href="javascript:;">
                            <span className="icon-font" style={{"backgroundColor":'#fed030'}}>&#xe61a;</span>
                            <span className="sort-name">休闲娱乐</span>
                        </a>

                    </li>
                    <li>
                        <a href="javascript:;">
                            <span className="icon-font" style={{"backgroundColor":'#fd9d21'}}>&#xe619;</span>
                            <span className="sort-name">外卖</span>
                        </a>

                    </li>
                    <li>
                        <a href="javascript:;">
                            <span className="icon-font" style={{"backgroundColor":'#fed030'}}>&#xe614;</span>
                            <span className="sort-name">KTV</span>
                        </a>

                    </li>
                    <li>
                        <a href="javascript:;">
                            <span className="icon-font" style={{"backgroundColor":'#4dc6ee'}}>&#xe613;</span>
                            <span className="sort-name">周边游</span>
                        </a>

                    </li>
                    <li>
                        <a href="javascript:;">
                            <span className="icon-font" style={{"backgroundColor":'#ff80c2'}}>&#xe606;</span>
                            <span className="sort-name">丽人</span>
                        </a>

                    </li>
                    <li>
                        <a href="javascript:;">
                            <span className="icon-font" style={{"backgroundColor":'#fd9d21'}}>&#xe62b;</span>
                            <span className="sort-name">小吃快餐</span>
                        </a>

                    </li>
                    <li>
                        <a href="javascript:;">
                            <span className="icon-font" style={{"backgroundColor":'#599eec'}}>&#xe601;</span>
                            <span className="sort-name">机票/火车票</span>
                        </a>

                    </li>
                </ul>
            </div>
        </Carousel>

);

const Block = React.createClass({
    getInitialState: function() {
        return {
            hour: 1,
            min: 0,
            sec: 0
        };
    },
    componentDidMount : function () {
        var EndTime= new Date().getTime()+3600000;
        this.timer = setInterval(function () {
            var NowTime = new Date().getTime();
            var t =EndTime - NowTime;
            var d=0;
            var h=0;
            var m=0;
            var s=0;
            if(t>=0){
                d=Math.floor(t/1000/60/60/24);
                h=Math.floor(t/1000/60/60%24);
                m=Math.floor(t/1000/60%60);
                s=Math.floor(t/1000%60);
            }
            this.setState({
                hour: h,
                min: m,
                sec: s
            });
        }.bind(this), 500);
    },
    componentWillUnmount: function() {
        this.timer && clearTimeout(this.timer);
    },
    render: function () {
        return (
            <dl className="block-list">
                <dd className="dd-padding box">
                    <div className="left">
                        <a href="javascript:;" className="react">
                        <span className="info">
                            <strong>我们约吧</strong>
                            <small>恋人家人好朋友</small>
                        </span>
                            <span className="imgbox">
                            <img src="./img/fe4d2e89827aa829e12e2557ded363a112289.png" />
                        </span>
                        </a>
                    </div>
                    <div className="right">
                        <div className="top">
                            <a className="react" href="javascript:;">
                            <span className="info">
                                <strong>低价超值</strong>
                                <small>十元惠生活</small>
                            </span>
                                <span className="imgbox">
                                <img src="./img/a06d0c5c0a972e784345b2d648b034ec9710.jpg" />
                            </span>
                            </a>
                        </div>
                        <div className="bottom box">
                            <a className="react scense" href="javascript:;">
                            <span className="info">
                                <strong>工作简餐</strong>
                                <small>实惠方便选择多</small>
                            </span>
                                <span className="imgbox">
                                <img src="./img/scense-img.png" />
                            </span>
                            </a>
                            <a className="react mingdian" href="javascript:;">
                            <span className="info">
                                <strong>名店抢购</strong>
                                <small>距离结束</small>
                            </span>
                                <br/>
                                <span className="time-panel">
                                <span className="span-time hour">{this.state.hour}</span>
                                :
                                <span className="span-time min">{this.state.min}</span>
                                :
                                <span className="span-time sec">{this.state.sec}</span>
                            </span>
                            </a>
                        </div>
                    </div>
                </dd>
            </dl>
        )
    }
});




const GuessLikeList = React.createClass({
    render: function () {
        var lists = this.props.data;
        return (
            <div className="opacity0to1">
                {
                    lists.map((item, index) =>
                    <dd key={index}>
                        <a className="react" href="javascript:;">
                            <div className="box">
                                <div className="imgbox">
                                    <img src={item.imgSrc} />
                                </div>
                                <div className="box-flex detail">
                                    <div className="title text-ellipsis">
                                        {item.name}
                                    </div>
                                    <div className="intro text-ellipsis">
                                        {item.intro}
                                    </div>
                                    <div className="price">
                                                <span>
                                                    {item.price}
                                                </span>
                                        <span>
                                                    元
                                                </span>
                                        <span>
                                                    门市价:{item.retailPrice}元
                                                </span>
                                        <span>
                                                    已售:{item.sold}
                                                </span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </dd>
                )
                }

            </div>

        )
    }
});


const   GuessLike = React.createClass({

    render: function () {
        return (
            <div className="guess-like">
                <dl>
                    <dd>
                        <dl className="list">
                            <dt>猜你喜欢</dt>
                            <GuessLikeList data={this.props.data}></GuessLikeList>
                            <dd className="more">
                                <a className="react" href="javascript:;">
                                    <span>查看全部团购</span>
                                    <span>></span>
                                </a>
                            </dd>
                        </dl>
                    </dd>
                </dl>
            </div>
        );
    }
});


const Footer = React.createClass({
    render : function () {
        return(
            <footer>
                <div className="footer-bar">
                    <a className="react" href="javascript:;">

                    </a>
                </div>
            </footer>
        )
    }
});


class Home extends Component {
    render() {
        return(
            <div>
                <Header />
                <Sort />
                <Block />
                <GuessLike data={likeList}/>
                <Footer/>
            </div>
        )
    }
}
//模拟列表数据
const likeList = [
    {
        name : "华莱士",
        price : "11",
        retailPrice : "17",
        intro : "[重庆等]单人餐，提供免费WiFi",
        sold : "177123",
        imgSrc : "./img/hualaishi.jpg"
    },
    {
        name : "一直酸奶牛",
        price : "8.8",
        retailPrice : "10",
        intro : "[重庆等]酸奶紫米露3选1",
        sold : "2200768",
        imgSrc : "./img/suannainiu.jpg"
    },
    {
        name : "正新鸡排",
        price : "9.5",
        retailPrice : "20",
        intro : "[全国]【官方】正新鸡排尊享版单人餐",
        sold : "14022515",
        imgSrc : "./img/jipai.jpg"
    },
    {
        name : "阿利与艾德碳烤麻里牛排海鲜自助烤肉",
        price : "66.5",
        retailPrice : "88",
        intro : "[6店通用]自助晚餐",
        sold : "169232",
        imgSrc : "./img/ali.jpg"
    },
    {
        name : "华莱士",
        price : "11",
        retailPrice : "17",
        intro : "[重庆等]单人餐，提供免费WiFi",
        sold : "177123",
        imgSrc : "./img/hualaishi.jpg"
    },
    {
        name : "一直酸奶牛",
        price : "8.8",
        retailPrice : "10",
        intro : "[重庆等]酸奶紫米露3选1",
        sold : "2200768",
        imgSrc : "./img/suannainiu.jpg"
    },
    {
        name : "正新鸡排",
        price : "9.5",
        retailPrice : "20",
        intro : "[全国]【官方】正新鸡排尊享版单人餐",
        sold : "14022515",
        imgSrc : "./img/jipai.jpg"
    },
    {
        name : "阿利与艾德碳烤麻里牛排海鲜自助烤肉",
        price : "66.5",
        retailPrice : "88",
        intro : "[6店通用]自助晚餐",
        sold : "169232",
        imgSrc : "./img/ali.jpg"
    },
    {
        name : "华莱士",
        price : "11",
        retailPrice : "17",
        intro : "[重庆等]单人餐，提供免费WiFi",
        sold : "177123",
        imgSrc : "./img/hualaishi.jpg"
    },
    {
        name : "一直酸奶牛",
        price : "8.8",
        retailPrice : "10",
        intro : "[重庆等]酸奶紫米露3选1",
        sold : "2200768",
        imgSrc : "./img/suannainiu.jpg"
    },
    {
        name : "正新鸡排",
        price : "9.5",
        retailPrice : "20",
        intro : "[全国]【官方】正新鸡排尊享版单人餐",
        sold : "14022515",
        imgSrc : "./img/jipai.jpg"
    },
    {
        name : "阿利与艾德碳烤麻里牛排海鲜自助烤肉",
        price : "66.5",
        retailPrice : "88",
        intro : "[6店通用]自助晚餐",
        sold : "169232",
        imgSrc : "./img/ali.jpg"
    }
]
export default Home