import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
const axios = require('axios').default;
const MyBooking = () => {
    const [mybooking, setMybooking] = useState([]);
    const { user,userEmail } = useAuth();
    const [loading,setLoading]=useState(true);
    useEffect(() => {
      console.log('user email',user.email);
      console.log('user email',userEmail);
        axios.get(`https://serene-ocean-62381.herokuapp.com/booking/?email=${user.email}`)
            .then(function (response) {

                setMybooking(response.data);
                console.log(response.data);
                setLoading(false);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://serene-ocean-62381.herokuapp.com/booking/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    if (result.deletedCount > 0) {
                        alert('Cancel Successfully');
                        const restBooking = mybooking.filter(user => user._id !== id);
                        setMybooking(restBooking);
                    }
                })
        }
    }
    return (
        <div className="container mt-3">
            <h2 className="text-center m-auto pb-1 w-25 border-bottom border-danger border-2">Your Booking</h2>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 pt-2">
                {
                    loading?
                    (<div class="d-flex mx-auto justify-content-center">
                    <div class="spinner-border" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </div>)
                    :
                    (mybooking.map(book => <div
                        key={book._id}
                    >
                        <div className="col">
                            <div class="card">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Name: {book.name}</li>
                                    <li className="list-group-item">Email: {book.email}</li>
                                    <li className="list-group-item">Phone: {book.phone}</li>
                                    <li className="list-group-item">Place: {book.packedge}</li>
                                    <li className="list-group-item">Price: {book.price}</li>
                                    <li className="list-group-item">Status: {book.status}</li>
                                    <button onClick={() => handleDelete(book._id)} className="btn btn-danger b-0">Cancel Booking</button>
                                </ul>
                            </div>
                        </div>

                    </div>))
                }
            </div>
        </div>
    );
};

export default MyBooking;