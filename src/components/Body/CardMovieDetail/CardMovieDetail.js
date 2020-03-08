import React, { useState, useEffect } from 'react';

import './CardMovieDetail.css'

import Constants from '../../../Statics/Constants'


const CardMovieDetail = (props) => {
    const [genres, setGenres] = useState([])
    const [companies, setCompanies] = useState([])

    useEffect(() => {
        setGenres(props.genres)
        setCompanies(props.production_companies)
        console.log(props.genres)
    }, [])


    function concatGenresMap() {
        return genres.map((gen, i) => {
            return (
                <span key={i}>{i === genres.length - 1 ? gen.name : gen.name + ", "}</span>)
        })
    }

    function productionCompaniesMap() {
        return companies.map((comp, i) => {
            return (
                <div key={i} className="company-content">
                    <img src={Constants.imgRenderUrl + comp.logo_path}></img>
                    <span>{comp.name}</span>
                </div>
            )
        })
    }

    return (
        <div className="conainter card text-center movie-content">
            <div className="row box-total">

                <div className="col-lg-4 col-sm col-md-8">
                    {/* <div className="card-body">
                            <div className="movie-poster"> */}
                    <img className="image-poster" src={Constants.imgRenderUrl + props.poster_path} alt={props.title}></img>
                    {/* </div>
                        </div> */}
                </div>

                <div className="col-xl-8 col-sm col-md-8">
                    <div className="container row-movie-content" >
                        <div className="col-xl-6 col-sm col-md-8 align-left">
                            <h5>{props.title}</h5>
                            <span>{props.release_date}</span>
                        </div>
                        <div className="col-xl-6 col-sm col-md-2 align-rigth">
                            <h5>{props.vote_average}</h5>
                        </div>


                    </div>
                    <div className="container row-movie-content" >
                        <div className="col-xl-6 col-sm col-md-8 ">
                            <h5>{props.title}</h5>
                            <span>{props.release_date}</span>
                        </div>
                        <div className="col-xl-6 col-sm col-md-2">
                            <h5>{props.vote_average}</h5>
                        </div>


                    </div>

                </div>
            </div>
        </div>
    )
}

export default CardMovieDetail;