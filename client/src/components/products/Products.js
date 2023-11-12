import classes from './Products.module.css'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const Products = () => {
  const [feedItems, setFeedItems] = useState([])
 const navigate = useNavigate()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://long-jade-squirrel-wear.cyclic.app/products/category?category=Table'
        )
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        setFeedItems(data)
        console.log(data)
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error)
      }
    }

    fetchData()
  }, []) // eslint-disable-next-line react-hooks/exhaustive-deps
const handleClick=(productId)=>{
    navigate(`/products?itemId=${productId}`);
    window.scrollTo(0, 0)
}
  return (
    <div className={classes.container}>
      <h3 className={classes.title}>New Tables</h3>
      <div className={classes.productContainer}>
        {feedItems.slice(0, 6).map((item) => (
          <div key={item._id} className={classes.card} onClick={()=> handleClick(item._id)}>
            <img
              src={item.imageUrl}
              alt={item.title}
              className={classes.productImg}
            />
            <p className={classes.productTitle}>{item.title}</p>
            <p className={classes.productPrice}>€{item.price.toFixed(0)}</p>
          </div>
        ))}
      </div>
      <div className={classes.buttonContainer}>
        <button className={classes.productsButton}>View collection</button>
      </div>
      
    </div>
  )
}
export default Products
