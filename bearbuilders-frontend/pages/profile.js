import { Card, Grid, Col, Row, Button, Text } from "@nextui-org/react";
import { useState } from "react";
import Link from "next/link";

const list = [
  {
    title: "Inglaterra",
    img: "/img/stamps/stamp-1.png",
    price: "33 días",
  },
  {
    title: "Francia",
    img: "/img/stamps/stamp-2.png",
    price: "20 días",
  },
  {
    title: "Italia",
    img: "/img/stamps/stamp-3.png",
    price: "15 días",
  },
  {
    title: "Egipto",
    img: "/img/stamps/stamp-4.png",
    price: "14 días",
  },
  {
    title: "Japón",
    img: "/img/stamps/stamp-5.png",
    price: "12 días",
  },
  {
    title: "Estados Unidos",
    img: "/img/stamps/stamp-6.png",
    price: "5 días",
  },
];
const Profile = () => {
  return (
    <section className="profile">
      {
        <>
          <section className="profile__reservations">
            <h2 className="profile__reservations-title">Reservas</h2>
            <div className="profile__reservations-items">
              <Card isPressable isHoverable css={{ w: "75%", h: "350px" }}>
                <Card.Body css={{ p: 0 }}>
                  <Link href={`/reservations/6`} key={1}>
                    <Card.Image
                      src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/309470591.jpg?k=059f91be22a48adf3ff5e985dd709521e396b4142b1ba6dafc088a5e598ad6ba&o=&hp=1"
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
                        🇹🇹 Estambul, Turquía
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
                    <Card  isHoverable>
                      <Card.Body css={{ p: 0, height: 200 }}>
                        <Card.Image
                          src={item.img}
                          objectFit="fit"
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
