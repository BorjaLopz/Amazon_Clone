import React, { useState, useEffect } from "react";
import "./styles.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth, db } from "../firebase";
import { getDocs, collection } from "firebase/firestore";

async function fetchDataFromfirestore() {
  const query = await getDocs(collection(db, "items"));

  const data = [];

  query.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  return data;
}

// import "firebase/firestore";
// import { useFirebaseApp, useFirestoreCollection } from "reactfire";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [itemsList, setItemsList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchDataFromfirestore();
      setItemsList(data);
      console.log("itemsList");
      console.log(itemsList);
    }
    fetchData();
  }, []);

  // console.log("itemsList");
  // console.log(itemsList);

  // const firebaseApp = useFirebaseApp();
  // const prueba = firebaseApp.firestore().collection("items");

  // const items = useFirestoreCollection(prueba).docs.map((d) => ({
  //   id: d.id,
  //   image: d.image,
  //   price: d.price,
  //   rating: d.rating,
  //   title: d.title,
  // }));

  // console.log("items");
  // console.log(items);

  const handleAuthentication = () => {
    if (user) {
      auth.signOut(auth);
    }
  };

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      // console.log("THE USER IS >>> ", authUser?.email);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [user]);

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header_option">
            <span className="header_optionLineOne">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header_optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        {/* <div className="header_option">
          <span className="header_optionLineOne">Hello Guest</span>
          <span className="header_optionLineTwo">Sign in</span>
        </div> */}

        <div className="header_option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">& Orders</span>
        </div>

        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>
      </div>
      <Link to="/checkout">
        <div className="header_optionBasket">
          <ShoppingCartOutlinedIcon />
          <span className="header_optionLineTwo">{basket?.length}</span>
        </div>
      </Link>
    </div>
  );
}

export default Header;
