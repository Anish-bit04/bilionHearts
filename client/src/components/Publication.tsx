import React from "react";
import { publishList } from "../constants/index.jsx";


// export const publishList = [
//     {
//       id:1,
//       text: "The effect of chemical representation on active machine learning towards closed-loop optimization",
//       description:
//         "Multivariate chemical reaction optimization involving catalytic systems is a non-trivial task due to the high number of continuous parameters and discrete choices...",
//         image:img1,
//         url:"https://pubs.rsc.org/en/content/articlelanding/2022/re/d2re00008c"
//     },
//     {
//       id:2,
//       text: "Accelerated chemical reaction optimization using multi-task learning",
//       description:
//         "Functionalization of C–H bonds is a key challenge in medicinal chemistry, particularly for fragment-based drug discovery.  We explore the use of multitask ...",
//         image:img2,
//         url:"https://pubs.acs.org/doi/full/10.1021/acscentsci.3c00050"
  
//     },
//     {
//       id:3,
//       text: "ORDerly: Datasets and benchmarks for chemical reaction data",
//       description:
//         "ORDerly is an open-source Python package for customizable and reproducible preparation of reaction data stored in accordance with the ...",
//         image:img3,
//         url:"https://pubs.acs.org/doi/10.1021/acs.jcim.4c00292"
  
//     },
//     {
//       id:4,
//       text: "A Brief Introduction to Chemical Reaction Optimization",
//       description:
//         "Identification of optimal chemical reaction parameters involving continuous (time, temperature, pressure) and categorical variables (catalyst, solvent, reagent) ...",
//         image:img4,
//         url:"https://pubs.acs.org/doi/full/10.1021/acs.chemrev.2c00798"
  
//     },
//     {
//       id:5,
//       text: "Automated ph adjustment driven by robotic workflows and active machine learning",
//       description:
//         "Buffer solutions have tremendous importance in biological systems and in formulated products. Modelling the pH response for multi ...",
//         image:img1,
//         url:"https://www.sciencedirect.com/science/article/pii/S1385894722045788"
  
//     },
//     {
//       id:6,
//       text: "Quantitative In Silico Prediction of the Rate of Protodeboronation by a Mechanistic Density Functional",
//       description:
//         "The Suzuki reaction represents one of the most versatile and relevant reactions towards drug manufacturing. However, understanding ...",
//         image:img2,
//         url:"https://pubs.acs.org/doi/full/10.1021/acs.jpca.2c08250"
  
//     },
//   ];
  
const Projects = () => {


  return (
    <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-medium sm:text-5xl lg:text-6xl text-center mt-20 tracking-wide mb-16">Our{" "}
    <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
    Publications 
        </span>
      
       </h1> 
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {publishList.map((doc) => (
        <div key={doc.id} className=" rounded-lg shadow-md overflow-hidden">
          <img src={doc.image} alt={doc.text} className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{doc.text}</h3>
            <p className="text-gray-500 mb-4">{doc.description}</p>
            <a href={doc.url} target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-4 rounded hover:bg-blue-600">
              Read More
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Projects;
