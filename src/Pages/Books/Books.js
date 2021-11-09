import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './Booking.css';

const Books = () => {
    const { bookID } = useParams();
    const [books, setBooks] = useState();
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const status="Pending";
    useEffect(() => {
        const url = `https://serene-ocean-62381.herokuapp.com/services/${bookID}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setBooks(data));
    }, [])
    const { name, price, stay, img } = books || {};
    const onSubmit = data => {
        fetch('https://serene-ocean-62381.herokuapp.com/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if(result.acknowledged){
                    alert('Booking Successfully');
                    reset();
                }
            })
    };
    return (
        <div className="container">
            <div className="mt-5">
            <h5 className="text-center m-auto pb-1 w-50 border-bottom border-danger border-2 text-danger">Confirmed The Booking</h5>
            <h2 className="text-center">Please Provide Phone Number & Date</h2>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <div className="card mt-5">
                            <img src={img} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">{name}</h4>
                                <h3>{price}</h3>
                                <h4 className="text-danger">{stay}</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <form className="booking-form  mt-5" onSubmit={handleSubmit(onSubmit)}>

                            <input defaultValue={user.displayName} {...register("name",{ required: true })} readOnly/>
                            {errors.name && <span className="error">This field is required</span>}
                            <input defaultValue={user.email} {...register("email", { required: true })} readOnly/>
                            {errors.email && <span className="error">This field is required</span>}
                            <input placeholder="phone number" {...register("phone",{ required: true })} />
                            {errors.phone && <span className="error">This field is required</span>}
                            <input placeholder="Start Date" {...register("startDate",{ required: true })}/>
                            {errors.packedge && <span className="error">This field is required</span>}
                            <input placeholder="End Date" {...register("endDate",{ required: true })}/>
                            {errors.packedge && <span className="error">This field is required</span>}
                            <input defaultValue={name} {...register("packedge",{ required: true })} readOnly/>
                            {errors.packedge && <span className="error">This field is required</span>}   
                            <input defaultValue={price} {...register("price",{ required: true })} readOnly/>
                            {errors.price && <span className="error">This field is required</span>}
                            <input defaultValue={status} {...register("status",{ required: true })} readOnly/>
                            {errors.price && <span className="error">This field is required</span>}
                            <input type="submit" value="Booked" />
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Books;