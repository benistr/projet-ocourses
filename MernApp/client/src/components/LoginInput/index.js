import React from 'react';
import PropTypes from 'prop-types';

// Composant de présentation.
const LoginInput = ({
  type,
  className,
  placeholder,
  // Duo de props pour faire une input contrôlé :
  value,
  onChange
}) => {
  // TODO: un peu relou de faire ce listing… trouver un moyen d'automatiser
  return <input
    type={type}
    className={className}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />;
};

// Documentation des différents types de props attendues.
LoginInput.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

// Valeurs par défaut pour les props non-obligatoires.
LoginInput.defaultProps = {
  type: 'text',
  className: 'field',
  placeholder: ''
};

export default LoginInput;
