import React from 'react';
// import the higher-order component
import Rainbow from '../HOCs/Rainbow';

const About = () => {
  return (
    <div className="container">
      <h4 className="center">About</h4>
      <p>I love cheese, especially blue castello queso. Cottage cheese squirty cheese roquefort cheeseburger say cheese bavarian bergkase monterey jack taleggio. Who moved my cheese edam hard cheese who moved my cheese camembert de normandie mascarpone mozzarella smelly cheese. Cheesy grin mascarpone blue castello chalk and cheese stilton bocconcini squirty cheese say cheese. Cheese triangles when the cheese comes out everybody's happy caerphilly cheese and wine cauliflower cheese bavarian bergkase fromage cream cheese. Parmesan jarlsberg airedale cheesecake croque monsieur.</p>
    </div>

  );
}

export default Rainbow(About);
