/* eslint-disable no-unused-vars */
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store)=> store.user);
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate('/');
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <div className="absolute px-8 py-2 z-10 bg-gradient-to-b from-black w-screen flex justify-between">
      <img
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix logo"
        className="w-44"
      />
      {user && <div className="flex">
        <img src={user?.photoURL} alt="user icon" className="w-12 h-12 m-4" />
        <button onClick={handleSignOut} className="font-bold text-white cursor-pointer">(Sign Out)</button>
      </div>}
    </div>
  );
};

export default Header;
