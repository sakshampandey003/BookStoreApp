import list from "../../public/list.json"
import Cards from "./Cards"
import {Link} from "react-router-dom"

function Course() {
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="mt-28 items-center justify-center text-center ">
        <h1 className="text-2xl md:text-4xl">We are delighted to have you{" "} <span className="text-blue-500">Here! :)</span></h1>
        <p className="mt-12 ">Welcome to our <span className="text-blue-500">VidyaStore</span> your one-stop destination for literary adventures! Whether you’re a seasoned reader or just starting your journey, our curated collection has something for everyone. Dive into the worlds crafted by your favorite authors, discover new gems, and lose yourself in the magic of books. Join our community of book lovers today and let your next great read begin here!</p>
        <Link to="/">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-800 duration-300 mt-6">Back</button>
        </Link>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
        {
        list.map((item)=>(
          <Cards key={item.id} item={item}/>
        ))  
        }
      </div>
    </div>
    </>
  )
}

export default Course
