var React = require('react');
var ReactDOM = require('react-dom');
var Link = require('react-router-dom').Link;


class Vege extends React.Component {
  render() {
    var veges = this.props.list.filter(function(item){
      return item.vege == true;
    });
    var nonVeges = this.props.list.filter(function(item){
      return item.vege !== true;
    });

    return (
      <div>
        <h1>Vegetables</h1>
        <ul>
         {veges.map(function(item){
            return <li key={item.name}> {item.name} </li>;
          })}
        </ul>

        <hr />

        <h1> Non Vegetables </h1>
        <ul>
        {nonVeges.map(function(item){
           return <li key={item.name}> {item.name} </li>;
         })}
        </ul>
      </div>
    )
  }
}
ReactDOM.render(
  <Vege list={[
    { name: 'Bean', vege: true },
    { name: 'Broccoli', vege: true },
    { name: 'Apple', vege: false },
    { name: 'Banana', vege: false },
    { name: 'Cauliflower', vege: true },
    { name: 'Peach', vege: false } ]}
  />,
  document.getElementById('vege')
);
