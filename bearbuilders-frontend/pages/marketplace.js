import React from 'react'
import axios from 'axios'
import Link from 'next/link';
import { Button } from '@nextui-org/react';
import { Card, Row, Text } from "@nextui-org/react";

export default function Marketplace({ reservations }) {
   return (
      <section className='marketplace'>
         <Button.Group
            color="gradient"
            ghost
            className='marketplace__button-group'
         >
            <Button>Reservas</Button>
            <Button>Reservas Blue 😎</Button>
         </Button.Group>
         <section className='marketplace__cards'>
            {reservations.map(reservation => (
               <Link href={`/reservations/${reservation.id}`} key={reservation.id}>
                  <a>
                     <Card isPressable>
                        <Card.Body css={{ p: 0 }}>
                           <Card.Image
                              src={reservation.hotel.images.url || 'https://loremflickr.com/640/360'}
                              objectFit="cover"
                              width="100%"
                              height={140}
                              alt={reservation.hotel.images.alt}
                           />
                        </Card.Body>
                        <Card.Footer css={{ justifyItems: "flex-start" }}>
                           <Row wrap="wrap" justify="space-between" align="center">
                              <Text b>{reservation.hotel.name}</Text>
                              <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                                 {'$2450'}
                              </Text>
                           </Row>
                        </Card.Footer>
                     </Card>

                     {/* <div>
                        <h1>{reservation.hotel.name}</h1>
                        <h1>{reservation.reservation.startDate.substring(0, 10)}</h1>
                        <h1>{reservation.reservation.endDate.substring(0, 10)}</h1>
                     </div> */}
                  </a>
               </Link>
            ))}
         </section>
      </section>
   )
}


export const getServerSideProps = async (context) => {

   const { data: reservations } = await axios.get(
      "http://0.0.0.0:3002/reservations"
   );  // console.log(res.data)

   return {
      props: {
         reservations
      }
   }
}
