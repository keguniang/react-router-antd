import React from 'react'
// HashRouter表示路由的根容器，将来所有与路由相关的东西都要包裹在HashRouter里边，而且一个网站中只需要使用一次HashRouter就好了
// Route表示一个路由规则，有两个重要属性：path,component
// Link 表示路由的链接，好比vue中的<router-link to=''></router-link>
import {HashRouter,Route,Link} from 'react-router-dom'

import Home from '@/component/Home'
import Movie from '@/component/Movie'
import About from '@/component/About'

// 导入日期选择组件
import { DatePicker } from 'antd';
// 全局导入antd样式表
// import 'antd/dist/antd.css'; 
export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        // 当使用HashRouter把APP根组件的元素包裹起来，网站就已经启用路由了
        // 在一个HashRouter中只能有唯一的一个根元素
        // 在一个网站中，只需要使用唯一的一次<HashRouter></HashRouter>就可以了
        return <HashRouter>
            <div>
            <h1>网站的根组件</h1>
            <hr/>
            <Link to='/home'>首页</Link>&nbsp;&nbsp;&nbsp;
            <Link to='/movie/top100/10'>电影</Link>&nbsp;&nbsp;&nbsp;
            <Link to='/about'>关于</Link>&nbsp;&nbsp;&nbsp;

            <hr/>

            {/* Route创建的标签就是路由规则，其中path就是要匹配的路径，component就是要匹配的组件 */}
            {/* Route有两个身份，一个是路由匹配规则，一个是占位符 */}
            <Route path='/home' component={Home}></Route>
            {/* 默认情况下，路由规则是模糊匹配的，若路由可以部分匹配成功，就可以展示路由对应的组件。如果让路由精确匹配，让路由添加exact属性 */}
            {/* 若要匹配参数，可以在匹配规则中，使用:修饰符，表示这个位置匹配到的是参数 */}
            <Route path='/movie/:type/:id' component={Movie} exact></Route>
            <Route path='/about' component={About}></Route>
            <hr/>
            <DatePicker/>
        </div>
        </HashRouter>
    }
}
