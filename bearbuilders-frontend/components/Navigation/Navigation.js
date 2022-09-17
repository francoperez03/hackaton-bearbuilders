import { Navbar, Button, Link, Text } from "@nextui-org/react";
import  Layout  from "./Layout.js";
import Image from 'next/image'

export default function Navigation() {

   return (
      <Layout>
         <Navbar variant="sticky" >
            <Navbar.Brand>
               <Image src='/img/hotel-bell.png' width={30} height={25}  />
               <Text weight="extrabold" color="#8a6445" hideIn="xs" css={{ marginLeft: "1rem" }} size={20}>
                  TICKO
               </Text>
            </Navbar.Brand>
            <Navbar.Content enableCursorHighlight hideIn="xs" variant="underline">
               <Navbar.Link href="/">Inicio</Navbar.Link>
               <Navbar.Link href="/marketplace">
                  Marketplace
               </Navbar.Link>
               <Navbar.Link href="/">Nosotros</Navbar.Link>
            </Navbar.Content>
            <Navbar.Content>
               <Navbar.Item>
                  <Button auto flat as={Link} href="/profile">
                     Mi Perfil
                  </Button>
               </Navbar.Item>
            </Navbar.Content>
         </Navbar>
      </Layout>
   )
}
