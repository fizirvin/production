import React from 'react'

export default function Navbar() {
  return (
    <header>
      <div className="container">
        <nav>
          <div className="menu-icons">
            <i className="icon ion-md-menu"></i>
            <i className="icon ion-md-close"></i>
          </div>
          <a className="logo">
            <i className="icon ion-md-restaurant"></i>
          </a>
          <ul className="nav-list">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>
                Menu
                <i className="icon ion-md-arrow-dropdown"></i>
              </a>
              <ul className="sub-menu">
                <li>
                  <a>Breakfast</a>
                </li>
                <li>
                  <a>
                    Lunch
                    <i className="icon ion-md-arrow-dropdown"></i>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a>Food1</a>
                    </li>
                    <li>
                      <a>Food2</a>
                    </li>
                    <li>
                      <a>
                        .More
                        <i className="icon ion-md-arrow-dropdown"></i>
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a>Food1</a>
                        </li>
                        <li>
                          <a>Food2</a>
                        </li>
                        <li>
                          <a>Food3</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Dinner</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Our Chefs</a>
            </li>
            <li>
              <a>Gallery</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
            <li className="move-right btn">
              <a>Book a Table</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
