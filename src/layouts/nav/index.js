import React from 'react'
import { Link } from 'react-router-dom'
import { Item, Btn, SubMenu, UList } from './styles'

export default function Nav() {
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
              <Item>
                <Link to={'/shots/add'}>Add Shot</Link>
              </Item>
              <Item>
                <Link to={'/reports/add'}>Add Report</Link>
              </Item>
            </SubMenu>
          </Item>
        </SubMenu>
      </Item>
      <Item>
        <Link to={'/employees'}>Employees</Link>
        <SubMenu>
          <Item>
            <Link to={'/employees'}>Employees List</Link>
          </Item>
          <Item>
            <Link to={'/employees/add'}>Add Employee</Link>
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
            <Link to={'/users/add'}>Add User</Link>
          </Item>
          <Item>
            <Link to={'/'}>Settings</Link>
          </Item>
        </SubMenu>
      </Item>
      <Btn>
        <Link to={'/'}>Adrian</Link>
      </Btn>
    </UList>
  )
}
