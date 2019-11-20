import React,  { useState}  from 'react';
import {  IImage   } from '../../types';
import './Image.css';

const Image = (props: { image: IImage, isSaved:boolean, toggleSavedImage: any }) => {
    const [ isSaved, setIsSaved ] = useState(props.isSaved);

    function onSaveClick() {
        setIsSaved(!isSaved)
        props.toggleSavedImage(props.image);
    }

    return ( 
    <React.Fragment>
        { 
            (<div className={ `image-wrap` }>
                <img className="image" src={props.image.urls.regular} key={props.image.id}/>
                <span className="image__save-btn" onClick={() => onSaveClick()}>
                    <svg className={ `image__save-btn__heart ${isSaved ? 'image__save-btn__heart--saved' : ''}` } viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.9585 7.13744L13.9583 7.13761L8.27673 12.883C8.1225 13.039 7.87712 13.039 7.7229 12.883L2.0413 7.13761C0.652901 5.73361 0.652901 3.45271 2.0413 2.04872C3.42356 0.65093 5.65998 0.65093 7.04224 2.04872L7.28877 2.29802L7.99981 3.01705L8.71086 2.29802L8.95727 2.04884L8.95744 2.04867C9.62241 1.37591 10.5221 1 11.4579 1C12.3936 1 13.2932 1.37588 13.9582 2.04858L13.9585 2.04886C14.6241 2.72167 15 3.63671 15 4.59316C15 5.54968 14.624 6.46476 13.9585 7.13744Z"/></svg>
                </span>
            </div>)
        }
        </React.Fragment>
    );
};

export default Image;

