import React from "react";

import RowExhibitionSide from '../components/row/exhibitionSide'
import Quot from '../components/row/quotation'
import ReasonSide from "../components/row/reasonSide";
import BusinessSide from "../components/row/businessSide";
import GetStartedSide from "../components/row/getStarted";

export default {
    title: 'rows'
};


export const ExhibitionSide = () => <RowExhibitionSide>Exhibit Side</RowExhibitionSide>

export const Quotation = () => <Quot>Exhibit Side</Quot>

export const Reason = () => <ReasonSide>Exhibit Side</ReasonSide>

export const Business = () => <BusinessSide/>

export const GetStarted= () => <GetStartedSide/>