import React, { useEffect, useState } from "react";
import { Link, redirect } from "react-router-dom";


export default function ShowProduct(){
    const[data,setData]=useState([])

    useEffect(()=>{
       userList()
    },[])

    function userList(){
        fetch(" http://localhost:3000/products")
        .then((res)=>{
            res.json()
        .then((resp)=>{
            setData(resp)
            
        })
        })
    }
    

    function deleteUser(id){
fetch(" http://localhost:3000/products/"+id,
{
    method:"DELETE"
}).then((res)=>{
    res.json().then((resp)=>{
        console.log(resp)
        userList()
    })
})

    }
   
    return(
      
        
       
    
        <React.Fragment>
        <br/>
        <br/>
        <h1 style={{textAlign:"center",fontSize:"28px"}}>SHOW <b style={{color:"maroon"}}>USERS RECORD</b></h1>
       <table style={{width:"100%"}}>
       <thead >
        <tr>
        <th scope="col">Id</th>
        <th scope="col">Name</th>
        <th scope="col">Price</th>
        <th scope="col">Selling Price</th>
        <th scope="col">Sales Count</th>
        <th scope="col">Image</th>
        <th scope="col">Edit</th>
        <th scope="col">Delete</th>
           
        </tr>
       </thead>
       <tbody>
        {
            data.map((item)=>
            <tr>
               <td>{item.id}</td> 
               <td>{item.name}</td> 
               <td>{item.price}</td> 
               <td>{item.sellingprice}</td> 
               <td>{item.salescount}</td> 
               <td><img height="100px" src={item.imageurl} alt=""/></td> 
               

               <td><Link to="/edituser"><button onClick={()=>edit(item.id)} style={{background:"green",height:"40px",width:"100px",borderRadius:"10px",color:"white",fontSize:"15px",border:"1px solid white"}}>Edit</button> </Link></td>
               <td><Link to="/showuser"> <button onClick={()=>deleteUser(item.id)} style={{background:"maroon",height:"40px",width:"100px",borderRadius:"10px",color:"white",fontSize:"15px",border:"1px solid white"}}>Delete</button> </Link></td>
            </tr>
            )
        }
       </tbody>
       </table>
       </React.Fragment>
    )


    function edit(id){
        window.localStorage.setItem("st",JSON.stringify(id))
        
    }
}