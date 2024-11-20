interface TravelersModalProps {
    isOpen: boolean;
    onClose: () => void;
  }
  
  const TravelersModal: React.FC<TravelersModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
  
    return (
      <div className="travelers-modal">
        <div className="modal-content">
          <h2>Travelers</h2>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    );
  };
  
  export default TravelersModal;
  