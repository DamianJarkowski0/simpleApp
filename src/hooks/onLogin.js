import { useContext, useState } from 'react';

import {GlobalContext} from "../context"
import axios from 'axios';
import { useHistory } from "react-router-dom";

const config = require("../config").default

export default function useOnLogin() {
  const [data, setData] = useState({});
  const [message, setMessage] = useState()
  const { updateToken } = useContext(GlobalContext);
  const history = useHistory();

  const onChange = (e) => {
      const property = e.target.id
      setData({...data, [property]: e.target.value})
  }

  const onLogin = () => {
    axios.post(`${config.api}/auth`, data)
        .then(response => { 
            updateToken(response.data.data.token)
            history.push('/posts/1')
        })
        .catch(error => {
            setMessage(error.response.data.data.message)
        });
  }

  return {data, message, onChange, onLogin};
}