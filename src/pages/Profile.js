import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function Profile(props) {
  const getUser = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    const { history } = props;
    localStorage.setItem('user', null);
    history.push('/');
  };

  return (
    <div>
      Profile
      <p
        data-testid="profile-email"
      >
        {getUser ? getUser.email : 'Email não encontrado'}
      </p>
      <Link to="/done-recipes">
        <button type="button" data-testid="profile-done-btn">Done Recipes</button>
      </Link>
      <Link to="/favorite-recipes">
        <button type="button" data-testid="profile-favorite-btn">Favorite Recipes</button>
      </Link>
      <button
        type="button"
        data-testid="profile-logout-btn"
        onClick={ handleLogout }
      >
        Logout
      </button>
      <Footer />
    </div>
  );
}

Profile.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

export default Profile;
