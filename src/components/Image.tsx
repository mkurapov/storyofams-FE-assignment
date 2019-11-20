import React,  {memo, useEffect}  from 'react';
import { connect } from 'react-redux'
import { fetchImages, saveImage } from '../actions';
import { withRouter } from 'react-router-dom';
import { IAppState, IImage   } from '../types';

interface ImageProps {
    image: IImage
}


const Image:React.FC<ImageProps> = (props) => {
    useEffect(() => {
      console.log(props.image);
    }, [])

    return (
        <img className="dog" onClick={ () => console.log('') } src={props.image.urls.regular} key={props.image.id}/>
    );
};

const mapDispatchToProps = (dispatch:any) => ({
  saveImage: (image:any) => dispatch(saveImage(image))
}); 

export default (connect(
  mapDispatchToProps,
)(Image));

