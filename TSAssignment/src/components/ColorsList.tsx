import Colour from './Colour';
const ColorsList = () => {
   const colors = ["red","blue","green","yellow","orange","black"];
  return (
    <ol className='colors-list'>
      {colors.map(color=>(
        <Colour colour = {color}/>
      ))}
    </ol>
  )
}

export default ColorsList