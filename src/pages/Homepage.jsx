import Space from "../components/Space"

const Homepage =()=>{
    return (
        <>
        <div id="homepage"  className=" w-full my-10 my-4 mx-auto p-10 flex">
        <div className="my-10 max-w-4xl my-4 mx-auto p-10">
          <h1>Hello there, I am Andrew Lau, Junior Software Developer
          </h1>
        </div>
        <div className="my-10 max-w-4xl my-4 mx-auto p-10">
        <img src="profilePicture.JPG" className="w-1/2 mx-auto rounded-full"></img>
        </div>
        </div>
        <Space spaceNeeded="h-60"/>
        </>
    )
}

export default Homepage