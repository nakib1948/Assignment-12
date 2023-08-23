import React from 'react';

const DiscountSection = () => {
    return (
        <div
        className="hero h-96 my-5"
        style={{
          backgroundImage: `url(https://i.ibb.co/PCbVMtr/wordpress-265132-1920.jpg)`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div
           
            className="max-w-md"
          >
            <h2
              className="mb-5 text-5xl font-bold text-purple"
             
            >
              Get <span className="text-yellow-200">30%</span> Off Discount Coupon
            </h2>
            <p className="mb-5 text-lg">
              by Subscribe our Newsletter
            </p>
            <div className="join">
              <input
                className="input input-bordered join-item"
                placeholder="Email"
               
              />
              <button
                className="btn bg-blue-500 text-white join-item rounded-r-full"
               
              >
                Get the coupon
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default DiscountSection;