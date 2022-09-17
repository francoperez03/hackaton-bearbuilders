import { Card, Grid, Col, Row, Button, Text } from "@nextui-org/react";
import { useState } from "react";
import Link from "next/link";

const Profile = () => {
  const [isLogged, setIsLogged] = useState(false);

  const list = [
    {
      title: "Orange",
      img: "/images/fruit-1.jpeg",
      price: "$5.50",
    },
    {
      title: "Tangerine",
      img: "/images/fruit-2.jpeg",
      price: "$3.00",
    },
    {
      title: "Raspberry",
      img: "/images/fruit-3.jpeg",
      price: "$10.00",
    },
    {
      title: "Lemon",
      img: "/images/fruit-4.jpeg",
      price: "$5.30",
    },
    {
      title: "Advocato",
      img: "/images/fruit-5.jpeg",
      price: "$15.70",
    },
    {
      title: "Lemon 2",
      img: "/images/fruit-6.jpeg",
      price: "$8.00",
    },
    {
      title: "Banana",
      img: "/images/fruit-7.jpeg",
      price: "$7.50",
    },
    {
      title: "Watermelon",
      img: "/images/fruit-8.jpeg",
      price: "$12.20",
    },
  ];

  return (
    <section className="profile">
      {
        <>
          <section className="profile__reservations">
            <h2 className="profile__reservations-title">Reservas</h2>
            <div className="profile__reservations-items">
              <Card isPressable isHoverable css={{ w: "75%", h: "350px" }}>
                {/* <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
              <Col>
                <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                  New
                </Text>
                <Text h3 color="black">
                  Acme camera
                </Text>
              </Col>
            </Card.Header> */}
                <Card.Body css={{ p: 0 }}>
                  <Link href={`/reservations/1`} key={1}>
                    <Card.Image
                      src="https://nextui.org/images/card-example-6.jpeg"
                      width="100%"
                      height="100%"
                      objectFit="cover"
                      alt="Card example background"
                    />
                  </Link>
                </Card.Body>
                <Card.Footer
                  isBlurred
                  css={{
                    position: "absolute",
                    bgBlur: "#ffffff66",
                    borderTop:
                      "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                    bottom: 0,
                    zIndex: 1,
                  }}
                >
                  <Row>
                    <Col>
                      <Text color="#000" size={12} b>
                        ✈️ 53 días para tu viaje!
                      </Text>
                      <Text color="#000" size={12}>
                        🇫🇷 París, Francia
                      </Text>
                    </Col>
                  </Row>
                </Card.Footer>
              </Card>
            </div>
          </section>
          <section className="profile__history">
            <h2 className="profile__history-title">Proof of Stay</h2>
            <div className="profile__history-items">
              <Grid.Container gap={2} justify="flex-start">
                {list.map((item, index) => (
                  <Grid xs={6} sm={6} key={index}>
                    <Card isPressable isHoverable>
                      <Card.Body css={{ p: 0 }}>
                        <Card.Image
                          src={"https://nextui.org" + item.img}
                          objectFit="cover"
                          width="100%"
                          height={140}
                          alt={item.title}
                        />
                      </Card.Body>
                      <Card.Footer css={{ justifyItems: "flex-start" }}>
                        <Row wrap="wrap" justify="space-between" align="center">
                          <Text b>{item.title}</Text>
                          <Text
                            css={{
                              color: "$accents7",
                              fontWeight: "$semibold",
                              fontSize: "$sm",
                            }}
                          >
                            {item.price}
                          </Text>
                        </Row>
                      </Card.Footer>
                    </Card>
                  </Grid>
                ))}
              </Grid.Container>
            </div>
          </section>
        </>
      }
    </section>
  );
};

export default Profile;
