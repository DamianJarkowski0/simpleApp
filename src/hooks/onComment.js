import { useContext, useState } from 'react';

import {GlobalContext} from "../context"

export default function useOnComment(postId, close) {
  const [data, setData] = useState({postId: postId});
  const { addComment } = useContext(GlobalContext);
  const [message, setMessage] = useState()
  
  const onChange = (e) => {
      const property = e.target.id
      if(e.target.type==="checkbox") setData({...data, [property]: !data[property]})
      else setData({...data, [property]: e.target.value})
  }

  const onSave = () => {
    if(data.accept) {
        addComment(data)
        close()
    } else {
        setMessage("Należy zaakceptować regulamin")
    }
  }

  return {data, message, onChange, onSave};
}