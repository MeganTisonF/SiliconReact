import React, { useEffect, useState } from 'react';
import Testimonial from './Testimonial';

const ClientTestimonials = () => {
    const [testimonials, setTestimonials] = useState([]);

    const getTestimonials = async () => {
        const res = await fetch('https://win24-assignment.azurewebsites.net/api/testimonials');
        const data = await res.json();
        setTestimonials(data);
    };

    useEffect(() => {
        getTestimonials();
    }, []);

    return (
        <section id="testimonials" className="client-testimonials">
            <div className="container">
                <div className="first-column">
                    <h2>Clients are Loving Our App</h2>
                </div>
                <div className="second-column">
                    {
                        testimonials.map((testimonial) => (
                            <Testimonial key={testimonial.id} item={testimonial} />
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default ClientTestimonials;
