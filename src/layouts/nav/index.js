import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Item, SubMenu, UList, ItemBtn } from './styles'
import { useSelector } from 'react-redux'

export default function Nav({ logoutHandler, open, mobile, setOpen }) {
  const [flex, setFlex] = useState('none')
  const name = useSelector((state) => state.user.name)

  useEffect(() => {
    if (!mobile && !open) {
      setFlex('flex')
    }
    if (mobile && !open) {
      setFlex('none')
    }
    if (mobile && open) {
      setFlex('flex')
    }
  }, [open, mobile])

  const logOut = () => {
    logoutHandler()
  }

  return (
    <UList style={{ display: flex }}>
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
                <Link onClick={() => setOpen(!open)} to={'/molds'}>
                  Moldes
                </Link>
              </Item>
              <Item>
                <Link onClick={() => setOpen(!open)} to={'/machines'}>
                  Machines
                </Link>
              </Item>
              <Item>
                <Link onClick={() => setOpen(!open)} to={'/models'}>
                  Models
                </Link>
              </Item>
              <Item>
                <Link onClick={() => setOpen(!open)} to={'/programs'}>
                  Programs
                </Link>
              </Item>
              <Item>
                <Link onClick={() => setOpen(!open)} to={'/materials'}>
                  Raw Material
                </Link>
              </Item>
              <Item>
                <Link onClick={() => setOpen(!open)} to={'/issues'}>
                  Issues
                </Link>
              </Item>
              <Item>
                <Link onClick={() => setOpen(!open)} to={'/defects'}>
                  Defects
                </Link>
              </Item>
            </SubMenu>
          </Item>
          <Item>
            <Link to={'/reports'}>Production</Link>
            <SubMenu>
              <Item>
                <Link onClick={() => setOpen(!open)} to={'/calendar'}>
                  Calendar
                </Link>
              </Item>
              <Item>
                <Link onClick={() => setOpen(!open)} to={'/shots'}>
                  Shots
                </Link>
              </Item>
              <Item>
                <Link onClick={() => setOpen(!open)} to={'/reports'}>
                  Reports
                </Link>
              </Item>
              <Item>
                <Link onClick={() => setOpen(!open)} to={'/production'}>
                  Production Data
                </Link>
              </Item>
            </SubMenu>
          </Item>
          <Item>
            <Link to={'/spares'}>Inventory</Link>
            <SubMenu>
              <Item>
                <Link onClick={() => setOpen(!open)} to={'/locations'}>
                  Locations
                </Link>
              </Item>
              <Item>
                <Link onClick={() => setOpen(!open)} to={'/spares'}>
                  Spares Stock
                </Link>
              </Item>
              <Item>
                <Link onClick={() => setOpen(!open)} to={'/ingoings'}>
                  Spares Ingoings
                </Link>
              </Item>
            </SubMenu>
          </Item>
        </SubMenu>
      </Item>
      <Item>
        <Link to={'/employees'}>Employees</Link>
        <SubMenu>
          <Item>
            <Link onClick={() => setOpen(!open)} to={'/employees'}>
              Employees
            </Link>
          </Item>
        </SubMenu>
      </Item>
      <Item>
        <Link to={'/'}>Settings</Link>
        <SubMenu>
          <Item>
            <Link onClick={() => setOpen(!open)} to={'/users'}>
              Users
            </Link>
          </Item>
          <Item>
            <Link onClick={() => setOpen(!open)} to={'/'}>
              Settings
            </Link>
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
