import React,{useState,useEffect} from 'react'
import Products from '../components/Gondola/Products'
import {db} from '../services/Firebase/firebase'
import './Home.scss'
function useLocalStorage(key, initialValue) {
    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    
    const [storedValue, setStoredValue] = useState(() => {
      try {
        // Get from local storage by key
        
        const item = typeof window !== 'undefined' && window.localStorage.getItem(key);
        // Parse stored json or if none return initialValue
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        // If error also return initialValue
        console.log(error);
        return initialValue;
      }
    });
  
    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    const setValue = value => {
      try {
        
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;
        // Save state
        setStoredValue(valueToStore);
        // Save to local storage
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
        
        console.log(error);
      }
  
    };
  
    return [storedValue, setValue];
  }


const Home = () => {
    const [product, setProduct ] = useLocalStorage(undefined, '')

    function handleChangeProduct (e) {
        setProduct(e.target.value);
     };
    
      function getUnique(arr, comp) {
        const unique = arr
          //store the comparison values in array
          .map(e => e[comp])
    
          // store the keys of the unique objects
          .map((e, i, final) => final.indexOf(e) === i && i)
    
          // eliminate the dead keys & store unique objects
          .filter(e => arr[e])
    
          .map(e => arr[e]);
    
        return unique;
      }
    
      const [data, setData] = useState({products:[]})
    
      useEffect(() => {
          db.collection('products').onSnapshot(snapshot => {
             const result = snapshot.docs.map(doc => ({
                 id: doc.id,
               ...doc.data()
             }))
             setData({products:result})
           })
           
       }, [])
    
       const uniqueProduct = getUnique(data.products, 'category')
    
       const filterDropdown = data.products.filter(result => result.category === product)
       
    return (
        <section className="home-container">
            <h1>Home - Productos</h1> 
                <div className="filter">
                    <label id="label-table">Categorías</label>
                        <select
                              value={product}
                              onChange={handleChangeProduct}
                            >
                              {uniqueProduct.map(product => (
                                  <option key={product.id} value={product.category}>{product.category}</option>
                              ))}
                        </select>
                </div>
           
                 <Products products={filterDropdown}/>
        
        </section>

        
    )
}

export default Home
