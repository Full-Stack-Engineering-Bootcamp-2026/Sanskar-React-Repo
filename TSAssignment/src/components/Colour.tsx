// type colorProp = {
//     colour : string
// }
const Colour = ({colour}:{colour:string}) => {
  return (
    <li style={{color:colour}}>{colour}</li>
  )
}

export default Colour