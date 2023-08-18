
import React, {useEffect, useState } from 'react'
import {Button, Form, NavDropdown, Navbar} from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { connect} from 'react-redux';
import loader from '../../images/loader.svg'
import ReactPlayer from 'react-player';
import {deletePost, getArticleApi} from './../../redux/actions/index';
import like from '../../images/like-icon.svg'
import comment from '../../images/comment-icon.svg'
import share from '../../images/share-icon.svg'
import send from '../../images/send-icon.svg'
import { Timestamp, arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';


const Post = (props) => {

const [count, setCount] = useState(43)
 
const [coments, setComents] = useState([])

const handleCount = async(id) => {
  setCount(count + 1)
     await updateDoc(doc(db,"articles" , id),{
    likes:  count
  })
  }

const handelComment =(id) => {
document.getElementById(id).classList.toggle("btn-comment")
}

const handelSendComment =(id) => {
 updateDoc(doc(db,"articles" , id),{
    comments: arrayUnion(coments),
    timestamp:Timestamp.now()
  })
  setComents('');
}

useEffect(() => {
   props.getArticles()
}, [props])

  return (
<div>
{
      props.articles.length === 0 ? (<img src={loader} alt='loading' style={{display: "block",
        width:"100px", margin:"auto"}}/>) : (
        <div>
          {props.loading && <img src={loader} style={{display: "block",
        width:"100px", margin:"auto"}} alt='loading'/>}
          {props.articles.length >0 && props.articles.map((post, index) => (
        <Card key={index} className='card-ele d-flex flex-column my-3 p-3'>
            <div className='post-info d-flex align-items-center justify-content-between'>
              <div>
              <a href='#amr' className='d-flex align-items-center'>
                <img src={post.actor.image} alt='img' className='main-image '/>
                <div className='mx-2 d-flex flex-column'>
                <p className='fs-5 fw-bold m-0 text-dark' >{post.actor.title}</p>
                <span className='m-0 text-muted'>{post.actor.description}</span>
                <span className='m-0 text-muted'>{post.actor.date.toDate().toLocaleDateString()}</span>
                </div>
            </a>
              </div>
              <button className='border-0 bg-transparent fs-4'>
              <Navbar className='main-ellips'>
              <NavDropdown title={<i class="fa-solid fa-ellipsis"></i>} id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Save post</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">share link</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1" onClick={() => deletePost(post.id)}>Delete</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">more</NavDropdown.Item>
          </NavDropdown>
              </Navbar>
              </button>
            </div>
            <div className='post-descrption m-3'>{post.description}</div>
            <div className='post-image w-100'>
              <a href='#amr'>
                {!post.shareImg && post.video ? (<ReactPlayer width="100%" height="350px" url={post.video}/>) : (
                  post.shareImg && <img src={post.shareImg} alt='' className='w-100'/>
                )}
              </a>
            </div>
            <div className='post-social'>
                  <ul className='d-flex align-items-center gap-2 p-0 my-2'>
                  <li className='text-dark'>
                <button className='border-0 bg-transparent d-flex align-items-center gap-1'>
                <img
                      src="https://static-exp1.licdn.com/sc/h/2uxqgankkcxm505qn812vqyss"
                      alt=""
                    />
                    <img
                      src="https://static-exp1.licdn.com/sc/h/f58e354mjsjpdd67eq51cuh49"
                      alt=""
                    />
                  <span>{count}</span>
                </button>
              </li>
              <li>
                <a href='#amr' className='text-dark'>{ post.comments.length >=1 ? post.comments.length : 0} comments</a>
              </li>
              <li>
                <a href='#amr' className='text-dark'>1 share</a>
              </li>
                  </ul>
            </div>
            <div className='post-actions d-flex align-items-center justify-content-center gap-2 w-100'>
              <button onClick={() => handleCount(post.id)}>
                <img src={like} alt=''/>
                <span>Like</span>
              </button>
              <button onClick={() => handelComment(post.id)}>
                <img src={comment} alt=''/>
                <span>Comment</span>
              </button>
              <button>
                <img src={share} alt=''/>
                <span>Share</span>
              </button>
              <button>
                <img src={send} alt=''/>
                <span>Send</span>
              </button>
            </div>
               {
                  post.comments.length >= 1 ? post.comments.map((com) => ( 
                    <div className='comment p-3'>
                      <a href='#amr' className='d-flex align-items-center'>
                      <img src={post.actor.image} alt='img' className='main-img '/>
                      <div className='mx-2 d-flex flex-column coment-post'>
                      <p className='fs-7 fw-bold m-0 text-dark' >{post.actor.title}</p>
                      <p className='fs-7 m-0 text-dark' >{com}</p>
                      </div>
                      </a>
                      <span className='d-block text-muted w-100' style={{margin:"5px 50px"}}>
                        <span >Like</span><span className='mx-3'> Reply </span>
                         {post.timestamp && post.timestamp.toDate().toLocaleTimeString()} </span>
                    </div>
                  )) : null
               }
            <div className='p-3 comunt' id={post.id}>
            <Form className='d-flex align-items-center mx-3 w-100'>
            <i class="fa-solid fa-image me-2" ></i>
         <input type='text' value={coments} onChange={(e) => setComents(e.target.value)} placeholder='Write a comment...'
          className='modle-input w-100'/>
            <Button variant="primary" onClick={() => handelSendComment(post.id)} disabled={!coments ? true :false}
             style={{display:"flex", backgroundColor:"#cecccc38", border:"2px solid #cecccc38"}}><img src={send}
              style={{rotate: "42deg"}} alt=''/></Button>
        </Form>
            </div>
        </Card>
          ))}
        </div>
      )
    }
</div>
  )
}
const mapStateToProps = (state) => {
  return {
    loading:state.articalReducer.loading,
    user: state.userReducer.user,
    articles:state.articalReducer.articles,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getArticles: ()=> dispatch(getArticleApi()),
    deletePost: (id)=> dispatch(deletePost(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Post)
