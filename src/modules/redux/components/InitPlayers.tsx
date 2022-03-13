import React, { useEffect } from "react";
import { initPlayers } from "modules/redux/store/playersSlice";
import { useAppDispatch } from "../hooks";

const InitPlayers = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (typeof window !== "undefined") {
      dispatch(initPlayers());
    }
  }, [dispatch]);

  return null;
};

export default InitPlayers;
