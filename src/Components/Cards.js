import React from "react";
  //const pictures = new URL("./book1.jpg",import.meta.url)
  function Cards(props){
   const pictures = new URL("./book2.jpeg",import.meta.url)
   const Pictures = new URL("./book4.jpeg",import.meta.url)
   const Picture = new URL("./book5.jpeg",import.meta.url)
   const picture = new URL("./book6.jpeg",import.meta.url)

    return (
        <div className="cards" id="product">
            <div className="container">
            <div className="content">
            <img src={pictures} width="200px" />
            <h2>Rs.200</h2>
            <h4>Book Ranking On Amazon</h4>
            <button className="order">order now</button>
            </div>
            <div className="content">
            <img src={Pictures} width="200px" />
            <h2>Rs.200</h2>
            <h4>Book Ranking On Amazon</h4>
            <button className="order">order now</button>
            </div>
            <div className="content">
            <img src={picture} width="200px" />
            <h2>Rs.200</h2>
            <h4>Book Ranking On Amazon</h4>
            <button className="order">order now</button>
            </div>
            <div className="content">
            <img src={Picture} width="200px" />
            <h2>Rs.200</h2>
            <h4>Book Ranking On Amazon</h4>
            <button className="order">order now</button>
            </div>
            </div>
        </div>
    )
    }   
  
    export default Cards