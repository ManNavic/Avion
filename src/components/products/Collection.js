import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import classes from './Collection.module.css'
const Collection = () => {
  const navigate = useNavigate()
  const [feedItems, setFeedItems] = useState([])
  const [title, setTitle] = useState('')
  const [fetchCategory, setFetchCategory] = useState([])
  const location = useLocation()
  const category = new URLSearchParams(location.search).get('category')
  console.log(category)
  useEffect(() => {
    handleTitle();
  
    const fetchData = async () => {
      try {
        let apiUrl = 'https://long-jade-squirrel-wear.cyclic.app/products';
  
        if (category === 'Table') {
          apiUrl += '/category?category=Table';
        } else if (category === 'Pot') {
          apiUrl += '/category?category=Pot';
        } else if (category === 'Ceramic') {
          apiUrl += '/category?category=Ceramic';
        } else if (category === 'Chair') {
          apiUrl += '/category?category=Chair';
        } else if (category === 'All') {
        } else if (category === 'Tableware') {
          apiUrl += '/category?category=Tableware';
        } else if (category === 'Cutlery') {
          apiUrl += '/category?category=Cutlery';
        }else if (category==='Furniture'){
            apiUrl += '/category?category=Table&category=Chair'
        }
  
        const response = await fetch(apiUrl);
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        const data = await response.json();
        setFeedItems(data);
        console.log(data);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };
  
    fetchData();
  }, [category]);
  

  const handleClick = (productId) => {
    navigate(`/products?itemId=${productId}`)
    window.scrollTo(0, 0)
  }

  const handleTitle = () => {
    if (category === 'Table') {
      setTitle('Tables')
    } else if (category === 'Pot') {
      setTitle('Plant Pots')
    } else if (category === 'Ceramic') {
      setTitle('Ceramics')
    } else if (category === 'Chair') {
      setTitle('Chairs')
    } else if (category === 'All') {
      setTitle('All Products')
    } else if (category === 'Tableware') {
      setTitle('Tableware')
    } else if (category === 'Cutlery') {
      setTitle('Cutlery')
    }else if (category === 'Furniture') {
        setTitle('All Furniture')
      }else if (category === 'New') {
        setTitle('New Products')
      }
  }

  return (
    <div className={classes.container}>
      <h3 className={classes.title}>{title}</h3>
      <div className={classes.productContainer}>
        {feedItems.map((item) => (
          <div
            key={item._id}
            className={classes.card}
            onClick={() => handleClick(item._id)}
          >
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
    </div>
  )
}
export default Collection
