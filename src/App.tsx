import { Image } from 'antd'
import './App.css'
import image1 from "./images/01.png"
import image2 from "./images/02.png"
import image3 from "./images/03.png"
import image4 from "./images/04.png"
import image5 from "./images/05.png"
import image6 from "./images/06.png"
import image7 from "./images/07.png"
import image8 from "./images/08.png"
import image9 from "./images/09.png"
import image10 from "./images/10.png"
import image11 from "./images/11.png"

function App() {
  return (
    <>
         <div>
               <Image src={image1} preview={false}/>
               <Image src={image2} preview={false}/>
               <Image src={image3} preview={false}/>
               <Image src={image4} preview={false}/>
               <Image src={image5} preview={false}/>
               <Image src={image6} preview={false}/>
               <Image src={image7} preview={false}/>
               <Image src={image8} preview={false}/>
               <Image src={image9} preview={false}/>
               <Image src={image10} preview={false}/>
               <Image src={image11} preview={false}/>
         </div>
    </>
  )
}

export default App
