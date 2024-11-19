// pages/hotel/[id].tsx
import { GetServerSideProps } from "next";
import { useState, useEffect } from "react";

interface Room {
  room_slug: string;
  room_title: string;
  room_image?: string;
  bedroom_count: number;
}

interface Hotel {
  hotel_id: number;
  title: string;
  image: string;
  description: string;
  guest_count: number;
  bedroom_count: number;
  bathroom_count: number;
  amenities: string[];
  host_information: {
    name: string;
    contact: string;
    phone: string;
  };
  address: string;
  rooms: Room[];
}

interface Props {
  hotel: Hotel;
}

const HotelDetails = ({ hotelId }: { hotelId: number }) => {
  const [hotel, setHotel] = useState<any>(null); // State to store hotel data
  const [loading, setLoading] = useState<boolean>(true); // Loading state

  useEffect(() => {
    const fetchHotelData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/api/hotels/${hotelId}`
        );
        const data = await response.json();
        setHotel(data); // Store the fetched data in state
      } catch (error) {
        console.error("Error fetching hotel data:", error);
      } finally {
        setLoading(false); // Set loading to false when the fetch is done
      }
    };

    fetchHotelData();
  }, [hotelId]);

  // Loading state or error message while data is being fetched
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!hotel) {
    return <div>No hotel data found.</div>;
  }

  return (
    <div>
      <h1>{hotel.title}</h1>
      <strong>Guests:</strong> {hotel.guest_count}
      <br />
      <strong>Bedrooms:</strong> {hotel.bedroom_count}
      <br />
      <strong>Bathrooms:</strong> {hotel.bathroom_count}
      <br />
      <strong>Amenities:</strong>
      <ul>
        {hotel.amenities?.map((amenity: string, index: number) => (
          <li key={index}>{amenity}</li>
        ))}
      </ul>
      <strong>Host Information:</strong>
      <ul>
        <li>
          <strong>Name:</strong> {hotel.host_information?.name}
        </li>
        <li>
          <strong>Contact:</strong> {hotel.host_information?.contact}
        </li>
        <li>
          <strong>Phone:</strong> {hotel.host_information?.phone}
        </li>
      </ul>
      <strong>Rooms:</strong>
      <ul>
        {hotel.rooms?.map((room: any, index: number) => (
          <li key={index}>
            {room.room_title} - {room.bedroom_count} Bedrooms
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HotelDetails;
