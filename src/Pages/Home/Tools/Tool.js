import React from 'react';

const Tool = ({ tool, handleBuyNow }) => {
    const { id, name, model, made, price, quantity, mOrder, img } = tool;
    return (
        <div>
            <div className="card w-90 bg-base-100 shadow-xl">
                <figure><img src={img} alt="cars tool" className='h-52 w-full object-cover' /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <h3 className="card-title">Model No. : {model}</h3>
                    <p> <strong>Min-Order Quantity : {mOrder}</strong> </p>
                    <p>Available Quantity : {quantity}</p>
                    <h4 className='text-red-600'>Price: {price} BDT</h4>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleBuyNow(id)} className="btn btn-accent text-white w-full">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tool;