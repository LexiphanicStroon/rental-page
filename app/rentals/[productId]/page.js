'use client';

import { useRouter } from 'next/navigation';
import products from '../../data/products';
import { useState, useEffect } from 'react';
import { DateRange } from 'react-date-range';
import { addDays } from 'date-fns';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

export default function ProductDetailsPage({ params }) {
  const router = useRouter();
  const { productId } = params;
  const product = products.find((p) => p.id === productId);

const scrollElementIntoView = (element, behavior = 'smooth') => {
  const scrollTop = window.pageYOffset || element.scrollTop;
  const finalOffset = element.getBoundingClientRect().top + scrollTop;

  window.scrollTo({
    top: finalOffset,
    behavior,
  });
};

const [formData, setFormData] = useState({
  name: '',
  email: '',
  phone: '',
});

useEffect(() => {
  if (product) {
    const scrollAnchor = document.getElementById('scroll-anchor');
    if (scrollAnchor) {
      setTimeout(() => {
        scrollAnchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.scrollTo({ top: 0, behavior: 'smooth' }); 
      }, 100); 
    }
  }
}, [product]);


const handleSubmit = async (e) => {
  e.preventDefault();

  const selectedDates = {
    startDate: dateRange[0].startDate,
    endDate: dateRange[0].endDate,
  };

  const response = await fetch('/api/sendEmail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...formData,
      ...selectedDates,
      product: product.title,
    }),
  });

  if (response.ok) {
    window.va('event', {
      name: 'ReservationRequest',
      data: {
        product: product.title,
        startDate: selectedDates.startDate.toISOString(),
        endDate: selectedDates.endDate.toISOString(),
      },
    });
    alert(
      'Reservation request sent! You will receive a confirmation email shortly.'
    );
  } else {
    alert('There was an issue submitting your reservation.');
  }
};


const [dateRange, setDateRange] = useState([
  {
    startDate: new Date(),
    endDate: addDays(new Date(), 1),
    key: 'selection',
  },
]);

const handleDateChange = (ranges) => {
  setDateRange([ranges.selection]);
};

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};

if (!product) {
  return (
    <div className="p-8">
      <Head>
        <title>Rental not found</title>
      </Head>
      <h1>Product not found</h1>
      <p>
        We're sorry, we couldn't find that item, or there was an error on this
        page.
      </p>
      <button
        onClick={() => router.back()}
        className="mt-4 px-4 py-2 bg-gray-800 text-white rounded"
      >
        Go Back
      </button>
    </div>
  );
}

return (
  <>
    <title>{`Rentals | ${product.title}`}</title>
    <div className="p-2 sm:p-8">
      <div id="scroll-anchor">
        <button
          id="go-back-button"
          onClick={() => router.back()}
          className="mb-4 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded"
        >
          Go Back
        </button>
      </div>

      <div
        id="product-section"
        className="bg-white text-black p-4 shadow-md rounded-md"
      >
        <img
          src={`/${product.image}`}
          alt={product.title}
          className="w-full h-64 object-contain"
        />
        <h1 className="mt-4 text-2xl font-bold">{product.title}</h1>
        <p className="mt-2 text-gray-600">${product.price}/day</p>

        <div className="mt-4">
          <h3 className="font-semibold text-lg">Description:</h3>
          <p className="mt-2 text-gray-700">{product.description}</p>
        </div>

        {/* Date Picker */}
        <div className="mt-8">
          <h3 className="font-semibold text-lg">Select Rental Dates:</h3>
          <div className="w-full sm:w-[500px]">
            {' '}
            {/* Adjust width for desktop */}
            <DateRange
              editableDateInputs={true}
              onChange={handleDateChange}
              moveRangeOnFirstSelection={false}
              ranges={dateRange}
              minDate={new Date()}
              rangeColors={['#3f87a6']}
              className="w-full"
              scroll={{ enabled: true }}
            />
          </div>
        </div>

        {/* Reservation Form */}
        <div className="mt-8">
          <h3 className="font-semibold text-lg">Reserve Now:</h3>
          <p className="text-gray-600 mb-4">
            Fill out your details below to reserve your rental and we will send
            you a confirmation email within 24 hours. Payments due in full prior
            to rental pickup. Visa, Mastercard, AMEX, and E-Transfer accepted.
          </p>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded w-full"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded w-full"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded w-full"
              required
            />
            <button
              type="submit"
              className="bg-black text-white p-2 rounded w-full"
            >
              Submit Reservation
            </button>
          </form>
        </div>
      </div>
    </div>
  </>
);
}
