var React = require('react');
var NavLink = require('react-router-dom').NavLink;

function Nav () {
  return (
    <ul className='nav'>
      <li>
        <NavLink exact activeClassName='active' to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/battle'>Chat</NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/battle'>Bug Tracking</NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/popular'>Project Management</NavLink>
      </li>
    </ul>
  )
}

module.exports = Nav;
