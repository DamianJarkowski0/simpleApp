import { useContext, useEffect, useState } from 'react';

import {GlobalContext} from "../context"
import axios from 'axios';

const config = require("../config").default

export default function useOnRead(id) {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(true);
    const { token} = useContext(GlobalContext);

    useEffect(() => {
        
        return () => {
            let data = {
                params: {
                    time: seconds
                },
                headers: {
                    'X-Token': token,
                    "content-type": "application/json"
                }
            };
            axios.put(`${config.api}/time/${id}`, data)
                .then(response => {
                })
                .catch(error => {
                    console.log(error.response)
                });
        };
      }, []);

    useEffect(() => {
      let interval = null;
      if (isActive) {
        interval = setInterval(() => {
          setSeconds(seconds => seconds + 1);
        }, 1000);
      } else if (!isActive && seconds !== 0) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }, [isActive, seconds]);

  return {seconds};
}