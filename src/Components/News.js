import React, { useState , useEffect} from 'react';
import NewsItems from './NewsItems';
import PropTypes from 'prop-types'

import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
    // static defaultProps = {
    //     country: 'in',
    //     pageSize: '3',
    //     category: 'sports',
    //     heading: 'Top Head Lines'
    // }

    // static propTypes = {
    //     country: PropTypes.string,
    //     pageSize: PropTypes.string,
    //     category: PropTypes.string,
    //     heading: PropTypes.string,
    // }

    // constructor(props) {
    //     super(props);
    //     state = {
    //         articles: [],
    //         loading: true,
    //         page: 1
    //     };
    // }

    const [articles, setArticles] = useState([])
    const [loading, Setloading] = useState(true)
    const [page, setpage] = useState(1)
    const [totalResults, settotalResults] = useState(0)


    const fetchAPI = async()=>{
        props.setProgress(20)
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=8e920e1cb8ac45e48776ee2d80ef9970&page=1&pageSize=${props.pageSize}`
        Setloading(true)
        props.setProgress(50)
        let data = await fetch(url)
        let parseData = await data.json()
        props.setProgress(90)

        setArticles(parseData.articles)
        settotalResults(parseData.totalResults)
        Setloading(false)
        setpage(page+1)
        props.setProgress(100)
    }

    // useEffect(fetch()
        // props.setProgress(20)
        // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=8e920e1cb8ac45e48776ee2d80ef9970&page=1&pageSize=${props.pageSize}`
        // // setState({ loading: true })
        // Setloading(true)
        // props.setProgress(50)
        // let data = await fetch(url)
        // let parseData = await data.json()
        // props.setProgress(90)

        // setArticles(parseData.articles)
        // settotalResults(parseData.totalResults)
        // Setloading(false)

        // props.setProgress(100)
    // ,[])



    // handleNextClick = async () => {
    //     if (page + 1 > Math.ceil(totalResults / props.pageSize)) { }
    //     else {
    //         let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=8e920e1cb8ac45e48776ee2d80ef9970&page=${page }&pageSize=${props.pageSize}`
    //         setState({ loading: true })
    //         let data = await fetch(url)
    //         let parseData = await data.json()
    //         setState({
    //             page: page + 1,
    //             articles: parseData.articles,
    //             loading: false
    //         })
    //     // }
    // }


    // handlePrevClick = async () => {
    //     if (page <= 1) { }
    //     else {
    //         let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=8e920e1cb8ac45e48776ee2d80ef9970&page=${page - 1}&pageSize=${props.pageSize}`
    //         setState({ loading: true })
    //         let data = await fetch(url)
    //         let parseData = await data.json()
    //         setState({
    //             page: page - 1,
    //             articles: parseData.articles,
    //             loading: false
    //         })
    //     }
    // }

    const fetchMoreData = async () => {
        if (page + 1 > Math.ceil(totalResults / props.pageSize)) { }
        else {
            // fetchAPI()
            props.setProgress(50)

            let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=8e920e1cb8ac45e48776ee2d80ef9970&page=${page}&pageSize=${props.pageSize}`
            Setloading(true)
            // setState({ loading: true })

            let data = await fetch(url)
            let parseData = await data.json()
            props.setProgress(90)

            setpage(page + 1)
            setArticles(articles.concat(parseData.articles))
            Setloading(false)
            settotalResults(parseData.totalResults)

            props.setProgress(100)

        }
    }

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    document.title = `SN-${capitalizeFirstLetter(props.category)}`

useEffect(() => {
    fetchAPI()
    // eslint-disable-next-line no-use-before-define
}, [])
    return (

        <>

            {/* {!loading &&
                        <div class="d-flex justify-content-between my-2">
                            <button disabled={page <= 1} type="button" className="btn btn-info" onClick={handlePrevClick}>&larr; Prev</button>
                            <button disabled={page + 1 > Math.ceil(totalResults / pageSize)} type="button" className="btn btn-info" onClick={handleNextClick}>Next &rarr;</button>
                        </div>} */}

            {loading && <Spinner />}
            {!loading && <h1 className='fw-bolder text-center my-1 mx-0 position-relative border p-2 '>
                {props.heading}
                <h6><span className="position-absolute translate-middle badge rounded-pill bg-danger start-100 top-0 btn-sm" >{totalResults}</span></h6>

            </h1>}

            {/* <div className="row "> */}

            {/* {!loading && articles.map((element) => {
                            return (<>
                                <div className="col-md-4 p-1">
                                    <NewsItems title={element.title} description={element.description} imageUrl={element.urlToImage} url={element.url} time={element.publishedAt} author={element.author} brand={element.source.name}/>
                                </div>
                            </>)
                        })} */}

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length < totalResults+1}
                loader={<Spinner />}
            >

                <div className="container">
                    <div className="row">
                        {

                            articles.map((element) => {
                                return (<>
                                    <div className="col-md-4 p-1">
                                        <NewsItems title={element.title} description={element.description} imageUrl={element.urlToImage} url={element.url} time={element.publishedAt} author={element.author} brand={element.source.name} key={element.url}/>
                                    </div>

                                </>)
                            })
                        }
                    </div>
                </div>
                        {console.log(articles.length)}
                        {console.log(totalResults)}
                {/* {state.items.map((i, index) => (
                                <div style={style} key={index}>
                                    div - #{index}
                                </div>
                            ))} */}
            </InfiniteScroll>


            {/* </div> */}

            {/* <div class="d-flex justify-content-between my-2">
                        <button type="button" className="btn btn-info" onClick={handleNextClick}>&larr; Prev</button>
                        <button type="button" className="btn btn-info" >Next &rarr;</button>
                    </div> */}

        </>
    );

}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.string,
    category: PropTypes.string,
    heading: PropTypes.string,
};

News.defaultProps = {
    country: 'in',
    pageSize: '3',
    category: 'sports',
    heading: 'Top Head Lines'
};


// News.propTypes = propTypes;
// News.defaultProps = defaultProps;
export default News;

// https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=8e920e1cb8ac45e48776ee2d80ef9970&page=1&pageSize=5