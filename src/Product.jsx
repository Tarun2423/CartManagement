import React, { useState } from 'react'
import './App.css'
import {
  json,
  useNavigate,
} from 'react-router-dom';
const Product = () => {
  const navigate = useNavigate();
const handleClick = () => { 
  navigate("/login");

}
const cart=JSON.parse(localStorage.getItem("cart") || '[]')
const [product,setProduct]=useState(cart);

React.useEffect(() => {
 localStorage.setItem("cart",JSON.stringify(product));
}, [product]);


const item = React.useRef()

const additems = ()=>{
 let d=(item.current.value) 
 setProduct([...product,d])
 window.localStorage.setItem("cart",JSON.stringify(product));
 item.current.value = '';


}
const handledelete=(id)=>{
  console.log(id)
  setProduct(oldValues => {
    return oldValues.filter((item,i) => i !== id)
  })
}




  return (
    <>
    <div style={{marginBottom:'20px'}} className="nav">
      <p style={{fontSize:"22px",marginLeft:"30px"}}>Cart Management</p>
      <button style={{marginRight:"20px",width:"60px",height:"25px",borderRadius:"13%",cursor:"pointer"}} className='button' onClick={handleClick} >Logout</button>
    </div>
    <div className="add" style={{display:"flex",alignItems:"center",justifyItems:"center",margin:"auto",flexDirection:"row",gap:"1em",marginTop:"10px",marginBottom:"10px",marginLeft:"20px"}}>
    <input style={{outline:"none",border:"none",borderBottom:"1px solid gray"}} type='text' ref={item} ></input>
    <button style={{width:"80px",height:"35px",borderRadius:"13%",cursor:"pointer",}} className='button' onClick={additems}  >Add Item</button>
    </div>
    
<div style={{display:"flex",alignItems:"center",justifyItems:"center",justifyContent:"center",margin:"auto",flexDirection:"row"}} className="items">
<table>
  <tbody>
{product.map((item,i) => (
    
      <tr key={i}>
        <td>
        <p >{item}</p>
        </td>
      
        <td>
        <button style={{marginRight:"20px",width:"60px",height:"25px",borderRadius:"13%",cursor:"pointer"}} className='button' onClick={()=>handledelete(i)} >Delete</button>

        </td>
        </tr>
        
        
      ))}
      </tbody>
      </table>
</div>
 
    </>
  )
}

export default Product