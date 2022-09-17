import React from "react";
import { useAccount } from "wagmi";
import Web3Button from "./Web3Button";
export default function ReservationDetail({ reservation }) {
  const { address, status } = useAccount();
  return (
    <div>
      <h1>hotel: {reservation.hotel.name}</h1>
      <h1>city: {reservation.location.city}</h1>
      <h1>reservation status: {reservation.reservation.status}</h1>
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
