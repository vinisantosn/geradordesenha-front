import Checkbox from '../checkbox/Checkbox.tsx';
import { useState } from 'react'



interface CardProps{
    senha: any
}
export function Card({senha}:CardProps){
    const [isChecked, setIsChecked] = useState<boolean>(false);
  
    const handleCheckboxChange = (isChecked: boolean) => {
      setIsChecked(isChecked);
    };
    return(
        <div className="card">
            <h2>Password Generator</h2>
            <p>Instantly generate a secure, random password with 
this online tool ..</p>
<Checkbox
        label="Upper case"
        isChecked={isChecked}
        onChange={handleCheckboxChange}
      />
      <Checkbox
        label="Lower case"
        isChecked={isChecked}
        onChange={handleCheckboxChange}
      />
      <Checkbox
        label="Numbers"
        isChecked={isChecked}
        onChange={handleCheckboxChange}
      />
      <Checkbox
        label="Symbols"
        isChecked={isChecked}
        onChange={handleCheckboxChange}
      />
        <p>A senha é: {senha} </p>
        <button type="submit">COPIAR</button>
        

        </div>
    )

}


export default Card;