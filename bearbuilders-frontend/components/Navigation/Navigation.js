import { Navbar, Button, Text } from "@nextui-org/react";
import Layout from "./Layout.js";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navigation() {
  const { status } = useAccount();
  const [button, setButton] = useState();
  useEffect(() => {
    if (status) {
      if (status === "connected") {
        setButton(<Link href="/profile">Mi Perfil</Link>);
      } else {
        setButton(
          <ConnectButton
            label="Conectá tu billetera"
            accountStatus="address"
            chainStatus="none"
            showBalance={false}
          />
        );
      }
    }
  }, [status]);
  return (
    <Layout>
      <Navbar variant="sticky">
        <Navbar.Brand>
          <Link href="/">
            <a className="navbar-logo">
              <Image src="/img/hotel-bell.png" width={30} height={25} />
              <Text
                weight="extrabold"
                color="#8a6445"
                hideIn="xs"
                css={{ marginLeft: "1rem" }}
                size={20}
              >
                TICKO
              </Text>
            </a>
          </Link>
        </Navbar.Brand>
        <Navbar.Content enableCursorHighlight hideIn="xs" variant="underline">
          <Link href="/">
            <a>Inicio</a>
          </Link>
          <Link href="/marketplace">
            <a>Marketplace</a>
          </Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Item>
            <>{button}</>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
    </Layout>
  );
}
