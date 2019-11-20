import React,  {memo, useEffect, useState}  from 'react';
import { connect } from 'react-redux'
import { fetchImages, toggleSavedImage } from '../../actions';
import { withRouter } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import { IAppState, IImage, ISearchQuery } from '../../types';
import Image from '../../components/Image/Image';
import useDebounce from '../../hooks/debounce';
import './Search.css';

const Search = memo((props:any) => {
    const [ searchTerm, setSearchTerm ] = useState('');
    const debouncedSearchTerm = useDebounce(searchTerm, 500); 

    // this acts as componentDidMount
    useEffect( () => {
      setSearchTerm(props.searchQuery.searchTerm);
    }, []);

    // this uses the debounce hook, rerendering the component if it changes
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
      const isInSavedImages = (image:IImage) => props.savedImages.some((img:IImage) => img.id === image.id) as boolean;
        return props.searchQuery.results.map((image:IImage) => 
          <div key={image.id} className="col-12 col-md-6 col-lg-3 mb-3">
            <Image 
              image={image} 
              isSaved={isInSavedImages(image)}  
              toggleSavedImage={() => props.toggleSavedImage(image)}
            ></Image>
          </div>
          );
    }
    return (
      <React.Fragment>
        <div className="search-bar">
          <input className="search-bar__input" placeholder="Search pictures..." type="text" value={ searchTerm } onChange={ev => setSearchTerm(ev.target.value)} />
        </div>
        <div className="content pt-5 mt-3">
          <h1 className="text-left">{ props.searchQuery.searchTerm ? props.searchQuery.searchTerm : '' }</h1>
            {  props.searchQuery.results.length > 0 ? 
          (
            <InfiniteScroll
              dataLength={props.searchQuery.results.length}
              next={() => getMessages(false)}
              hasMore={true}
              loader={<span></span>}>
                <div className="row">
                { renderResults() }
                </div>
            </InfiniteScroll>)
            :
            <h3> {props.searchQuery.searchTerm ? `Sorry, no results found for: ${props.searchQuery.searchTerm}` : 'Start your search, just a little higher.'}</h3>
            }
        </div>
        
      </React.Fragment>
    );
});

const mapStateToProps = (state:IAppState) => ({
  searchQuery: state.searchQuery || [],
  savedImages: state.savedImages || []
});

const mapDispatchToProps = (dispatch:any) => ({
  searchImages: (query:ISearchQuery) => dispatch(fetchImages(query)),
  toggleSavedImage: (image:IImage) => dispatch(toggleSavedImage(image))
}); 

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search));

