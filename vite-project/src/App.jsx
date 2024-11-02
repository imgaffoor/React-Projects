function App(){
  const items = [
    {title:'Beef',isVeg:false,id:1},
    {title:'Chicken',isVeg:false,id:2},
    {title:'Tomato',isVeg:true,id:3},
    {title:'Vankaya',isVeg:true,id:4},
    {title:'Bendakaya',isVeg:true,id:5},
    {title:'Motton',isVeg:false,id:6}
  ];
  const vegItems = items.filter((item) => (item.isVeg))
                        .map(item => <li key={item.id}>{item.title}</li>);
  const nonVegItems = items.filter((item) => (!item.isVeg))
                           .map(item => <li key={item.id}>{item.title}</li>);
  return(
    <>
    <h1>ItemsCart</h1>
    <p>Veg Items are: </p>
    {vegItems.length>0 ? <ul style={{color:'green'}}>{vegItems}</ul> : <ul>Veg Items no longer available</ul>}
    <p>Non Veg Items are: </p>
    {nonVegItems.length>0 ? <ol style={{color:'red'}}>{nonVegItems}</ol> : <ol>Non-Veg Items No longer available</ol>}
    
    </>
  )
}
export default App;