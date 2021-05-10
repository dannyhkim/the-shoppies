import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../../store/actions/index";
import Nomination from "../Nomination/Nomination";
import NominationCounter from "../NominationCounter/NominationCounter";
import TransitionGroup from "react-transition-group/TransitionGroup";
import CSSTransition from "react-transition-group/CSSTransition";
import "./NominationsContainer.css";
import { MDBContainer } from "mdb-react-ui-kit";

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
    <MDBContainer
      style={{
        backgroundColor: "#004C3F",
        paddingBottom: "20px",
        marginBottom: "30px",
      }}
    >
      <NominationCounter length={nominationList.length} />
      <TransitionGroup component="div">
        {nominationList &&
          nominationList.map((nomination) => {
            return (
              <CSSTransition
                key={nomination.imdbID}
                classNames="fade"
                timeout={300}
              >
                <Nomination
                  img={nomination.Poster}
                  title={nomination.Title}
                  year={nomination.Year}
                  genres={nomination.Genre}
                  remove={() => removeHandler(nomination.Title)}
                />
              </CSSTransition>
            );
          })}
      </TransitionGroup>
    </MDBContainer>
  );
};

export default NominationsContainer;
