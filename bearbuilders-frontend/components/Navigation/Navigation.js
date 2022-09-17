import { Navbar, Button, Link, Text, useTheme } from "@nextui-org/react";
import Layout from "./Layout.js";
import AcmeLogo from "./AcmeLogo.js";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

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
      <Navbar variant="sticky">
        <Navbar.Brand>
          <AcmeLogo />
          <Text b color="inherit" hideIn="xs">
            TICKO
          </Text>
        </Navbar.Brand>
        <Navbar.Content enableCursorHighlight hideIn="xs" variant="underline">
          <Navbar.Link href="/">Inicio</Navbar.Link>
          <Navbar.Link href="/marketplace">Marketplace</Navbar.Link>
          <Navbar.Link href="/">Nosotros</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Item>{getButtonProfile()}</Navbar.Item>
        </Navbar.Content>
      </Navbar>
    </Layout>
  );
}
