import React from 'react'

export default class Animals extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return <div>
      {this.props.animals.map(animal =>{
        return (
          <div key={animal.name}>
              <h5 key={animal.name} >{animal.name}</h5>
              <img key={animal.name} src={animal.image} alt={animal.name} width='300px'></img>
              <br key={animal.name} ></br>
              <span key={animal.name} >{animal.specie}</span>
              <hr></hr>
          </div>
          )
        
      }
          
      )}
    </div>
  }
}
