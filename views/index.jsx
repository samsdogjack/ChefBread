const React = require("react");
const baker_seed = require("../models/baker_seed");
const Default = require("./layouts/default");

function Index({ breads,bakers, title }) {
  return (
    <Default title={title}>
      <h2>Chef's Bread</h2>
      <h2>Index Page</h2>
      <h3>Bakers</h3>
      <ul>
        {bakers.map((baker) => {
          return (
            <li key={baker._id}>
              <a href={`/bakers/${baker._id}`}>{baker.name}</a>
            </li>
          );
        })}
      </ul>
      <h3>Breads</h3>[ ... ]
    </Default>
  );
}

//       <div className="newButton">
//         <a href="/breads/new">
//           <button>Add a new bread</button>
//         </a>
//       </div>
//       <div className="backButton">
//         <a href="/breads">
//           <button>Go back to the index</button>
//         </a>
//       </div>
//       {/*This is a JSX comment */}
//       {/* <p>I have {breads[0].name} bread!</p>*/}
//       <ul>
//         {breads.map((bread, id) => {
//           return (
//             <li key={id}>
//               <a href={`/breads/${bread.id}`}>{bread.name}</a>
//             </li>
//           );
//         })}
//       </ul>
//     </Default>
//   );
// }

module.exports = Index;
