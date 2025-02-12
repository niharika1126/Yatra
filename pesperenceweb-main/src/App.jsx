import "./index.css";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import Contact from "./pages/contact";
import Career from "./pages/career";
import About from "./pages/about";
import Individualcareer from "./pages/individualcareer";

function NotFound() {
  return (
    <h1 className="text-center text-red-600 text-3xl mt-10">
      404 - Page Not Found
    </h1>
  );
}
import Grants from "./pages/grants";
import Teams from "./pages/teams";
import SearchResult from "./pages/searchResult";
import Employee from "./pages/employee";
import BookJournal from "./pages/bookJournalPage";
import Associations from "./pages/associations";
import Initiatives from "./pages/initiatives";
import IndividualAssociations from "./pages/individualAssociations";

function App() {
  return (
    <Router>
      <div className="w-screen h-screen scrollbar-hide">
        <Routes>
          {/* Redirect the root (/) to Home */}
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Career />} />
          <Route path="/about" element={<About />} />
          <Route path="/individualcareer" element={<Individualcareer />} />
          {/* Fixed Typo */}
          {/* Contact page route */}
          <Route path="/contact" element={<Contact />} />
          {/* Grants Page Route */}
          <Route path="/grants" element={<Grants />} />
          {/* Common Teams Page Route */}
          <Route path="/teams" element={<Teams />} />
          {/* Search Results Page Route */}
          <Route path="/search" element={<SearchResult />} />
          {/* Employee Page Route */}
          <Route path="/employee" element={<Employee />} />
          {/* Book Journal Page Route */}
          <Route path="/bookjournal" element={<BookJournal />} />
          <Route path="/associations" element={<Associations />} />
          <Route path="/initiatives" element={<Initiatives />} />
          <Route
            path="/associations/:id"
            element={<IndividualAssociations />}
          />
          {/* Handle 404 for undefined routes */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
