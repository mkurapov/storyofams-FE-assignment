import React,  {memo, useEffect}  from 'react';
import { connect } from 'react-redux'
import { fetchImages, saveImage } from '../actions';
import { withRouter } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import { IAppState, IImage, ISearchQuery } from '../types';
import Image from '../components/Image';


const Search = memo((props:any) => {
    useEffect(() => {
      // console.log(props.searchQuery);
    }, [])

    function doShit() {
      props.searchImages({
        ...props.searchQuery,
        page: props.searchQuery.page + 1,
        searchTerm: 'mountains'
      });
    }

    function renderResults() {
      console.log('rendering');
      return props.searchQuery.results.map((image:IImage) => 
          <Image image={image} ></Image>
        )
    }
    return (
      <React.Fragment>
        <div onClick={()=> doShit()}>
          Search
        </div>
        <InfiniteScroll
          dataLength={props.searchQuery.length} //This is important field to render the next data
          next={() => doShit()}
          hasMore={false}
          loader={<h4>Loading...</h4>}>
            { renderResults() }
      </InfiniteScroll>
        
      </React.Fragment>
    );
});

const mapStateToProps = (state:IAppState) => ({
  searchQuery: state.searchQuery || []
});

const mapDispatchToProps = (dispatch:any) => ({
  searchImages: (query:ISearchQuery) => dispatch(fetchImages(query)),
  saveImage: (image:any) => dispatch(saveImage(image))
}); 

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search));

