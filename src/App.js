import React from 'react'
import Button from './components/Button'
import { TfiBell, TfiAlarmClock, TfiAgenda } from "react-icons/tfi";
import ButtonPage from './pages/ButtonPages';
import Accordion from './components/Accordion';


const App = () => {
    const items = [
        {
            id:'123',
            label:'this is fast and furious',
            content:'racing is key and all the freaks with good music at one place'

        },
        {
            id:'1253',
            label:'this is fast and furious',
            content:'racing is key and all the freaks with good music at one place'
            
        }
        ,{
            id:'1233',
            label:'this is fast and furious',
            content:'racing is key and all the freaks with good music at one place'
            
        }
    ]


  return (
    <div>
        {/* <ButtonPage></ButtonPage> */}
        <Accordion items={items}></Accordion>
    </div>
  )
}

export default App