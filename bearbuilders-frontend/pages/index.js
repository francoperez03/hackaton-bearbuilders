import React from 'react'
import axios from 'axios'
import Link from 'next/link';


export default function index({ reservations }) {
  return (
    <div>
      <select name="options" id="options">
        <option value="Nuevas">Reservar</option>
        <option value="Subastas">Reservas</option>
      </select>
      {reservations.map(reservation => (
        <Link href={`/reservations/${reservation.id}`} key={reservation.id}>
          <a>
            <div>
              <h1>{reservation.hotel.name}</h1>
            </div>
          </a>
        </Link>
      ))}
    </div>
  )
}


export const getServerSideProps = async (context) => {

  const { data: reservations } = await axios.get('http://localhost:3002/reservations')
  // console.log(res.data)

  return {
    props: {
      reservations
    }
  }
}
