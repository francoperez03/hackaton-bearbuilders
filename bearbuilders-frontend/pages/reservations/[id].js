import React from "react";
import { useAccount } from "wagmi";
import Web3Button from "./Web3Button";
import Image from 'next/image'

export default function ReservationDetail({ reservation }) {
  const { address, status } = useAccount();
  return (
    <section className='reservation-detail'>
      <section className='reservation-detail__img'>
        <Image src='/img/hotel1.jpeg' width={700} height={500}/>
      </section>
      <section className='reservation-detail__content'>
        <div className='reservation-detail__info'>
          <h2>{reservation.hotel.name}</h2>
          <h6>{`${reservation.location.city}, ${reservation.location.country}`}</h6>
          <h2 className='reservation-detail__info-price'>$2500</h2>
          <p className='reservation-detail__info-description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <p className='reservation-detail__info-description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <div className='reservation-detail__content-buttons'>
          <Web3Button
            contractAddress={"0xaf0326d92b97df1221759476b072abfd8084f9be"}
            functionName={"approve"}
            idleText={"Aprobar"}
            pendingText={"Aprobando"}
            succesText={"Aprobado!"}
          />
          <Web3Button
            contractAddress={"0xaf0326d92b97df1221759476b072abfd8084f9be"}
            functionName={"makeAReservation"}
            idleText={"Reservar"}
            pendingText={"Reservado"}
            succesText={"Reservado!"}
          />
        </div>
      </section>
    </section>
  );
}

export const getServerSideProps = async (context) => {
  const id = context.query.id;
  const reservation = {
    id: "0123456789",
    hotel: {
      name: "Punta Cana Hotel",
      address: "Punta Cana Hotel",
      telephone: "Punta Cana Hotel",
      mail: "Punta Cana Hotel",
      socialNetworks: [
        {
          name: "facebook",
          url: "facebook/puntaCAana",
        },
      ],
      amenities: ["piscina", "desayuno"],
      images: [
        {
          url: "",
          alt: "",
        },
      ],
      description: "description 1 lorem lorem lorem",
    },
    location: {
      city: "Caribe",
      state: [],
      country: "",
    },
    reservation: {
      status: "pending",
      startDate: "2021-10-31T01:30:00.000-05:00",
      endDate: "2020-10-31T01:30:00.000-05:00",
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
  };
  return {
    props: {
      reservation,
    },
  };
};