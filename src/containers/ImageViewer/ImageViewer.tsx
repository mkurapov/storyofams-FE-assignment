import React,  { useState, useEffect}  from 'react';
import './ImageViewer.css';

import api from '../../api';

const ImageViewer = (props: { id:any } ) => {
    const [ photo, setPhoto] = useState<any>(null); //definitely needs to be typed

    useEffect(() => {
        getPhoto();
    },[])

    // definitely needs to be in the action layer
    function getPhoto() {
        api.get(`/photos/${props.id}`)
            .then(res => {
               setPhoto(res.data);
            });
    }

    function renderDetails() {
        const details = [ 
            { label:'Downloads', value:photo.downloads},
            { label: 'Country', value: photo.location.country }, 
            { label:'User', value: photo.user.name }, 
            { label:'Likes', value:photo.likes}
        ];
        return details.map((d:any,i) => 
            <span className="text-left col-6 col-lg-3 image-viewer__detail" key={i}>
                <h3 className="mb-2 font-weight-regular">{ d.label }</h3>
                <h2 className="mt-0"> { d.value ? d.value : 'N/A' }</h2>
            </span>
        );
    }

    return ( 
    <React.Fragment>
        { 
            (<div className="image-viewer-wrapper">
                { photo ? 
                    <div className="image-viewer">
                        <img className="image-viewer__photo" src={photo? photo.urls.regular : ''}/>
                        <div className="image-viewer__details row no-gutters">
                            { renderDetails() }
                        </div>
                    </div>
                    :
                    null
                }
            </div>)
        }
        </React.Fragment>
    );
};

export default ImageViewer;

