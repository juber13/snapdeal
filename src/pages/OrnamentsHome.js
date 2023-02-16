import React from 'react'
import { Link } from 'react-router-dom'
import OrnamentsData from './OrnamentsData';
import OrnamentsItemCard from './OrnamentsItemCard';

const OrnamentsHome = () => {
    console.log(OrnamentsData.productData)
    return (
        <>
            <h1 className="text-center mt-3">All items</h1>
            <section className=" container">
                <div className="row ">
                    {OrnamentsData.productData.map((item, index)=>{
                      return(
                        <OrnamentsItemCard img={item.img} 
                        title={item.title} 
                        desc={item.desc} 
                        price={item.price} 
                        item={item}
                        rate={item.rate} 
                        key={index} 
                        />
                        )
                    })}
                </div>
            </section>
            <Link to="/" className="btn btn-info ms-10 ">Home</Link>
        </>
    )
}

export default OrnamentsHome