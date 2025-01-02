import { Header } from "./Header";
import '../index.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from "pages/HomePage";
import { ContactDetails } from "pages/ContactDetails";
export const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 ">
        <Header />
        <main className="p-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact/:id" element={<ContactDetails />} />
          </Routes>
        </main>
      </div>
    </Router>


  );
};
