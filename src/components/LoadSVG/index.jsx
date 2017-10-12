import React from 'react';
import PropTypes from 'prop-types';

class LoadSVG extends React.PureComponent {
  render() {
    const { className, glyph, viewBox, ...restProps } = this.props;
    return (
      <svg className={className} viewBox={viewBox} {...restProps}>
        <use xlinkHref={`#${glyph}`} />
      </svg>
    );
  }
}

LoadSVG.propTypes = {
  glyph: PropTypes.string,
  viewBox: PropTypes.string,
  className: PropTypes.string
};

LoadSVG.defaultProps = {
  glyph: '',
  viewBox: '',
  className: 'icon'
};

export default LoadSVG;
