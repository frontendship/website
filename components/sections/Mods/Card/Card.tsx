interface CardProps {
  name: string
  role: string
  image: string
}

const Card = (props: CardProps) => {
  return (
    <div className="w-full bg-white rounded-xl border border-silver-200 shadow-md p-10">
      <div className="flex flex-col items-center">
        <img
          className="mb-3 w-24 h-24 rounded-full shadow-lg"
          src={`/contributors-asset/${props.image}`}
          alt={props.name}
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900">{props.name}</h5>
        <span className="text-sm text-gray-500">{props.role}</span>
      </div>
    </div>
  )
}

export default Card
