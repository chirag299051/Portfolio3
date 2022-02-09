import React, { useState, useEffect } from "react";
import ReactGA from "react-ga";

export const Context = React.createContext();

export const useFetch = (url, uid, isRepo) => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  useEffect(async () => {
    setError(null);
    try {
      if (uid === "") uid = "chirag299051";
      const response = await fetch(
        isRepo ? url + uid + "/repos?per_page=50" : url + uid
      );
      console.log("Response :", response);
      if (response.status >= 400 && response.status < 600) {
        setError("Github profile Not Found!");
      }
      const json = await response.json();
      setResult(json);
      console.log(json);
    } catch (err) {
      console.error("Error: ", err);
    }
  }, [url, uid]);
  return { result, error };
};

export const AppProvider = ({ children }) => {
  // const [initialLoad, setInitialLoad] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [uid, setUid] = useState();
  // const [repos, setRepos] = useState([]);

  const search = async (e, uid) => {
    e.preventDefault();
    setLoading(true);
    console.log("UID: ", uid);
    if (uid === "") setUid("chirag299051");
    setUid(uid);
    // const data = useFetch(userUrl, uid);
    // console.log(data);
    // const response = await fetch(userUrl + uid);
    // const result = await response.json();
    setShowModal(true);
    setLoading(false);
  };
  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <Context.Provider
      value={{
        uid,
        showModal,
        loading,
        setLoading,
        search,
        setShowModal,
        handleClose,
        // initialLoadProp: initialLoad,
        // setInitialLoadProp: () => setInitialLoad(true),
      }}
    >
      {children}
    </Context.Provider>
  );
};
