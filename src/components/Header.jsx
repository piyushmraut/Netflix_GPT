/* eslint-disable no-unused-vars */
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearch } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const gptSearch = useSelector((store)=> store.gpt.gptSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  /*
   *  What is the purpose of useEffect
   *  There was a small bug over there like I am able to access the browse page without login
   *  Hence to avoid that I need to use the useEffect hook.
   */
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        // console.log(user);
        const { uid, displayName, email, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            displayName: displayName,
            email: email,
            photoURL: photoURL,
          })
        );

        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // unsubscibe when the component unmounts.
    return () => unsubscribe();
  }, []);

  const handleGPTSearch = () => {
    dispatch(toggleGptSearch());
  };

  const handleLanguageChange = (e)=>{
    // console.log(e.target.value);
    // Now you need to dispatch an action

    dispatch(changeLanguage(e.target.value));
  }
  return (
    <div className="absolute top-0 left-0 right-0 px-8 py-2 z-10 bg-gradient-to-b from-black w-screen flex justify-between">
      <img src={LOGO_URL} alt="Netflix logo" className="w-44" />
      {user && (
        <div className="flex">
         {gptSearch &&  <select className="bg-black/70 border border-2 border-amber-500 text-amber-50 p-2 mt-[18px] mr-2 h-12" onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option value={lang.identifier} key={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>}
          <button
            className="bg-violet-600 rounded-l-2xl cursor-pointer w-28 h-12 text-white mt-4 px-4 py-2 border border-2 border-amber-500"
            onClick={handleGPTSearch}
          >
            {gptSearch ? "Home": "GPT Search"}
          </button>
          <img src={user?.photoURL} alt="user icon" className="w-12 h-12 m-4" />
          <button
            onClick={handleSignOut}
            className="font-bold text-white cursor-pointer"
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;