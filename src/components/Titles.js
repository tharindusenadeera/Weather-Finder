import React from 'react';

class Titles extends React.Component{
    render(){
        return(
          <div>
              <h1 className="title-container__title"> Weather Finder</h1>
              <p className="title-container__subtitle"> Find Out Temperature, Conditions and Many More ...</p>
          </div>
        );
    }
};

export default Titles;