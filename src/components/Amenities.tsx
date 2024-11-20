const amenities = [
    { src: 'images/barbecue.png', alt: 'Barbecue grill', text: 'Barbecue grill' },
    { src: 'images/outdoor.png', alt: 'Outdoor Space', text: 'Outdoor Space' },
    { src: 'images/kitchen-set.png', alt: 'Kitchen', text: 'Kitchen' },
    { src: 'images/drying.png', alt: 'Washer', text: 'Washer' },
    { src: 'images/parking-area.png', alt: 'Parking available', text: 'Parking available' },
    { src: 'images/tumble-dryer.png', alt: 'Dryer', text: 'Dryer' },
  ];
  
  const Amenities = () => (
    <ul className="amenities">
      {amenities.map((amenity, index) => (
        <li key={index}>
          <img src={amenity.src} alt={amenity.alt} />
          {amenity.text}
        </li>
      ))}
    </ul>
  );
  
  export default Amenities;
  