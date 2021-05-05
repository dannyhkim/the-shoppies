import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../../store/actions/index";
import Nomination from '../Nomination/Nomination';

const NominationsContainer = () => {
  const nominationList = useSelector(
    (state) => state.nominations.nominationList
  );

  const dispatch = useDispatch();

  const removeHandler = (title) => {
    dispatch(actions.removeNomination(title));
  }

  // dispatch action when 5 nominations selected
  useEffect(() => {
    if (nominationList.length === 5) {
      dispatch(actions.completedNominations());
    }
  });

  // Save nomination list to local storage
  useEffect(() => {
    localStorage.setItem("nominationList", JSON.stringify(nominationList));
  }, [nominationList]);

  // Get nomination list from local storage
  useEffect(() => {
    const data = localStorage.getItem("nominationList");

    if (data) {
      dispatch(actions.saveNominations(JSON.parse(data)));
    }
  }, [dispatch]);


  return (
    <div>
      {nominationList && nominationList.map(nomination => {
        return <Nomination
          img={nomination.Poster}
          title={nomination.Title}
          genres={nomination.Genre}
          remove={() => removeHandler(nomination.Title)}
        />
      })}
    </div>
  )
};

export default NominationsContainer;
