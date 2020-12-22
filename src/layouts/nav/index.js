import React from 'react'
import { Link } from 'react-router-dom'
import { Item, SubMenu, UList, ItemBtn } from './styles'
import { useSelector } from 'react-redux'

export default function Nav({ logoutHandler }) {
  const name = useSelector((state) => state.user.name)
  const logOut = () => {
    logoutHandler()
  }
  return (
    <UList>
      <Item>
        <Link to={'/'}>Home</Link>
      </Item>
      <Item>
        <Link to={'/'}>Injection</Link>
        <SubMenu>
          <Item>
            <Link to={'/'}>Injection Data</Link>
            <SubMenu>
              <Item>
                <Link to={'/molds'}>Moldes</Link>
              </Item>
              <Item>
                <Link to={'/machines'}>Machines</Link>
              </Item>
              <Item>
                <Link to={'/models'}>Models</Link>
              </Item>
              <Item>
                <Link to={'/programs'}>Programs</Link>
              </Item>
              <Item>
                <Link to={'/materials'}>Raw Material</Link>
              </Item>
              <Item>
                <Link to={'/issues'}>Issues</Link>
              </Item>
              <Item>
                <Link to={'/defects'}>Defects</Link>
              </Item>
            </SubMenu>
          </Item>
          <Item>
            <Link to={'/reports'}>Production</Link>
            <SubMenu>
              <Item>
                <Link to={'/calendar'}>Calendar</Link>
              </Item>
              <Item>
                <Link to={'/shots'}>Shots</Link>
              </Item>
              <Item>
                <Link to={'/reports'}>Reports</Link>
              </Item>
              <Item>
                <Link to={'/production'}>Production Data</Link>
              </Item>
            </SubMenu>
          </Item>
        </SubMenu>
      </Item>
      <Item>
        <Link to={'/employees'}>Employees</Link>
        <SubMenu>
          <Item>
            <Link to={'/employees'}>Employees</Link>
          </Item>
        </SubMenu>
      </Item>
      <Item>
        <Link to={'/'}>Settings</Link>
        <SubMenu>
          <Item>
            <Link to={'/users'}>Users</Link>
          </Item>
          <Item>
            <Link to={'/'}>Settings</Link>
          </Item>
        </SubMenu>
      </Item>
      <ItemBtn>
        <Link to={'/'}>{name}</Link>
        <SubMenu>
          <Item>
            <Link to={'/'} onClick={logOut}>
              logout
            </Link>
          </Item>
        </SubMenu>
      </ItemBtn>
    </UList>
  )
}
