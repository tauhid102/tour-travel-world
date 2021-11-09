import React, { useEffect, useState } from 'react';
const axios = require('axios').default;
const ManageOrder = () => {
    const [booking, setBooking] = useState([]);
    const [accepted, setAccepted] = useState(true);
    useEffect(() => {
        axios.get(`https://serene-ocean-62381.herokuapp.com/booking/admin`)
            .then(function (response) {
                setBooking(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [accepted]);
    //delete booking
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
                        const restBooking = booking.filter(user => user._id !== id);
                        setBooking(restBooking);
                    }
                })
        }
    }
    const handlestatus = (id) => {
        const ids = { id };
        const proceed = window.confirm('Are you sure, you want to accepted?');
        if (proceed) {
            const url = `https://serene-ocean-62381.herokuapp.com/booking/admin/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(ids)
            })
                .then(res => res.json())
                .then(result => {
                    if (result.modifiedCount > 0) {
                        alert('Accepted Successfully');
                        setAccepted(false);
                    }
                })
        }
    }
    return (
        <div className="container mt-3">
            <h2 className="text-center m-auto pb-1 w-25 border-bottom border-danger border-2">All Booking</h2>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 pt-2">
                {
                    booking.map(book => <div
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
                                    <li className="list-group-item">Date: {book.startDate} & {book.endDate}</li>
                                    <li className="list-group-item">Status: {book.status}</li>
                                    <button onClick={() => handlestatus(book._id)} className="btn btn-warning b-0 mb-1">Acceped Booking</button>
                                    <button onClick={() => handleDelete(book._id)} className="btn btn-danger b-0">Cancel Booking</button>
                                </ul>
                            </div>
                        </div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageOrder;