import React from "react";
import axios from "axios";

export default function reservationDetail({ reservation }) {
  return (
    <div>
      <h1>hotel: {reservation.hotel.name}</h1>
      <h1>city: {reservation.location.city}</h1>
      <h1>reservation status: {reservation.reservation.status}</h1>
      <button>Sell reservation</button>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const { data: reservation } = await axios.get(
    "http://localhost:3002/reservations/" + context.query.id
  );

  return {
    props: {
      reservation,
    },
  };
};
