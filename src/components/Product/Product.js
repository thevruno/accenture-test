import './product.scss';

export default function Product ({productImg, productTitle, productPrice}) {
    return (
        <>
            <div className='product-box'>
                <figure>
                    <img src={productImg} alt={productTitle} />
                </figure>

                <div className='product-box__details'>
                    <p>{productTitle}</p>
                    <strong>${productPrice}</strong>
                </div>
            </div>
        </>
    );
}