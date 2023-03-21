import React, { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../../store/authContext";

export default function AdminButton() {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    if (authCtx.userId === 56) {
      setCurrentUser(authCtx.userId);
    }
  }, [authCtx.userId]);

  return (
    <>
      {isLoggedIn && currentUser && (
        <NavLink to="/Admin" className="">
          <div className="fixed z-20 top-[130px] right-[20px] pl-4 flex">
            <button
              type="button"
              className="rounded-lg font-cabin py-1 px-2 bg-myred lg:text-xl lg:w-40 lg:h-16 transform duration-500 hover:scale-125 text-mywhite"
            >
              Admin Board
            </button>
          </div>
        </NavLink>
      )}
    </>
  );
}
