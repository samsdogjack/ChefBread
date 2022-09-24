const React = require('react')
const Default = require('./layouts/Default')


function Index ({breads})  {
    return (
      <Default>
        <h2>Index Page</h2>
        <p>I have {breads[0].name} bread!</p>
      </Default>
    )
}

<Default>
  <h2>Index Page</h2>
  {/* <p>I have {breads[0].name} bread!</p> */}
  {/* This is a JSX comment. */}
  {
  breads.map((bread, index)=> {
    return (
      <li key={index}>
        <a>
          {bread.name}
        </a>
      </li>
    )
  })
}

</Default>



module.exports = Index

