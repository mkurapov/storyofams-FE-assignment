import React from 'react';
import { IAppState, IImage } from '../../types';
import Image from '../../components/Image/Image';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { toggleSavedImage } from '../../actions';

const Favourites = (props:any) => {
  return (
    <div className="content">
      <h1 className="text-left">Favourites</h1>
      {
        props.savedImages.length > 0 ? 
        (<div className="row">
      { props.savedImages.map((image:IImage) => 
        <div key={image.id} className="col-12 col-md-6 col-lg-3 mb-3">
          <Link to={`/photo/${image.id}`}>
            <Image 
              image={image} 
              isSaved={true}  
              toggleSavedImage={() => props.toggleSavedImage(image)}
              ></Image>
          </Link>
        </div>
        ) }
      </div>)
      :
      <h3>Nothing here yet. Start liking some photos!</h3>
      }
    </div>
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
