import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const namrArry =['Jahid', 'nasir', 'rasel','rubel', 'sumon'];
  const products = [
    {name: "photoshop", price:"$955"},
    {name: "islustrator", price:"$65.00"},
    {name: "PDF REader", price:"$50.00"}
  ]
  // const productsName = products.map(product => product.name)
  // console.log(productsName)
  // const namArrys= namrArry.map(name => name)
  // console.log(namArrys)
  return (

    <div className="App">
      <header className="App-header">
        <p>I am a react persion</p>
        <Users></Users>
      <Counter></Counter>
      <Decrement></Decrement>
        <ul>

        {namrArry.map(name =><li>{name}</li>)}
        {products.map(product => <li>{product.name}</li>)}

         {/* <li>{namrArry[0]}</li>
         <li>{namrArry[1]}</li>
         <li>{namrArry[2]}</li>
         <li>{namrArry[3]}</li>
         <li>{namrArry[4]}</li> */}
         
        </ul>
        {products.map(pd => <Product product={pd}></Product>)}
        {/* <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product> */}
        <Persion name={namrArry[1]} dreams="Programmer"></Persion>
        <Persion name="Nasir" dreams="Business"></Persion>
        <Persion name="Rasel" dreams="Food Jobs"></Persion>
        <Persion name="Mufrat" dreams="Simple Jobs"></Persion>
      </header>
    </div>
  );
}

function Users(){
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return(
    <div>
      <h3>Dynamic Users:{users.length} </h3>
    <ul>
    {
        users.map(user => <li>{user.name}</li>)
      }
    </ul>
    </div>
  )
}
function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease = () => {
    // const newCount = count + 1;
    setCount(count + 1)
  }
  const handleDecrease = () => {
    setCount(count - 1)
  }
  return(
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleDecrease}>Decrease</button>
      <button onMouseOver={handleIncrease}>Increase</button>
    </div>
  )
}

function Decrement(){
  const [decrease, setCount] = useState(10);
  const decreaseHandler = () => {
    const newDecrement = decrease -1;
    setCount(newDecrement)
  }

  return(
    <div>
      <h2>Decrease: {decrease}</h2>
      <button onClick={decreaseHandler}>Decrease</button>
    </div>
  )
}
function Product(props){
  const produtStyle ={
    border:'1px  solid gray',
    borderRadius: '5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px', 
    float:'left'
  }
  const buyBtn ={
    padding:'7px 15px',
    border:'none',
    backgroundColor:'orange',
    letterSpacing:'1.5px',
    borderRadius:'4px'
  }

  const {name, price} = props.product;
  return(
    
    <div style={produtStyle}>
      <h3>{props.product.name}</h3>
      <h4>{props.product.price}</h4>
      <button style={buyBtn}>Buy Now</button>
    </div>
  
  )
}


function Persion(props){


  const personStyle = {
    color:'red',
    border:'1px solid blue',
    padding:'10px',
    margin:'15px',
    boxShadow:'#1d155f 7px 18px 23px',
    width:'350px'
  }
  return(
   <div style={personStyle}>
   <h2>Name: {props.name}</h2>
  <h5>Dreams: {props.dreams}</h5>
  </div>
  )
      
}

export default App;
