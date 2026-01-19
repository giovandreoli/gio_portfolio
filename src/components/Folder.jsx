export default function Folder({ name, onOpen }) {
  return (
    <div className="folder" onClick={onOpen}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/716/716784.png"
        alt={name}
      />
      <span>{name}</span>
    </div>
  )
}
