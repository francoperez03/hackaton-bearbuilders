import React from "react";
import axios from "axios";
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
  const { data: reservation } = await axios.get(
    "http://0.0.0.0:3002/reservations/" + context.query.id
  );

  return {
    props: {
      reservation,
    },
  };
};
