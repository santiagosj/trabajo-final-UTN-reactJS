import React,{useState, useEffect} from 'react'
import './AppHolder.scss';
import Header from '../Header/Header'
import MainContent from '../MainContent/MainContent'
import {auth} from '../../services/Firebase/firebase'

const AppHolder = () => {

     const [one, setOne] = useState('menuOnTop')

     const [loged, setAuth] = useState(false)

     const [userData, setUserData] = useState('')

     useEffect(()=>{
         window.onscroll = () => handleAnimation()
     },[one])
      
    const handleAnimation = () => {
        if(document.documentElement.scrollTop > 90){
            setOne('scroll')
        }
        if(document.documentElement.scrollTop === 0){
            setOne('menuOnTop')
        }
     }
     
    useEffect(()=>{
      auth.onAuthStateChanged(user => {
          if(user){
              setAuth(!loged)
              setUserData(user)
          }else{
              setAuth(loged)
          }
      })
    },[])

    return (
        <div className="appHolder--container">
            <Header 
               classHeader={one}
               loged={loged}
               userName={userData.email}
             />
             <MainContent loged={loged}/>
        </div>
     )
}


export default AppHolder
