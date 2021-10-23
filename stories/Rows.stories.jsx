import React from "react";

import RowExhibitionSide from '../components/row/exhibitionSide'
import Quot from '../components/row/quotation'
import ReasonSide from "../components/row/reasonSide";

export default {
    title: 'rows'
};


export const ExhibitionSide = () => <RowExhibitionSide>Exhibit Side</RowExhibitionSide>

export const Quotation = () => <Quot>Exhibit Side</Quot>

export const Reason = () => <ReasonSide>Exhibit Side</ReasonSide>