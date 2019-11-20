import React,  {memo}  from 'react';
import { connect } from 'react-redux'
import { fetchImages, saveImage } from '../actions';
import { withRouter } from 'react-router-dom'


const Search = memo((state:any) => {
    function doShit() {
      console.log(state);
      state.searchImages('yes');
    }

    function renderResults() {
      console.log('rendering');
      return state.images.map((image:any) => 
          <img className="dog" onClick={ () => state.saveImage(image) } src={image.urls.regular} key={image.id}/>
        )
    }
    return (
      <React.Fragment>
        <div onClick={()=> doShit()}>
          Search
        </div>
        { renderResults() }
      </React.Fragment>
    );
});

const mapStateToProps = (state:any) => ({
  images: state.currentQuery.results || []
});

const mapDispatchToProps = (dispatch:any) => ({
  searchImages: (query:string) => dispatch(fetchImages(query)),
  saveImage: (image:any) => dispatch(saveImage(image))
}); 

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search));

