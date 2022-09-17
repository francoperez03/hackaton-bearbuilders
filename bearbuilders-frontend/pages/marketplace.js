import React from "react";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import { Card, Row, Col, Text } from "@nextui-org/react";
import { useState } from "react";

export default function Marketplace({ reservations }) {
   const reservationsNormal = reservations.slice(0, 3);
   const reservationsBlue = reservations.slice(3, 6);
   const [actualReservations, setActualReservations] =
      useState(reservationsNormal);

   return (
      <section className="marketplace">
         <Button.Group
            color="gradient"
            ghost
            className="marketplace__button-group"
         >
            <Button
               onClick={() => {
                  setActualReservations(reservationsNormal);
               }}
            >
               Reservas
            </Button>
            <Button
               onClick={() => {
                  setActualReservations(reservationsBlue);
               }}
            >
               {" "}
               Hospedaje Flash
            </Button>
         </Button.Group>
         <section className="marketplace__cards">
            {actualReservations.map((reservation) => (
               <Link href={`/reservations/${reservation.id}`} key={reservation.id}>
                  <a>
                     <Card isPressable>
                        <Card.Body css={{ p: 0 }}>
                           <Card.Image
                              src={
                                 reservation.hotel.images[0].url ||
                                 "https://loremflickr.com/640/360"
                              }
                              objectFit="fit"
                              height={240}
                              alt={reservation.hotel.images.alt}
                           />
                        </Card.Body>
                        <Card.Footer css={{ justifyItems: "flex-start" }}>
                           <Row wrap="wrap" justify="space-between" align="center">
                              <Text b>{reservation.hotel.name}</Text>
                              <Text
                                 css={{
                                    color: "$accents7",
                                    fontWeight: "$semibold",
                                    fontSize: "$md",
                                 }}
                              >
                                 {"$2450"}
                              </Text>
                           </Row>

                        </Card.Footer>
                     </Card>
                  </a>
               </Link>
            ))}
         </section>
      </section>
   );
}

