import { Navbar, Button, Link, Text, useTheme } from "@nextui-org/react";
import  Layout  from "./Layout.js";
import  AcmeLogo  from "./AcmeLogo.js";

export default function Navigation() {

   return (
      <Layout>
         <Navbar variant="sticky" >
            <Navbar.Brand>
               <AcmeLogo />
               <Text b color="inherit" hideIn="xs">
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
