import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import "./styles.scss";

const Dashboard = () => {
  return (
    <div id="dashboard">
      <ProSidebar>
        <Menu iconShape="square">
          <MenuItem>Dashboard</MenuItem>
          <SubMenu title="HTML">
            <MenuItem>
            <NavLink to="/dashboard/html/tags" activeClassName="active">
              Tags
            </NavLink>
            </MenuItem>
            <MenuItem>
            <NavLink to="/dashboard/html/semantics"  activeClassName="active">
              Semantica
            </NavLink>
            </MenuItem>
          </SubMenu>
          <SubMenu title="CSS">
            <MenuItem>
              <NavLink to="/dashboard/css/selectors" activeClassName="active">
                Selectores
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink to="/dashboard/css/pseudoclasses" activeClassName="active">
                Pseudoclases
              </NavLink>
            </MenuItem>
            <MenuItem>
              {/* <NavLink to="/dashboard/css" activeClassName="active">
                Preprocesadores
              </NavLink> */}
            </MenuItem>
          </SubMenu>
          <SubMenu title="Flexbox">
            <MenuItem>Que es flexbox</MenuItem>
            <MenuItem>Como funciona</MenuItem>
          </SubMenu>
          <SubMenu title="Javascript">
            <MenuItem>Que es Js</MenuItem>
            <MenuItem>Funciones</MenuItem>
          </SubMenu>
          <SubMenu title="Helpers">
            <MenuItem>React</MenuItem>
            <MenuItem>Node</MenuItem>
          </SubMenu>
        </Menu>
      </ProSidebar>
      <section id="dashboard__main">
        <Outlet />
      </section>
    </div>
  )
}

export default Dashboard