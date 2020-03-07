import React, { useState, useEffect } from 'react';

import './CardMovieDetail.css'

import Constants from '../../../Statics/Constants'


const CardMovieDetail = (props) => {
    const [genres, setGenres] = useState([])
    const [companies, setCompanies] = useState([])

    useEffect(() => {
        setGenres(props.genres)
        setCompanies(props.production_companies)
        console.log(props)
    }, [])


    function concatGenresMap() {
        return genres.map((gen, i) => {
            return (
                <span>{i === genres.length - 1 ? gen.name : gen.name + ", "}</span>)
        })
    }

    function productionCompaniesMap() {
        return companies.map(comp => {
            return (
                <div className="company-content">
                    <img src={Constants.imgRenderUrl + comp.logo_path}></img>
                    <span>{comp.name}</span>
                </div>
            )
        })
    }

    return (
        <div className="card text-center movie-content">

            <div className="card-body">
                <div className="movie-poster">
                    <img src={Constants.imgRenderUrl + props.poster_path} alt={props.title}></img>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-sm col-md-8 card-title-detail">
                            <h5>{props.title}</h5>
                            <span>{props.release_date}</span>
                        </div>
                        <div className="col-lg-6 col-sm col-md-2 movie-vote-average">
                            <h5>{props.vote_average}</h5>
                        </div>
                    </div>

                    <div className="row ">
                        <div className="col-lg-12 col-sm col-md-8 movie-overview">
                            <span>{props.overview}</span>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 col-sm col-md-8 movie-geners-label">
                            <span>Genres:</span>


                        </div>
                        <div className="col-lg-6 col-sm col-md-2 movie-geners-type">
                            {concatGenresMap()}
                        </div>
                    </div>

                    <div className="row ">
                        <div className="col-lg-12 col-sm col-md-8 companies-label">
                            <span>Production Companies</span>
                        </div>
                    </div>

                    <div className="row ">
                        <div className="col-lg-12 col-sm col-md-8 companies-box">
                           {productionCompaniesMap()}
                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default CardMovieDetail;