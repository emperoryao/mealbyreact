import React from 'react';

const Menu = ({item}) => {
  return(<div className="section-center">
    {
      item.map((menu)=>{
        const{id,title,img,desc,price}=menu
        return <article key={id}className="menu-item">
          <img src={img} alt={title} className="photo" />
          <div className="item-info">
            <header>
            <h4>{title}</h4>
            <h5 className="price">${price}</h5>
            </header>       
            <p className="item-text">{desc}</p>    
          </div>
        </article>

      })
    }
  </div>

  );
};

export default Menu;
