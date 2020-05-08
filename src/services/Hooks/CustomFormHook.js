import {useState} from 'react'

const useFormHook = (callback) => {

    const [inputs, setInputs] = useState({});

    const handleSubmit = (e) => {
        if (e) {
           e.preventDefault();
        }
        setInputs({})
        callback();
      }

    const handleInputChange = (e) => {
         e.persist();

         setInputs(inputs => ({...inputs, [e.target.name]: e.target.value }));
    }

    return{
       handleSubmit,
       handleInputChange,
       inputs
    }
}

export default useFormHook