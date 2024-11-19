import { GetServerSideProps } from "next";
import Link from "next/link";

interface Hotel {
  id: number;
  title: string;
  address: string;
  rating: number;
  image: string; // Make sure your API provides this field
}

interface Props {
  hotels: Hotel[];
}

const AllHotels = ({ hotels }: Props) => {
  return (
    <div>
      <h1>All Hotels</h1>
      <div className="hotel-grid">
        {hotels.map((hotel) => (
          <Link key={hotel.id} href={`/hotel/${hotel.id}`}>
            <div className="hotel-card">
              <img src={hotel.image} alt={hotel.title} />
              <h3>{hotel.title}</h3>
              <p>{hotel.address}</p>
              <p>Rating: {hotel.rating}/5</p>
            </div>
          </Link>
        ))}
      </div>

      <style jsx>{`
        .hotel-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 20px;
          padding: 20px;
        }

        .hotel-card {
          border: 1px solid #ddd;
          border-radius: 10px;
          overflow: hidden;
          text-align: center;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          cursor: pointer;
        }

        .hotel-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        .hotel-card img {
          width: 100%;
          height: 150px;
          object-fit: cover;
        }

        .hotel-card h3 {
          font-size: 1.2rem;
          margin: 10px 0 5px;
        }

        .hotel-card p {
          color: #555;
          font-size: 0.9rem;
        }
      `}</style>
    </div>
  );
};

// Fetch hotels data from the API
export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("http://localhost:3001/api/hotels/");
  const hotels: Hotel[] = await res.json();

  return {
    props: {
      hotels,
    },
  };
};

export default AllHotels;
