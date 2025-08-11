import { FaUserCircle } from "react-icons/fa"


const UserCard = ({person}:any) => {
  return (
    <div className="flex items-center justify-between">
      <section className="flex items-center">
        <FaUserCircle className="text-3xl mr-3 text-gray-500"/>

        <span>{person.name}</span>
      </section>

      <button className={`px-4 py-1 text-sm rounded-full ${
          person.following ? "bg-black text-white hover:bg-black" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}>{person.following ? "Following" : "Follow" }</button>
    </div>
  )
}

export default UserCard