export const getServerSideProps = async (context) => {
   const reservations = [
      {
         id: "1",
         hotel: {
            name: "Grand Beach Hotel",
            address: "4835 Collins Avenue, Miami Beach, FL 33140, Estados Unidos",
            telephone: "+5493876282042",
            mail: "tiko@gmail.com",
            socialNetworks: [
               {
                  name: "facebook",
                  url: "facebook/hotelfb",
               },
            ],
            amenities: ["piscina", "desayuno", "wifi", "parking"],
            images: [
               {
                  url: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/163805332.jpg?k=adc3a9afbeb959b2c2ed28f09e3b1de67d06b89f62ad917138cc2469f9760e5f&o=&hp=1",
                  alt: "hotelimg",
               },
            ],
            description:
               "Este hotel de playa goza de vistas al océano Atlántico, alberga una piscina al aire libre en la 7ª planta y ofrece acceso privado a la playa y suites amplias. El Grand Beach Hotel está a 5,9 km de South Beach.",
         },
         location: {
            city: "Miami",
            state: [],
            country: "USA",
         },
         reservation: {
            status: "pending",
            startDate: "",
            endDate: "",
            trace: [
               {
                  userId: "",
                  reservationDate: "",
                  valid: true,
               },
               {
                  userId: "",
                  reservationDate: "",
               },
               {
                  userId: "",
                  reservationDate: "",
               },
            ],
         },
      },
      {
         id: "2",
         hotel: {
            name: "Palacio Paz Hotel",
            address: "Avenida Santa Fe 760, 1006 Buenos Aires, Argentina",
            telephone: "+5493876282042",
            mail: "palacio@gmail.com",
            socialNetworks: [
               {
                  name: "facebook",
                  url: "facebook/hotelfb",
               },
            ],
            amenities: ["piscina", "desayuno", "wifi", "parking", "restaurante"],
            images: [
               {
                  url: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/228712124.jpg?k=e0e5f3844b38dac09866e716040b0d9aba84c2a6eab063a55acd80b9595b59b5&o=&hp=1",
                  alt: "hotelimg",
               },
            ],
            description:
               "El Palacio Paz Boutique Hotel alberga un bar y ofrece habitaciones en Buenos Aires, a 700 metros de la basílica del Santísimo Sacramento y a 1,5 km del Obelisco de Buenos Aires. Cuenta con restaurante, recepción 24 horas, servicio de habitaciones y WiFi gratuita en todas las instalaciones. El hotel ofrece habitaciones familiares.",
         },
         location: {
            city: "Buenos Aires",
            state: [],
            country: "Argentina",
         },
         reservation: {
            status: "pending",
            startDate: "",
            endDate: "",
            trace: [
               {
                  userId: "",
                  reservationDate: "",
                  valid: true,
               },
               {
                  userId: "",
                  reservationDate: "",
               },
               {
                  userId: "",
                  reservationDate: "",
               },
            ],
         },
      },
      {
         id: "3",
         hotel: {
            name: "Hotel Satoshi",
            address: "Avenida Santa Fe 760, 1006 Buenos Aires, Argentina",
            telephone: "+5493876282042",
            mail: "palacio@gmail.com",
            socialNetworks: [
               {
                  name: "facebook",
                  url: "facebook/hotelfb",
               },
            ],
            amenities: ["piscina", "desayuno", "wifi", "parking", "restaurante"],
            images: [
               {
                  url: "https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/302992544.jpg?k=22005c42fa4eac8a0a51cd6c0b4a97091762361fac82696266f2203c9b2e6105&o=&hp=1",
                  alt: "hotelimg",
               },
            ],
            description:
               "El Palacio Paz Boutique Hotel alberga un bar y ofrece habitaciones en Buenos Aires, a 700 metros de la basílica del Santísimo Sacramento y a 1,5 km del Obelisco de Buenos Aires. Cuenta con restaurante, recepción 24 horas, servicio de habitaciones y WiFi gratuita en todas las instalaciones. El hotel ofrece habitaciones familiares.",
         },
         location: {
            city: "Buenos Aires",
            state: [],
            country: "Argentina",
         },
         reservation: {
            status: "pending",
            startDate: "",
            endDate: "",
            trace: [
               {
                  userId: "",
                  reservationDate: "",
                  valid: true,
               },
               {
                  userId: "",
                  reservationDate: "",
               },
               {
                  userId: "",
                  reservationDate: "",
               },
            ],
         },
      },
      {
         id: "4",
         hotel: {
            name: "Hotel Lutetia",
            address:
               "45 Boulevard Raspail, Saint-Germain - 6º distrito, 75006 París, Francia",
            telephone: "+5493876282042",
            mail: "NYXHL@gmail.com",
            socialNetworks: [
               {
                  name: "facebook",
                  url: "facebook/hotelfb",
               },
            ],
            amenities: ["piscina", "desayuno", "wifi", "parking", "restaurante"],
            images: [
               {
                  url: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/343341268.jpg?k=df7ef42c5e047da1e65c11792e3bb288f554351253caf240ed3e19d74fe6cd80&o=&hp=1",
                  alt: "hotelimg",
               },
            ],
            description:
               "El Hotel Lutetia es un emblemático hotel de lujo ubicado en el barrio de Saint-Germain-des-Prés. Está situado en la margen izquierda del río Sena, a 5 minutos a pie de los grandes almacenes Le Bon Marché y a 2 km del Museo del Louvre. El edificio del hotel es todo un símbolo de París y alberga 184 habitaciones, entre ellas 40 suites y 7 suites exclusivas. Cada una de ellas cuenta con WiFi gratuito, centros multimedia y baños de mármol. Algunas habitaciones tienen balcón con vistas a la Torre Eiffel. Además, algunas de las suites tienen azotea con terraza y vistas de 360 grados a París. El centro holístico de bienestar Akasha cuenta con centro de fitness, sauna, sala de vapor y piscina cubierta de 17 metros con luz natural durante el día. También ofrece una amplia gama de tratamientos de spa por un suplemento. ",
         },
         location: {
            city: "Paris",
            state: [],
            country: "Francia",
         },
         reservation: {
            status: "pending",
            startDate: "01/11/2022",
            endDate: "08/112022",
            trace: [
               {
                  userId: "",
                  reservationDate: "",
                  valid: true,
               },
               {
                  userId: "",
                  reservationDate: "",
               },
               {
                  userId: "",
                  reservationDate: "",
               },
            ],
         },
      },
      {
         id: "5",
         hotel: {
            name: "NYX Hotel Holborn",
            address: "Southampton Row,, Camden, Londres, WC1B 4AR, Reino Unido",
            telephone: "+5493876282042",
            mail: "NYXHL@gmail.com",
            socialNetworks: [
               {
                  name: "facebook",
                  url: "facebook/hotelfb",
               },
            ],
            amenities: ["piscina", "desayuno", "wifi", "parking", "restaurante"],
            images: [
               {
                  url: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/271383755.jpg?k=83f7ee5bdfa67a666ceafc205aed132f5ac0fdc2bee52dbd765b3ca7bae83307&o=&hp=1",
                  alt: "hotelimg",
               },
            ],
            description:
               "El NYX Hotel London Holborn by Leonardo Hotels alberga un centro de spa y bienestar y ofrece habitaciones de lujo y WiFi gratuita. Se halla a solo 5 minutos a pie del Museo Británico.",
         },
         location: {
            city: "London",
            state: [],
            country: "United Kingdom ",
         },
         reservation: {
            status: "pending",
            startDate: "15/11/2022",
            endDate: "19/11/2022",
            trace: [
               {
                  userId: "",
                  reservationDate: "",
                  valid: true,
               },
               {
                  userId: "",
                  reservationDate: "",
               },
               {
                  userId: "",
                  reservationDate: "",
               },
            ],
         },
      },
      {
         id: "6",
         hotel: {
            name: "Melas Hotel Istanbul",
            address:
               "Profesör Doktor Bülent Tarcan Caddesi Gayrettepe Beşiktaş, Besiktas, 34349 Estambul, Turquía –",
            telephone: "+5493876282042",
            mail: "NYXHL@gmail.com",
            socialNetworks: [
               {
                  name: "facebook",
                  url: "facebook/hotelfb",
               },
            ],
            amenities: ["piscina", "desayuno", "wifi", "parking", "restaurante"],
            images: [
               {
                  url: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/309470591.jpg?k=059f91be22a48adf3ff5e985dd709521e396b4142b1ba6dafc088a5e598ad6ba&o=&hp=1",
                  alt: "hotelimg",
               },
            ],
            description:
               "El Melas Hotel Istanbul está ubicado en Estambul, a 2,2 km del rascacielos Istanbul Sapphire, y ofrece restaurante, aparcamiento privado gratuito, centro de fitness y bar. Este hotel está bien situado en el distrito de Sisli y cuenta con salón común, piscina cubierta y hammam. Hay recepción 24 horas, servicio de habitaciones y cambio de divisa.",
         },
         location: {
            city: "Estambul",
            state: [],
            country: "Turquia",
         },
         reservation: {
            status: "pending",
            startDate: "26/11/2022",
            endDate: "30/11/2022",
            trace: [
               {
                  userId: "",
                  reservationDate: "",
                  valid: true,
               },
               {
                  userId: "",
                  reservationDate: "",
               },
               {
                  userId: "",
                  reservationDate: "",
               },
            ],
         },
      },
      {
         id: "7",
         hotel: {
            name: "Tembo Resort",
            address: "23/2 Moo 4 Bophut, 84320 Koh Samui, Tailandia",
            telephone: "+5493876282042",
            mail: "NYXHL@gmail.com",
            socialNetworks: [
               {
                  name: "facebook",
                  url: "facebook/hotelfb",
               },
            ],
            amenities: ["piscina", "desayuno", "wifi", "parking", "restaurante"],
            images: [
               {
                  url: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/338565477.jpg?k=c7176feffa9ab0d987432665bba1de69d8d6ee0add84b4fb19603d6ee8b34e8e&o=&hp=1",
                  alt: "hotelimg",
               },
            ],
            description:
               "El Tembo Beach Club & Resort se encuentra en Koh Samui y ofrece restaurante, piscina al aire libre, bar y salón compartido. Hay servicio de habitaciones, cajero automático y WiFi gratuita en todas las instalaciones. El establecimiento ofrece servicio de alquiler de coches, jardín y solárium.",
         },
         location: {
            city: "Samui",
            state: [],
            country: "Tailandia",
         },
         reservation: {
            status: "pending",
            startDate: "1 nov 2022",
            endDate: "8 nov 2022",
            trace: [
               {
                  userId: "",
                  reservationDate: "",
                  valid: true,
               },
               {
                  userId: "",
                  reservationDate: "",
               },
               {
                  userId: "",
                  reservationDate: "",
               },
            ],
         },
      },
      {
         id: "8",
         hotel: {
            name: "Oleo Cancun Resort",
            address: "Blvd. Kukulcan KM 19.5 Zona Hotelera, 77500 Cancún, México",
            telephone: "+5493876282042",
            mail: "NYXHL@gmail.com",
            socialNetworks: [
               {
                  name: "facebook",
                  url: "facebook/hotelfb",
               },
            ],
            amenities: ["piscina", "desayuno", "wifi", "parking", "restaurante"],
            images: [
               {
                  url: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/145349655.jpg?k=4a0b449a2d0b150767972f3e8c7fb3c08b9f08036aad5a70a1b219167f7c631f&o=&hp=1",
                  alt: "hotelimg",
               },
            ],
            description:
               "El Melas Hotel Istanbul está ubicado en Estambul, a 2,2 km del rascacielos Istanbul Sapphire, y ofrece restaurante, aparcamiento privado gratuito, centro de fitness y bar. Este hotel está bien situado en el distrito de Sisli y cuenta con salón común, piscina cubierta y hammam. Hay recepción 24 horas, servicio de habitaciones y cambio de divisa.",
         },
         location: {
            city: "Cancun",
            state: [],
            country: "Mexico",
         },
         reservation: {
            status: "pending",
            startDate: "1 nov 2022",
            endDate: "8 nov 2022",
            trace: [
               {
                  userId: "",
                  reservationDate: "",
                  valid: true,
               },
               {
                  userId: "",
                  reservationDate: "",
               },
               {
                  userId: "",
                  reservationDate: "",
               },
            ],
         },
      },
   ];

   return {
      props: {
         reservations,
      },
   };
};
