import React from 'react'
import './CommentTableItem.css'
import { assets } from '../../assets/assets'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'



const CommentTableItem = ({comment, fetchComments }) => {

    const { blog, createdAt, _id} = comment
    const BlogDate = new Date(createdAt)

    const { axios } = useAppContext();

    const approveComment = async () => {
        try {
            const {data} = await axios.post('/api/admin/approve-comment', {id: _id});
            if (data.success) {
                toast.success(data.message);
                fetchComments();
            }
            else{
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const deleteComment = async () => {
        try {
            const confirm = window.confirm('Are you sure you want to delete this comment')
            if(!confirm) return;
            const {data} = await axios.post('/api/admin/delete-comment', {id: _id});
            if (data.success) {
                toast.success(data.message);
                fetchComments();
            }
            else{
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

  return (
    <tr className='comment-table-row'>
        <td className='comment-cell'>
            <b className='comment-bold'>Blog</b> : {blog.title}
            <br />
            <br />
            <b className='comment-bold'>Name</b> : {comment.name}
            <br />
            <b className='comment-bold'>Comment</b> : {comment.content}
        </td>
        <td className='comment-cell'>
            {BlogDate.toLocaleDateString()}
        </td>
        <td className='comment-cell'>
            <div className='comment-status-div'>
                {!comment.isApproved ? 
                <img onClick={approveComment} src={assets.tick_icon} className='comment-status-img'  /> :  <p className='comment-status-text'>Approved</p> }
                <img onClick={deleteComment} src={assets.bin_icon} className='bin-icon' alt="" />
            </div>
        </td>
    </tr>
  )
}

export default CommentTableItem
