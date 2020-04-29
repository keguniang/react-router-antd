import React from 'react'
                         
export default class Movie extends React.Component {
   constructor(props) {
        super(props)
        this.state = {
            routeParams: props.match.params
        }
   }
   render() {
    //    路由中传递的参数
    console.log(this.props.match.params);
       return <div>
           Movie--- {this.state.routeParams.type}-----{this.state.routeParams.id}
       </div>
   }
}