import React from 'react'
import Button from '../components/Button'
import { TfiBell, TfiAlarmClock, TfiAgenda } from "react-icons/tfi";


const ButtonPage = () => {
  return (
    <div>
        <div>
        <Button primary rounded outline className='mb-5'><TfiBell></TfiBell> 1abc</Button>
    </div>
    <div>
        <Button secondary><TfiAlarmClock></TfiAlarmClock> 2asd</Button>
    </div>
    <div>
        <Button danger outline>3qwe</Button>
    </div>
    <div>
        <Button success>4zxc</Button>
    </div>
    <div>
        <Button warning outline>5qaz</Button>
    </div>
    </div>
  )
}

export default ButtonPage