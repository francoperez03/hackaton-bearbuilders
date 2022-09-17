import React from "react";
import axios from "axios";
import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";
export default function index({ reservations }) {
  return (
    <div>
      <select name="options" id="options">
        <option value="Nuevas">Reservar</option>
        <option value="Subastas">Reservas</option>
      </select>
      <ConnectButton
        label="Conectá tu billetera"
        // accountStatus="address"
        // chainStatus="none"
        // showBalance={false}
      />
      {reservations.map((reservation) => (
        <Link href={`/reservations/${reservation.id}`} key={reservation.id}>
          <a>
            <div>
              <h4>{reservation.hotel.name}</h4>
              <h4>{reservation.reservation.startDate}</h4>
              <h4>{reservation.reservation.endDate.toString()}</h4>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const { data: reservations } = await axios.get(
    "http://0.0.0.0:3002/reservations"
  );
  // console.log(res.data)

  return {
    props: {
      reservations,
    },
  };
};
