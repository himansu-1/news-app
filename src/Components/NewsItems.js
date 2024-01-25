import React from 'react';
import NoImage from './NoImage.jpg'


const NewsItems =(props)=>{
        // let { title, description, props.imageUrl, url, time, author, brand } = this.props;
        return (
            <>
                <div className="card my-1 w-100" >
                    {/* <div className="card my-2 " style={{width: "22rem"}}> */}

                    <img src={props.imageUrl ? props.imageUrl : NoImage} className="card-img-top  rounded" alt="..." />
                    <div className="card-body ">
                            {/* <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger z-2" style={{left:"85%"}}>{brand}</span> */}
                        {/* <span className="badge bg-danger">{brand}</span> */}
                        <h5 className="card-title">{props.title}</h5>
                        <span class="badge rounded-pill bg-success" style={{left:"85%"}}>{props.brand}</span>
                        <p className="card-text p-0 b-0 m-0">{props.description}</p>
                        <hr className='m-2' />
                        <div className="text-center d-flex justify-content-between">
                            <div className=''>
                                <div class=" text-muted text-start">{new Date(props.time).toGMTString()}</div>
                                <div class=" justify-content-start text-muted text-start">Author: {props.author ? props.author : "Unknown Author"}</div>

                            </div>
                            <div className='d-flex  flex-row-reverse'>
                                <a href={props.url} target="_blank" rel="noreferrer" className="btn btn-primary btn-lg text-left  justify-content-end position-absolute">Go</a>

                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    
}


export default NewsItems;