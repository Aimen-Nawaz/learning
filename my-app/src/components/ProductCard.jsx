import React from 'react'

const ProductCard = (data) => {

    return (
        <div className="card" >
            <img src={data.image} alt="image" width="100%" height="50%" />
            <h1 >{data.title}</h1>
            <p >{data.description}</p>
            {/* <icon/> */}
        </div>
    )
}

export default ProductCard
