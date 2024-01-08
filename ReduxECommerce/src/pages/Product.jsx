import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import Modal from "../components/Modal";
import Input from "../components/Input";
import Button from "../components/Button";
import { useEffect, useState } from "react";
import { createDataFunc, updateDataFunc } from "../redux/dataSlice";
import { modalFunc } from "../redux/modalSlice";
import { nanoid } from "nanoid";
import { useLocation, useNavigate } from "react-router-dom";

const Product = () => {
    const dispatch=useDispatch();
    const location=useLocation()
    const navigate=useNavigate()
    const {modal}=useSelector(state=>state.modal)
    const {data,keyword}=useSelector(state=>state.data)
    const [productInfo,setProductInfo]=useState({name:"",price:"",url:""})
    const onChangeFunc=(e,type)=>{
        if(type === "url"){
            setProductInfo(prev=>({...prev,[e.target.name]:URL.createObjectURL(e.target.files[0])}))
        }else{  
            setProductInfo(prev=>({...prev,[e.target.name]:e.target.value}))
        }
    }
    let loc=location?.search.split("=")[1];
    useEffect(()=>{
        if(loc){
            setProductInfo(data.find(dt=>dt.id == loc))
        }
    },[loc])
    console.log('data', data)
    const buttonFunc=()=>{
        setProductInfo({name:"",price:"",url:""})
        dispatch(createDataFunc({...productInfo,id:nanoid()}))
        dispatch(modalFunc())
    }
    const buttonUpdateFunc=()=>{
        dispatch(updateDataFunc({...productInfo,id:loc}))
        dispatch(modalFunc())
        navigate("/")
    }


    const contentModal=(
        <>
            <Input value={productInfo.name} type={"text"} placeholder={"Ürün Adı"} name={"name"} id={"name"} onChange={e=>onChangeFunc(e,"name")}/>
            <Input value={productInfo.price} type={"text"}placeholder={"Ürün Fiyatı"} name={"price"} id={"price"} onChange={e=>onChangeFunc(e,"price")}/>
            <Input type={"file"} placeholder={"Ürün Resmi"} name={"url"} id={"url"} onChange={e=>onChangeFunc(e,"url")}/>
            <Button btnText={loc ? "Ürünü Güncelle":"Ürün Oluştur"} onClick={loc ? buttonUpdateFunc:buttonFunc}/>
        </>
    )

    const filteredItems= data.filter(dt=>dt.name.toLowerCase().includes(keyword.toLowerCase()))
    console.log('filteredItems', filteredItems)
  return (
    <>
      <div className="flex items-center flex-wrap">
        {
            filteredItems?.map((dt,i)=>(
                <ProductCard key={i} dt={dt}/>
            ))
        }
      </div>
      
      {modal && <Modal title={loc ? "Ürünü Güncelle":"Ürün Ekle"} content={contentModal}/>}
    </>
  );
};

export default Product;
