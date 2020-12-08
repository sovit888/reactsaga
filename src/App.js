import React from 'react'
import {connect} from "react-redux"
import {increase,decrease} from "./store/action"

const App = ({counter,increase,decrease}) => {
  return (
    <> 
    <div className="container">
  <h1>The value is {counter}</h1>  <button className="btn btn-primary" onClick={increase}>Increase</button><br/>
  <button className="btn btn-warning mt-3" onClick={decrease}>Decrease</button>
  </div>
</>
  )
}
const mapStateToProps=(state)=>{
  return {
    counter:state.counter
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
    increase:()=>dispatch(increase()),
    decrease:()=>dispatch(decrease())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)
