import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import classes from './SingleProduct.module.css'

const SingleProduct = () => {
  const [product, setProduct] = useState('')
  const [productDimensions, setProductDimensions] = useState('')
  const [quantity, setQuantity] = useState(1)
  const location = useLocation()
  const productId = new URLSearchParams(location.search).get('itemId')

  const plusQuantity = () => {
    setQuantity(quantity + 1)
    console.log('clicked')
    console.log(quantity)
  }
  const minusQuantity = () => {
    if (quantity === 1) {
      return
    }
    console.log('clicked')
    setQuantity(quantity - 1)
    console.log(quantity)
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://long-jade-squirrel-wear.cyclic.app/products/${productId}`
        )
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        setProduct(data)
        setProductDimensions(data.dimensions)
        console.log(data)
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error)
      }
    }

    fetchData()
  }, [productId])
  console.log(productDimensions)
  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        <img
          src={product.imageUrl}
          alt={product.title}
          className={classes.image}
        />
      </div>
      <div className={classes.infoContainer}>
        <h2 className={classes.productTitle}>{product.title}</h2>
        {product && (
          <p className={classes.productPrice}>
            €{product.price ? product.price.toFixed(0) : ''}
          </p>
        )}

        <div className={classes.line}></div>
        <p className={classes.descriptionTitle}>Product description</p>
        <p className={classes.description}>{product.description}</p>
        <div className={classes.dimensionsContainer}>
          {productDimensions ? (
            <>
              <p className={classes.dimensionsTitle}>Dimensions</p>
              <div className={classes.dimensions}>
                <div className={classes.singleDiv}>
                  <p className={classes.dimensionsSubTitle}>Height</p>
                  <p className={classes.dimensionsMesurments}>
                    {productDimensions.height}
                  </p>
                </div>
                <div className={classes.singleDiv}>
                  <p className={classes.dimensionsSubTitle}>Width</p>
                  <p className={classes.dimensionsMesurments}>
                    {productDimensions.width}
                  </p>
                </div>
                <div>
                  <p className={classes.dimensionsSubTitle}>Depth</p>
                  <p className={classes.dimensionsMesurments}>
                    {productDimensions.depth}
                  </p>
                </div>
              </div>
            </>
          ) : null}
        </div>
        <div>
          <p className={classes.quantityTitle}>Quantity</p>
          <div className={classes.quantityContainer}>
            <div className={classes.quantity} onClick={() => minusQuantity()}>
              -
            </div>
            <div className={classes.quantity}>{quantity}</div>
            <div className={classes.quantity} onClick={() => plusQuantity()}>
              +
            </div>
          </div>
        </div>
        <div className={classes.buttonContainer}>
          <button className={classes.button}>Add to cart</button>
          <button className={classes.buttonFav}>Save to favorites</button>
        </div>
      </div>
    </div>
  )
}
export default SingleProduct
