import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';
const AddService = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch('https://serene-ocean-62381.herokuapp.com/services', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(result=>{
        if(result.insertedId){
            alert('Service add Successfully');
            reset();
        }
    })
    };
    
    return (
        <div className="add-service mt-5">
            <h2 className="text-center m-auto pb-1 w-50 border-bottom border-danger border-2">Please Add Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input placeholder="Service Name" {...register("name", { required: true })} />
                <input placeholder="Price"  {...register("price", { required: true })} />
                <input placeholder="Ex:2night & 3days" {...register("stay", { required: true })} />
                <input placeholder="Image Url" {...register("img", { required: true })} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;