import { Navbar, Button, Link, Text, useTheme } from "@nextui-org/react";
import Layout from "./Layout.js";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import Image from 'next/image'

export default function Navigation() {

   const { address, status } = useAccount();
   const getButtonProfile = () => {
      if (status) {
         if (status === "connected") {
            return (
               <Button auto flat as={Link} href="/profile">
                  Mi Perfil
               </Button>
            );
         } else {
            return (
               <ConnectButton
                  label="Conectá tu billetera"
                  accountStatus="address"
                  chainStatus="none"
                  showBalance={false}
               />
            );
         }
      } else {
         return <></>;
      }
   };

   return (
      <Layout>
         <Navbar variant="sticky" >
            <Navbar.Brand>
               <Image src='/img/hotel-bell.png' width={30} height={25} />
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
                  {getButtonProfile()}
               </Navbar.Item>
            </Navbar.Content>
         </Navbar>
      </Layout>
   )
}