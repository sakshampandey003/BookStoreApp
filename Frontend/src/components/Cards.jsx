function Cards({ item }) {
  console.log(item);
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200">
          <figure>
            <img
              src={item.image} 
              alt="books"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
             {item.name}
              <div className="badge badge-secondary bg-blue-700 border-blue-700">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions flex justify-between">
              <div className="badge badge-outline">{item.price}</div>
              <div className="badge badge-outline hover:bg-blue-700 hover:text-white duration:200 curser-pointer px-2 py-1 rounded-full  border-[2px]"> ₹ Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
