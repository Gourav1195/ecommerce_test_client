import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } =
    useAuth0();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect()}>Log In</button>
      )}
      {isAuthenticated && (
        <>
          <h2>Welcome, {user.name}</h2>
          <button onClick={() => logout({ returnTo: window.location.origin })}>
            Log Out
          </button>
        </>
      )}
    </div>
  );
};

export default Profile;
