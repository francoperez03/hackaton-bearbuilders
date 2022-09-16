const getReservations = async (req, reply) => {
  return reservations;
};

const getReservationById = async ({ id }) => {
  const reservation = reservations.find((reservation) => reservation.id === id);
  if (reservation) {
    return reservation;
  } else {
    return null;
  }
};

const saveProduct = async ({ params }) => {
  const product = new Product(params);
  return await product.save();
};

const updateProduct = async ({ id, params }) => {
  return await Product.findByIdAndUpdate(id, params, {
    new: true,
    runValidators: true,
  });
};

const deleteProduct = async ({ id }) => {
  await Product.findByIdAndDelete(id);
};

module.exports = {
  getReservations,
  getReservationById,
};

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
];
