import React,  {memo, useEffect, useState}  from 'react';
import { connect } from 'react-redux'
import { fetchImages, saveImage } from '../actions';
import { withRouter } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import { IAppState, IImage, ISearchQuery } from '../types';
import Image from '../components/Image';
import useDebounce from '../hooks/debounce';


const Search = memo((props:any) => {
    const [ searchTerm, setSearchTerm ] = useState('');
    const debouncedSearchTerm = useDebounce(searchTerm, 500); 

    useEffect( () => {
      if (debouncedSearchTerm && debouncedSearchTerm.trim()) {
        getMessages(true);
      }
    },
    [debouncedSearchTerm]
  );
  
    function getMessages(isNewSearch = false) {
      props.searchImages({
        ...props.searchQuery,
        page: isNewSearch ? 1 : props.searchQuery.page + 1,
        searchTerm: searchTerm
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
        <input className="chat__form__input" placeholder="Type your message..." type="text" value={ searchTerm } onChange={ev => setSearchTerm(ev.target.value)} />
        <InfiniteScroll
          dataLength={props.searchQuery.length} //This is important field to render the next data
          next={() => getMessages(false)}
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

