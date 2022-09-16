import { Card, Col, Text } from "@nextui-org/react";

export const Card3 = () => (
  <Card css={{ bg: "$black", w: "100%" }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
          XXXX
        </Text>
        <Text h4 color="white">
          XXXXX
        </Text>
      </Col>
    </Card.Header>
    <Card.Image
      src="https://bariloche.org/wp-content/uploads/2014/11/aojamiento-en-bariloche.jpg"
      width="100%"
      height={340}
      objectFit="cover"
      alt="Card image background"
    />
  </Card>
);
