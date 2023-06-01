import { useContext, useEffect } from "react";
import { ShoppingCartContext } from "../../Context";
import { useNavigate } from "react-router-dom";

function AuthorizationContainer({children}) {
  const { signOutStatus } = useContext(ShoppingCartContext);
  const navigate = useNavigate();

  if(signOutStatus) {
    if (window.location.pathname !== '/sign-in') {
       navigate('/sign-in', { replace: true})
    }
  }
  
  return (
    <>{children}</>
  );
}

export { AuthorizationContainer };
