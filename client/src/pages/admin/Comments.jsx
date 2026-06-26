import React, { useEffect, useState } from 'react'
import './Comments.css'
import { comments_data } from '../../assets/assets'
import CommentTableItem from '../../components/admin/CommentTableItem'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

const Comments = () => {

  const [comments, setComments] = useState([])
  const [filter, setFilter] = useState('Not Approved')

  const {axios} = useAppContext();


  const fetchComments = async ()=>{
    try {
      const { data } = await axios.get('/api/admin/comments');
      data.success ? setComments(data.comments) : toast.error(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  }

  useEffect(()=>{
    fetchComments();
  },[])

  return (
    <div className='comments-container'>
      <div className='comments-button-container'>
        <h1 className='comments-heading'>
          Comments
        </h1>
        <div className='comments-button-div'>          
          <button onClick={()=> setFilter('Approved')} className={`comment-button-default ${filter === 'Approved' ? 'comment-button-active' : 'comment-button-inactive'}`}>Approved</button>
          <button onClick={()=> setFilter('Not Approved')} className={`comment-button-default ${filter === 'Not Approved' ? 'comment-button-active' : 'comment-button-inactive'}`}> Not Approved</button>
        </div>
      </div>
      <div className='comments-content'>
        <table className='comments-table'>
          <thead className='comments-table-head'>
            <tr>
              <th scope='col' className='comments-th'>Blog Title and Comment</th>
              <th scope='col' className='comments-th'>Date</th>
              <th scope='col' className='comments-th'>Action</th>
            </tr>
          </thead>
          <tbody>
            {comments.filter((comment)=>{
              if(filter === "Approved") return comment.isApproved === true;
              comment.isApproved === false;
            }).map((comment, index)=> 
            <CommentTableItem key={comment._id} comment={comment} index={index+1} fetchComments={fetchComments}/>)}
          </tbody>
        </table>

      </div>
    </div>
  )
}

export default Comments
