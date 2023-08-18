import { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const RequirAuth = ({user, children}) => {
   const navigate = useNavigate();
   useEffect(() => {
     if (!user) {
       navigate("/", { replace: true });
       return;
     }
   }, [user, navigate]);
   return children;
 };
 const mapStateToProps = (state) => {
   return {
     user: state.userReducer.user,
   };
 };
export default connect(mapStateToProps)(RequirAuth)
