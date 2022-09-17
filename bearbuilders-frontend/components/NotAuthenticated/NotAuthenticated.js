import { Button } from "@nextui-org/react";
import Image from "next/image"

export default function NotAuthenticated({ isLogged, setIsLogged }) {
   const handleClick = () => {
      setIsLogged(!isLogged)
   }
   return (
      <div className='not-authenticated'>
         <Button
            color="gradient"
            auto
            ghost
            size="xl"
            onClick={handleClick}
         >
            Conecta tu billetera
         </Button>
      </div>
   )
}

