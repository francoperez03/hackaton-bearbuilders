import React from "react";
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
  const reservations = [
    {
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
    },
    {
      id: "2",
      hotel: {
        name: "Faena Hotel",
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
        city: "Buenos Aires",
        state: [],
        country: "",
      },
      reservation: {
        status: "confirmed",
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
    },
  ];

  return {
    props: {
      reservations,
    },
  };
};
