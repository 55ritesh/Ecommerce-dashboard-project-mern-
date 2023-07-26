import React ,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
const AddProduct = () => {

   const [name, setName] = useState('');
   const [price, setPrice] = useState('');
   const [category, setCategory] = useState('');
   const [company, setCompany] = useState('');
   const [error, setError] = useState(false);
   const navigate = useNavigate()

   const addProductfunc= async ()=>{

 //========= validation of input fields=================================// 

    if(!name || !price || !category || !company)
    {
        setError(true);
        return false;
    }


//================add product API integration ==============================//    

    const userId = JSON.parse(localStorage.getItem('user'))._id;
    let result = await fetch("https://ecommerce-dashboard-6lii.onrender.com/add-product",{
        method: 'post',
        body: JSON.stringify({name, price, category, company, userId}),
        headers:{
            "Content-Type":"application/json"
        }
    });
    result = await result.json();
    navigate("/")
    
   }

  return (
    <div className='prd'>
    <h1>AddProduct</h1>

    <input className='inputBox' type="text" placeholder='Enter Product name'
     value={name}  onChange={(e)=>{setName(e.target.value)}} />
     {error && !name && <span className='invalid-input'>Enter valid name</span>}

    <input className='inputBox' type="text" placeholder='Enter Product price'
     value={price} onChange={(e)=>{setPrice(e.target.value)}} />
     {error && !price && <span className='invalid-input'>Enter valid price</span>}

    <input className='inputBox' type="text" placeholder='Enter Product category'
     value={category} onChange={(e)=>{setCategory(e.target.value)}} />
     {error && !category && <span className='invalid-input'>Enter valid category</span>}

    <input className='inputBox' type="text" placeholder='Enter Product company'
     value={company} onChange={(e)=>{setCompany(e.target.value)}} />
    {error && !company && <span className='invalid-input'>Enter valid company</span>}
    
    <button onClick={addProductfunc} className='appbutton'>Add Product</button>
    </div>
  )

}

export default AddProduct