const React = require("react");
const Default = require("./layouts/default");

{/*does this go here - BreadCRUD Second Model (be-9-multiple-mongoose-models-and-relationships)*/}
{/*function New ({bakers}) {
    return (
        [...]

        <label htmlFor="baker">Baker</label>
        <select name="baker" id="baker">
            {bakers.map((baker) => {
                return(
                    <option value={baker._id} key={baker._id}>{baker.name}</option>
                )
            })}
        </select>

        [...]
    )
}}*/

function New() {
  return (
    <Default>
      <h2>Add a new bread</h2>
      {/*<form>*/}
      <form action="/breads" method="POST">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" required />
        <label htmlFor="image">Image</label>
        <input type="text" name="image" id="image" />
        <label htmlFor="hasGluten">Has Gluten?</label>
        <input type="checkbox" name="hasGluten" id="hasGluten" defaultChecked />
       {/*add bakers here*/}
        <label htmlFor="baker">Baker</label>
<select name="baker" id="baker">
  <option value="Rachel">Rachel</option>
  <option value="Monica">Monica</option>
  <option value="Joey">Joey</option>
  <option value="Chandler">Chandler</option>
  <option value="Ross">Ross</option>
  <option value="Phoebe">Phoebe</option>
</select>


        <br />
        <input type="submit" />
      </form>
    </Default>
  );
}*/}

module.exports = New;
