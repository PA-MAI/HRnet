export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
}
