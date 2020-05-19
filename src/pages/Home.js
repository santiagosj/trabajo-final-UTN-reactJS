import React,{useState,useEffect} from 'react'
import Products from '../components/Gondola/Products'
import {db} from '../services/Firebase/firebase'
import './Home.scss'

function useSessionStorage(key, initialValue) {

    const [storedValue, setStoredValue] = useState(() => {
      try {
      
           const item = typeof window !== 'undefined' && window.sessionStorage.getItem(key);
        
           return item ? JSON.parse(item) : initialValue;

      } catch (error) {
      
        console.log(error);

        return initialValue;
      }
    });
  
   
    const setValue = value => {

      try {
        
          const valueToStore = value instanceof Function ? value(storedValue) : value;
        
           setStoredValue(valueToStore);
      
           window.sessionStorage.setItem(key, JSON.stringify(valueToStore));

      } catch (error) {
        
          console.log(error);

      }
  
    };
  
    return [storedValue, setValue];
}


const Home = () => {
    const [product, setProduct ] = useSessionStorage('ProductCategory', '')

    function handleChangeProduct (e) {
        setProduct(e.target.value);
     };
    
      const getUnique = (arr, comp) => {
         const unique = arr
          
          .map(e => e[comp])
  
          .map((e, i, final) => final.indexOf(e) === i && i)
    
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
       
       //let pr = product ? true : false
    return (
        <section className="home-container">

                <h1>Home - Productos - {!product && 'Todas las categorías'}{ product && `Categoría: ${product}`}</h1> 
                <div className="filter">
                    <label id="label-table">Categorías</label>
                        <select
                              value={product || ''}
                              onChange={handleChangeProduct}
                              defaultValue={'DEFAULT' } 
                              selected
                            >

                              <option disabled={product}  value={'DEFAULT'}> -- seleccionar categoría -- </option>

                              {uniqueProduct.map(product => (
                                  <option 
                                      key={product.id} 
                                      value={product.category }
                                  >
                                      {product.category}
                                  </option>
                              ))}

                        </select>
                </div>

                {!product && <Products products={uniqueProduct}/>}

                {!!filterDropdown && <Products products={filterDropdown}/>}
                 
        </section>

    )
}

export default Home
