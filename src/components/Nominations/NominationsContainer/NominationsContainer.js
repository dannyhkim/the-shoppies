import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../../store/actions/index";
import Nomination from "../Nomination/Nomination";
import NominationCounter from "../NominationCounter/NominationCounter";

const NominationsContainer = () => {
  const nominationList = useSelector(
    (state) => state.nominations.nominationList
  );

  const dispatch = useDispatch();

  const removeHandler = (title) => {
    dispatch(actions.removeNomination(title));
  };

  // dispatch action when 5 nominations selected
  useEffect(() => {
    if (nominationList.length === 5) {
      dispatch(actions.completedNominations());
    }
  }, [nominationList, dispatch]);

  // Get nomination list from local storage
  useEffect(() => {
    const data = localStorage.getItem("nominationList");

    if (data) {
      dispatch(actions.saveNominations(JSON.parse(data)));
    }
  }, [dispatch]);

  // Save nomination list to local storage
  useEffect(() => {
    localStorage.setItem("nominationList", JSON.stringify(nominationList));
  }, [nominationList]);

  return (
    <div>
      <NominationCounter length={nominationList.length} />
      {nominationList &&
        nominationList.map((nomination) => {
          return (
              <Nomination
                img={nomination.Poster}
                title={nomination.Title}
                year={nomination.Year}
                genres={nomination.Genre}
                remove={() => removeHandler(nomination.Title)}
              />
          );
        })}
    </div>
  );
};

export default NominationsContainer;
