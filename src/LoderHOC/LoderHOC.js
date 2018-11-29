import React,{Component} from 'react';
const LoaderHOC =(WarppedComponent)=>{
return class LoaderHOC extends Component{
constructor(props){
    super(props)
    this.state={
        show:true
    }
}
componentDidMount = () => 
    setTimeout(()=>{
        this.setState({
            show:false
        })
       
    },3000);

render(){
    return  this.state.show ? <div className="spiner"></div> : <WarppedComponent/>
        
}
}
}
export default LoaderHOC 