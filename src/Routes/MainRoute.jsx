import { Routes, Route } from 'react-router-dom';
import '../App.css';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Index from '../components/pages/home/Index';
import Blogs from '../components/pages/blog/Index';
import SingleBlog from '../components/pages/blog/Singleblog';
import Services from '../components/pages/services/Index';
import Notfound from "../components/Notfound";
import SingleService from "../components/pages/services/SingleService";
import Search from "../components/pages/Search";
import AboutUs from "../components/pages/about/Index";      
import Checkout from "../components/pages/checkout/Index";      
import Sample from "../components/pages/sample/Index";
import SampleCateList from "../components/pages/sample/SampleList/SampleCateList";
import SingleSample from "../components/pages/sample/SingleSample";
import TermsCondition from "../components/pages/termcondition/Index";
import Review from "../components/pages/review/Index";
import Pricing from "../components/pages/pricing/Index";
import Login from "../components/auth/Login";
import Signup from "../components/auth/Signup";
import Forgot from "../components/auth/Forgot";
import Condition from "../components/pages/condition/Index";
import ReviewType from '../components/pages/review/ReviewType';
import Experts from '../components/pages/expert/Index';
import ExpertDetails from '../components/pages/expert/ExpertDetails';
import OrderNow from '../components/pages/Order/Index';
import CheckOut from '../components/pages/checkout/Index';
function MainRoute() {
return (
  <>
      <div className="hero_area">
          <Header/>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/checkout" element={<Checkout />} />
                {/* Blogs Routes */}
                <Route path="/blogs" element={<Blogs />} />
                {/* <Route path="/blogs/:page" element={<Blogs />} /> */}
                <Route path="/blog/:slug" element={<SingleBlog />} />
                {/* <Route path="/blog" element={<Blogs />} /> */}
                <Route path="/terms-conditions" element={<Condition />} />

                {/* Services Routes */}
                <Route path="/service" element={ <Services /> } />
                {/* <Route path="/service" element={ <Services /> } /> */}
                <Route path="/service/:slug" element={ <SingleService /> } />
                <Route path="/search" element={ <Search /> } />
                
                {/* Sample Routes */}
                <Route path="/sample" element={ <Sample /> } />
                <Route path="/sample-categories/:slug" element={ <Sample /> } />
                <Route path="/sample-categories" element={ <Sample /> } />
                <Route path="/sample-case" element={ <SampleCateList /> } />
                <Route path="/sample-viewer/:slug" element={ <SingleSample /> } />
                <Route path="/sample/:slug" element={ <SampleCateList /> } />

                {/* Experts Routes */}
                <Route path="/experts" element={ <Experts /> } />
                <Route path="/experts/:slug" element={ <ExpertDetails /> } />

                {/* Routes */}
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/terms-conditions" element={<TermsCondition />} />
                <Route path="/reviews" element={<Review />} />
                <Route path="/pricing" element={<Pricing />} />

                {/* Auth Routes */}
                <Route path="/login" element={<Login />} />
                <Route path="/sign-up" element={<Signup />} />
                <Route path="/forgot-password" element={<Forgot />} />
                
                  {/* #Order Form Routes */}
                <Route path="/order" element={<OrderNow />}/>
                {/* Page Not Found Route */}
                <Route path="/write-review" element={<ReviewType />} />
                <Route path="/checkout" element={<CheckOut />} />

                <Route
                  path="*" // This matches any path
                  element={<Notfound />} // Renders the NotFound component when the path is matched
                  status={404} // Sets the HTTP status code to 404
                />
                {/* #payment Router */}
            </Routes>
          <Footer />
      </div>
  </>
  )
}

export default MainRoute