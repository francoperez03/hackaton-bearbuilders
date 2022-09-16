import { Button } from "@nextui-org/react";

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

