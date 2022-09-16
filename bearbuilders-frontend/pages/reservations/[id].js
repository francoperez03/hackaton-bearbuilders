import React from 'react'
import axios from 'axios'

export default function reservationDetail({ reservation }) {
    return (
        <div>
            <h1>{reservation.hotel.name}</h1>
        </div>
    )
}


export const getServerSideProps = async (context) => {
    const { data: reservation } = await axios.get('http://0.0.0.0:50296/reservations/' + context.query.id)


    return {
        props: {
            reservation
        }
    }
}