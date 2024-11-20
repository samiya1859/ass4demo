import { GetServerSideProps } from "next";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

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
  initialHotelData?: Hotel;
  error?: string;
}

const HotelDetails = ({ initialHotelData, error }: Props) => {
  const router = useRouter();
  const { hotel_id } = router.query; // Changed from id to hotel_id

  const [hotel, setHotel] = useState<Hotel | null>(initialHotelData || null);
  const [loading, setLoading] = useState(!initialHotelData);
  const [fetchError, setFetchError] = useState(error);

  useEffect(() => {
    if (initialHotelData) return;

    const fetchHotelData = async () => {
      if (!hotel_id) return; // Changed from id to hotel_id

      console.log("Fetching hotel with ID:", hotel_id); // Updated debug log

      try {
        const apiUrl = `http://localhost:3001/api/hotels/${hotel_id}`; // Changed from id to hotel_id
        console.log("API URL:", apiUrl);

        const response = await fetch(apiUrl, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });

        console.log("Response status:", response.status);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Received data:", data);
        setHotel(data);
      } catch (error) {
        console.error("Error fetching hotel data:", error);
        setFetchError(
          error instanceof Error ? error.message : "Failed to fetch hotel data"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchHotelData();
  }, [hotel_id, initialHotelData]); // Changed dependency from id to hotel_id

  // Updated debug information
  const debugInfo = (
    <div className="bg-gray-100 p-4 mb-4 rounded">
      <h3 className="font-bold">Debug Info:</h3>
      <p>Hotel ID: {hotel_id}</p>
      <p>Loading: {loading.toString()}</p>
      <p>Error: {fetchError || "none"}</p>
      <p>Has Data: {!!hotel}</p>
    </div>
  );

  // Rest of the component remains the same...
  // (Component return logic omitted for brevity)
};

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const { hotel_id } = context.params || {}; // Changed from id to hotel_id

  console.log("Server-side props - Hotel ID:", hotel_id);

  if (!hotel_id) {
    return {
      props: {
        error: "Hotel ID is required",
      },
    };
  }

  try {
    const apiUrl = `http://localhost:3001/api/hotels/${hotel_id}`; // Changed from id to hotel_id
    console.log("Server-side API URL:", apiUrl);

    const response = await fetch(apiUrl, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    console.log("Server-side response status:", response.status);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Server-side received data:", data);

    return {
      props: {
        initialHotelData: data,
      },
    };
  } catch (error) {
    console.error("Server-side error fetching hotel data:", error);
    return {
      props: {
        error: "Failed to load hotel data",
      },
    };
  }
};

export default HotelDetails;
