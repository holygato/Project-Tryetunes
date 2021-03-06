// importa React e  Props
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Cria uma classe responsável por renderizar os álbuns
class AlbumCard extends Component {
  render() {
    // desestrutura as props
    const {
      artwork,
      collectionName,
      artistName,
    } = this.props;

    return (
      // cria uma sessão para os álbums
      <section className="album-card">
        {/* Exibe o AlbumCard */}
        <img src={ artwork } alt={ collectionName } />
        <h4>{ collectionName }</h4>
        <p>{ artistName }</p>
      </section>
    );
  }
}

// declara os tipos das props
AlbumCard.propTypes = {
  artwork: PropTypes.string.isRequired,
  collectionName: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired,
};

// exporta a classe
export default AlbumCard;
