import React from 'react';

import './CardMovieDetail.css'

import Constants from '../../../Statics/Constants'


const CardMovieDetail = (props) => {

    function concatGenresMap() {
        return props.genres && props.genres.map((gen, i) => {
            return (
                <span key={i}>{i === props.genres.length - 1 ? gen.name : gen.name + ", "}</span>)
        })
    }

    function productionCompaniesMap() {
        return props.production_companies && props.production_companies.map((comp, i) => {
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
                    <img className="image-poster" src={Constants.imgRenderUrl + props.poster_path} alt={props.title}></img>

                </div>

                <div className="col-xl-8">
                    <div className="container row-movie-content title-date-vote" >
                        <div className="col-xl-6 col-sm col-md-8 align-left">
                            <h5>{props.title}</h5>
                            <span>{props.release_date}</span>
                        </div>
                        <div className="col-xl-6 col-sm col-md-2 align-rigth">
                            <h5>{props.vote_average}</h5>
                        </div>
                    </div>
                    <div className="container row-movie-content" >
                        <div className="col-xl-12 col-lg-12 col-md-12 ">
                            <span> {props.overview}</span>
                        </div>
                    </div>

                    <div className="container row-movie-content genres" >
                        <div className="col-sm-5 align-left">
                            <span>Genres</span>
                        </div>
                        <div className="col-sm-7 align-rigth">
                            {concatGenresMap()}
                        </div>
                    </div>

                    <div className="container row-movie-content procuction-content" >
                        <div className="col-xl-12 align-left">
                            <span>Production Companies</span>
                            <div className="companies-box">
                                {productionCompaniesMap()}
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default CardMovieDetail;