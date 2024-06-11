import React from 'react';

// Import candidate photos
import Photo1 from '../assets/candidate_photos/rahul_kumar.png';
import Photo2 from '../assets/candidate_photos/amit_shah.png';
import Photo3 from '../assets/candidate_photos/mamata_banerjee.png';
import Photo4 from '../assets/candidate_photos/arvind_kejriwal.png';
import Photo5 from '../assets/candidate_photos/akhilesh_yadav.png';
import Photo6 from '../assets/candidate_photos/biman_bose.png';
import Photo7 from '../assets/candidate_photos/shankersinh_vaghela.png';

// Define functional components for each candidate's photo based on their IDs
const Candidate1 = () => <img src={Photo1} alt="Rahul Kumar" />;
const Candidate2 = () => <img src={Photo2} alt="Amit Shah" />;
const Candidate3 = () => <img src={Photo3} alt="Mamata Banerjee" />;
const Candidate4 = () => <img src={Photo4} alt="Arvind Kejriwal" />;
const Candidate5 = () => <img src={Photo5} alt="Akhilesh Yadav" />;
const Candidate6 = () => <img src={Photo6} alt="Shankersinh Vaghela" />;
const Candidate7 = () => <img src={Photo7} alt="Naveen Patnaik" />;

// Export all components
export {
  Candidate1,
  Candidate2,
  Candidate3,
  Candidate4,
  Candidate5,
  Candidate6,
  Candidate7
};
