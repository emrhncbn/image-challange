import { useState } from "react"




const Carousel = () => {
    const images =[
    'https://images.unsplash.com/photo-1682685797857-97de838c192e?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1707336668429-da6dfd6d8e83?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1706108582795-c89426e3357d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1682687982502-b05f0565753a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ]
    const [currentImage,setCurrentImage] = useState(0)

    const previousImage = () => {
        setCurrentImage((pre)=>
        pre === 0 ? images.length - 1 : pre - 1)
    }
    const nextImage = () => {
        setCurrentImage((pre)=>
        pre === images.length - 1 ? 0 : pre + 1)
    }
  return (
    <div className="image">
        <h1>Project 1: Carousel</h1>
        
        {images.map((image)=>(
            <img
            key={crypto.randomUUID()}
            src={image}
            alt={`Image ${currentImage + 1}`}
            style={{ display: image === images[currentImage] ? "block" : "none" }}
         />
        ))}
        <div className="btn">
        <button onClick={previousImage}>-</button>
        <button onClick={nextImage}>+</button>
        </div>
    </div>
  )
}
export default Carousel