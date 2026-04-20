import React from 'react'

function Home(props) {
    console.log('Home', props.data);

    return (
        <div className='center'>
          
            <h1>Home Component</h1>
            <div className='card-wrapper'>
                <div className='img-wrapper item'>
                    <img src="https://th.bing.com/th/id/OIP.3MJE00ychUjPH4poRWmyZQHaFj?w=229&h=180&c=7&r=0&o=7&pid=1.7&rm=3" />
                </div>

                <div className='text-wrapper item'>
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>

                <div className='btn-wrapper item'>
                    <button
                        onClick={() => props.addToCartHandler({ price: 1000, name: "I phone 16" })}>
                        Add To Cart
                    </button>
                    <button
                        className='remove-cart-btn'
                        onClick={props.removeFromCartHandler}>
                        Remove To Cart
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Home
