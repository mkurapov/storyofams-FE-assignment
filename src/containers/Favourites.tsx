import React from 'react';
import { IAppState, IImage } from '../types';
import Image from '../components/Image';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toggleSavedImage } from '../actions';

const Favourites = (props:any) => {
  return (
    <React.Fragment>
      <div className="h1">Favourites</div>
      <div className="search-results">
      { props.savedImages.map((image:IImage) => 
        <div key={image.id} className="col-md-6 col-lg-4 mb-3">
          <Image 
            image={image} 
            isSaved={true}  
            toggleSavedImage={() => props.toggleSavedImage(image)}
            ></Image>
        </div>
        ) }
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state:IAppState) => ({
  savedImages: state.savedImages || []
});

const mapDispatchToProps = (dispatch:any) => ({
  toggleSavedImage: (image:any) => dispatch(toggleSavedImage(image))
}); 

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Favourites));
