import { useContext, useEffect, useState } from 'react';

import {GlobalContext} from "../context"
import axios from 'axios';

const config = require("../config").default

export default function useOnPost() {
    const [posts, setData] = useState([]);
    const [pagination, setPagination] = useState({});
    const { token } = useContext(GlobalContext);

    const refreshList = (page, orderBy, order) => {
        let data = {
            params: {
                page: page,
                order: order || "ASC",
                orderBy: orderBy || "TITLE"
            },
            headers: {
                'X-Token': token,
                "content-type": "application/json"
            }
        };
        axios.get(`${config.api}/posts`, data)
            .then(response => { 
                setData(response.data.data)
                setPagination(response.data.pagination)
            })
            .catch(error => {
            });
    }

  useEffect(() => refreshList(1), [])

  return {posts, pagination, refreshList};
}