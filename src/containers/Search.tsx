import React,  {memo}  from 'react';
import { connect } from 'react-redux'
import { fetchImages, saveImage } from '../actions';
import { withRouter } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Image, AppState } from '../types';



const Search = memo((props:any) => {
    function doShit() {
      console.log(props);
      props.searchImages('yes');
    }

    function renderResults() {
      console.log('rendering');
      return props.images.map((image:Image) => 
          <img className="dog" onClick={ () => props.saveImage(image) } src={image.urls.regular} key={image.id}/>
        )
    }
    return (
      <React.Fragment>
        <div onClick={()=> doShit()}>
          Search
        </div>
        <InfiniteScroll
          dataLength={props.images.length} //This is important field to render the next data
          next={() => doShit()}
          hasMore={true}
          loader={<h4>Loading...</h4>}>
            { renderResults() }
      </InfiniteScroll>
        
      </React.Fragment>
    );
});

const mapStateToProps = (state:AppState) => ({
  images: state.searchQuery.results || []
});

const mapDispatchToProps = (dispatch:any) => ({
  searchImages: (query:string) => dispatch(fetchImages(query)),
  saveImage: (image:Image) => dispatch(saveImage(image))
}); 

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search));

