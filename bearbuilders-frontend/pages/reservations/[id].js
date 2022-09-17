import React from "react";
import { useAccount } from "wagmi";
import Web3Button from "./Web3Button";
import { ConnectButton } from "@rainbow-me/rainbowkit";
//import Image from 'next/image'
import { Image } from "@nextui-org/react";

export default function ReservationDetail({ reservation }) {
  const { address, status } = useAccount();
  return (
    <section className='reservation-detail'>
      <section className='reservation-detail__img'>
        <div className="icons">
          <Image
            width={700}
            height={500}
            layout={'fill'}
            src={reservation.hotel.images[0].url}
            alt="Default Image"
            objectFit="cover"
          />
        </div>
      </section>
      <section className="reservation-detail__content">
        <div className="reservation-detail__info">
          <h2>{reservation.hotel.name}</h2>
          <h6>{`${reservation.location.city}, ${reservation.location.country}`}</h6>
          <h2 className="reservation-detail__info-price">$2500</h2>
          <p className="reservation-detail__info-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <p className="reservation-detail__info-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="reservation-detail__content-buttons">
          <ConnectButton
            label="Conectá tu billetera"
          // accountStatus="address"
          // chainStatus="none"
          // showBalance={false}
          />
          <Web3Button
            approveContractAddress={
              "0x0459ee30F112654b25523c289a89445321dF6589"
            }
            contractAddress={"0x8B503347795042444f9395a9d31E44F2425d3AeD"}
            functionName={"makeAReservation"}
            idleText={"Reservar"}
            pendingText={"Reservando"}
            succesText={"Reservado!"}
          />
        </div>
      </section>
    </section>
  );
}

export const getServerSideProps = async (context) => {
  const id = context.query.id;
  const reservation = [
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
            url: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/55261050.jpg?k=e8b2cd7accad1318122aa09bdcb5b9c5763b06d806bde349ef54d3667810d225&o=&hp=1",
            alt: "hotelimg",
          },
        ],
        description: "Este hotel de playa goza de vistas al océano Atlántico, alberga una piscina al aire libre en la 7ª planta y ofrece acceso privado a la playa y suites amplias. El Grand Beach Hotel está a 5,9 km de South Beach.",
      },
      location: {
        city: "Miami",
        state: [],
        country: "USA",
      },
      reservation: {
        status: "pending",
        startDate: "14 oct 2022",
        endDate: "18 oct 2022",
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
        name: "Palacio Paz Boutique Hotel",
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
            url: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/228711058.jpg?k=89cadc97c727d845d2983f93d48457c41edfdee0fe73842480a89a3bd562e930&o=&hp=1",
            alt: "hotelimg",
          },
        ],
        description: "El Palacio Paz Boutique Hotel alberga un bar y ofrece habitaciones en Buenos Aires, a 700 metros de la basílica del Santísimo Sacramento y a 1,5 km del Obelisco de Buenos Aires. Cuenta con restaurante, recepción 24 horas, servicio de habitaciones y WiFi gratuita en todas las instalaciones. El hotel ofrece habitaciones familiares.",
      },
      location: {
        city: "Buenos Aires",
        state: [],
        country: "Argentina",
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
      id: "4",
      hotel: {
        name: "Hotel Lutetia",
        address: "45 Boulevard Raspail, Saint-Germain - 6º distrito, 75006 París, Francia",
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
        description: "El Hotel Lutetia es un emblemático hotel de lujo ubicado en el barrio de Saint-Germain-des-Prés. Está situado en la margen izquierda del río Sena, a 5 minutos a pie de los grandes almacenes Le Bon Marché y a 2 km del Museo del Louvre. El edificio del hotel es todo un símbolo de París y alberga 184 habitaciones, entre ellas 40 suites y 7 suites exclusivas. Cada una de ellas cuenta con WiFi gratuito, centros multimedia y baños de mármol. Algunas habitaciones tienen balcón con vistas a la Torre Eiffel. Además, algunas de las suites tienen azotea con terraza y vistas de 360 grados a París. El centro holístico de bienestar Akasha cuenta con centro de fitness, sauna, sala de vapor y piscina cubierta de 17 metros con luz natural durante el día. También ofrece una amplia gama de tratamientos de spa por un suplemento. ",
      },
      location: {
        city: "Paris",
        state: [],
        country: "Francia",
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
      id: "3",
      hotel: {
        name: "NYX Hotel London Holborn",
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
        description: "El NYX Hotel London Holborn by Leonardo Hotels alberga un centro de spa y bienestar y ofrece habitaciones de lujo y WiFi gratuita. Se halla a solo 5 minutos a pie del Museo Británico.",
      },
      location: {
        city: "London",
        state: [],
        country: "United Kingdom ",
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
      id: "5",
      hotel: {
        name: "Melas Hotel Istanbul",
        address: "Profesör Doktor Bülent Tarcan Caddesi Gayrettepe Beşiktaş, Besiktas, 34349 Estambul, Turquía –",
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
        description: "El Melas Hotel Istanbul está ubicado en Estambul, a 2,2 km del rascacielos Istanbul Sapphire, y ofrece restaurante, aparcamiento privado gratuito, centro de fitness y bar. Este hotel está bien situado en el distrito de Sisli y cuenta con salón común, piscina cubierta y hammam. Hay recepción 24 horas, servicio de habitaciones y cambio de divisa.",
      },
      location: {
        city: "Estambul",
        state: [],
        country: "Turquia",
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
      id: "6",
      hotel: {
        name: "Tembo Beach Club & Resort",
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
        description: "El Tembo Beach Club & Resort se encuentra en Koh Samui y ofrece restaurante, piscina al aire libre, bar y salón compartido. Hay servicio de habitaciones, cajero automático y WiFi gratuita en todas las instalaciones. El establecimiento ofrece servicio de alquiler de coches, jardín y solárium.",
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
      id: "7",
      hotel: {
        name: "Oleo Cancun Playa Boutique All Inclusive Resort",
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
        description: "El Melas Hotel Istanbul está ubicado en Estambul, a 2,2 km del rascacielos Istanbul Sapphire, y ofrece restaurante, aparcamiento privado gratuito, centro de fitness y bar. Este hotel está bien situado en el distrito de Sisli y cuenta con salón común, piscina cubierta y hammam. Hay recepción 24 horas, servicio de habitaciones y cambio de divisa.",
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
      reservation: reservation.find((item) => item.id === id),
    },
  };
};