// import './App.css';
import React, { useEffect } from 'react';
import {HashRouter as Router,Redirect,Route,Switch,Link,} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
//=====================^< TOOLS >^===================================
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import TrainerRoute from '../TrainerRoute/TrainerRoute';
import AdminRoute from '../AdminRoute/AdminRoute';
//=====================^< ROUTES >^===================================
import LandingPage from '../LandingPage/LandingPage'; // (1.1)
import LoginPage from '../LoginPage/LoginPage'; // (1.2a)
import RegisterPage from '../RegisterPage/RegisterPage'; // (1.2b)
import Nav from '../Nav/Nav'; // (1.3 a&b) <-- **** SPECIFY BETWEEN AUTH LEVEL ****
import AllClassesPage from '../AllClassesPage/AllClassesPage'; // (1.4 a&c) <-- **** NEED TO SPECIFY BETWEEN AUTH LEVEL ****
import MyClassesPage from '../MyClassesPage/MyClassesPage'; // (1.4b)
import ClassDetailsPage from '../ClassDetailsPage/ClassDetailsPage'; // (1.5)
import EditClassPage from '../EditClassPage/EditClassPage'; // (1.6)
import RegisteredClassPage from '../RegisteredClassPage/RegisteredClassPage'; // (1.7)
import AttendeesPage from '../AttendeesPage/AttendeesPage'; // (1.8)
import UserPage from '../UserPage/UserPage'; // (1.9)
import CreateClassPage from '../CreateClassPage/CreateClassPage'; // (1.10)
  //------------------^< APPROVED ROUTES >^------------------------------------
import Footer from '../Footer/Footer'; // ** ALREADY IN REPO
import AboutPage from '../AboutPage/AboutPage'; // ** ALREADY IN REPO
import InfoPage from '../InfoPage/InfoPage'; // ** ALREADY IN REPO
// ^^=====================^< COMPONENTS/VIEWS >^==========================
//=======================================**< END IMPORTS >**===============================================================



function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  //========================================**< START RETURN >**====================================================
  return (

    <Router>
      <div>
        {/* --------------------------< START DEV BAR >-------------------------- */}  
        {/* <Nav />   (** NEED TO SPECIFY BETWEEN AUTH LEVEL **)  */}
        <nav>
          <h1>DEV BAR</h1>
          <Link to="/home">Home</Link> | 
          <Link to="/about">About</Link> | 
          <Link to="/registration">Registration</Link> | 
          <Link to="/login">Login</Link> | 
          <Link to="/all-classes">All Classes</Link> | 
          <Link to="/my-classes">My Classes</Link> | 
          <Link to="/class-details">Class Details</Link> | 
          <Link to="/class-attendace">Class Attendace</Link> | 
          <Link to="/create-class">Create Class</Link> | 
          <Link to="/personal-info">Personal Info</Link>
        </nav> {/* --------------------------< END DEV BAR >-------------------------- */}
        
        <Switch>

          <Redirect exact from="/" to="/home" /> {/* Visiting localhost:3000 will redirect to localhost:3000/home */}

          {/* =============================*< START ALREADY IN REPO >*============================= */}
          {/* --------------< ABOUT PAGE >---------------- */}
          <Route
            exact
            path="/about">
            <AboutPage />
          </Route>
          {/* --------------------------< INFO PAGE >-------------------------- */}
          <ProtectedRoute
            exact
            path="/info">
            <InfoPage />
          </ProtectedRoute>
          {/* =============================*< END ALREADY IN REPO >*============================= */}


          

          {/* =============================*< START APPROVED ROUTES >*============================= */}

          {/* -----< Login (1.2a)>----- */}
          <Route exact path="/login">
            {user.id ?
              // If the user is already logged in, 
              // redirect to the /classes page
              <Redirect to="/all-classes" />
              :
              // Otherwise, show the login page
              <LoginPage />
            }
          </Route>
          {/* -----< Login (1.2a)>----- */}

          




          {/* -----< Registration (1.2b)>----- */}
          <Route exact path="/registration">
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /classes page
              <Redirect to="/all-classes" />
              :
              // Otherwise, show the registration page
              <RegisterPage />
            }
          </Route>
          {/* -----< Registration (1.2b)>----- */}






          {/* -----< All Classes (1.4a)>----- */}
          <Route
            // shows classes page at all times (logged in or not)
            exact
            path="/all-classes">
            <AllClassesPage />
          </Route>
          {/* -----< All Classes (1.4a)>----- */}





          {/* -----< My Classes (1.4b)>----- */}
          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/my-classes"
          >
            <MyClassesPage />
          </ProtectedRoute>
          {/* -----< My Classes (1.4b)>----- */}




          {/* -----< Class Details (1.5)>----- */}
          <Route
            // shows Class Details page at all times (logged in or not)
            exact
            path="/class-details">
            <ClassDetailsPage />
          </Route>
          {/* -----< Class Details (1.5)>----- */}



          {/* -----< Edit Class Details (1.6)>----- */}
          <AdminRoute
            // Only administrators can see the edit class view
            exact
            path="/edit-class">
            <EditClassPage />
          </AdminRoute>
          {/* -----< Edit Class Details (1.6)>----- */}



          {/* -----< Registered Class (1.7)>----- */}
          <ProtectedRoute
            // If logged in: Shows the class details for a class the guest/member has registered for.
            exact
            path="/registered-class">
            <RegisteredClassPage />
          </ProtectedRoute>
          {/* -----< Registered Class (1.7)>----- */}



          {/* -----< Attendees (1.8)>----- */}
          <TrainerRoute
            // Only trainers and admin can see the class attendees view
            exact
            path="/attendees">
            <AttendeesPage />
          </TrainerRoute>
          {/* -----< Attendees (1.8)>----- */}




          {/* -----< Personal Info (1.9)>----- */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            <UserPage />
          </ProtectedRoute>
          {/* -----< Personal Info (1.9)>----- */}



          {/* ===============< Create Class (1.10)>----- */}
          <AdminRoute
            // Only administrators can see the create a class view
            exact
            path="/create-class">
            <CreateClassPage />
          </AdminRoute>
          {/* ===============< Create Class (1.10)>----- */}
          {/* =============================*< END APPROVED ROUTES >*============================= */}





          <Route
            exact
            path="/home">
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              // --------------------------< LOGGED IN: VIEW MY CLASSES >-------------------------- */}
              <Redirect to="/my-classes" />
              :
              // --------------------------< LOGGED OUT: LANDING PAGE >-------------------------- */}
              <LandingPage />
            }
          </Route>

          {/* --------------------------<If none of the other routes matched, we will show a 404. >--------------------------*/}
          <Route> <h1>404</h1> </Route>

        </Switch> {/*====================================< END SWITCH >==================================== */}
        <Footer /> {/* ---------------------< FOOTER COMPONENT >--------------------- */}
      </div>
    </Router> //====================================< END ROUTER >====================================

  ); //====================================< END RETURN >====================================

} //====================================< END FUNCTION >====================================

export default App;
