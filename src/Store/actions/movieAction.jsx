export { removemovie } from "../reducers/movieslice";
import { combineSlices } from "@reduxjs/toolkit";
import axios from "../../utils/axios";
import { loadmovie } from "../reducers/movieslice";
import React from 'react';

export const asyncloadmovie = (id) => async (dispatch, getState) => {
    try {
        const detail = await axios.get(`/movie/${id}`);
        const externalid = await axios.get(`/movie/${id}/external_ids`);
        const recommendations = await axios.get(`/movie/${id}/recommendations`);
        const similar = await axios.get(`/movie/${id}/similar`);
        const videos = await axios.get(`/movie/${id}/videos`);
        const translations = await axios.get(`/movie/${id}/translations`);
        const watchproviders = await axios.get(`/movie/${id}/watch/providers`);

        let theultimatedetails = {
            detail: detail.data,
            externalid: externalid.data,
            recommendations: recommendations.data.results,
            similar: similar.data.results,
            translations: translations.data.translations.map((t) => t.english_name),
            videos: videos.data.results.find((m) => m.type === "Trailer"),
            watchproviders: watchproviders.data.results.IN,
        };
      dispatch(loadmovie(theultimatedetails))
        console.log(theultimatedetails);    
    } catch (e) {
        console.log("Error: ", e);
    }
};
