import "./Main.css" 

const Main = () => {

const headerStyle = {
  color:"brown",
  backgroundColor: "orange",
  fontSize: "2rem"
}

  return (
    <main>
      <h2 style={{color:"red", backgroundColor:"gray"}}>MAIN SECTION</h2>

      <h3 style= {headerStyle}>OtherHeader</h3>

      <p className="par">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam delectus architecto officiis, nam distinctio quos quisquam sunt possimus facere enim maiores accusantium omnis iste ratione doloribus exercitationem expedita tempora similique?</p>

      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem repellendus aspernatur quisquam, laudantium, blanditiis rem vero sint quidem alias accusantium quasi et deserunt quam earum voluptate voluptatem! Ea, quis. Magnam.</p>
      <div className="img">
        <img src="https://cdn.pixabay.com/photo/2024/02/16/19/22/green-parrot-8578205_640.jpg" alt=""/>
      </div>

    </main>
  )
}
export default Main