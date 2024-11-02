function Spread() {
    const items = [
        { id: 1, name: 'Sugar', price: 100.00, isVeg: null },
        { id: 2, name: 'Salt', price: 10.00, isVeg: null },
        { id: 3, name: 'Soda', price: 5.00, isVeg: null },
        { id: 4, name: 'Vankaya', price: 40.5, isVeg: true },
        { id: 7, name: 'Bendakaya', price: 56.00, isVeg: true },
        { id: 8, name: 'Sorakaya', price: 19.00, isVeg: true },
        { id: 5, name: 'Beef', price: 250.25, isVeg: false },
        { id: 6, name: 'Chicken', price: 195.23, isVeg: false },
        { id: 9, name: 'Fish', price: 150.00, isVeg: false }
    ];

    const withQuantity = items.map(item => ({
        ...item,
        quantity: 1
    }));

    const groceries = withQuantity.filter(item => item.isVeg === null)
        .map(item => (
            <li key={item.id}>
                ID: {item.id}, Name: {item.name}, Price: {item.price}, Quantity: {item.quantity}
            </li>
        ));

    const vegItems = withQuantity.filter(item => item.isVeg === true)
        .map(item => (
            <li key={item.id}>
                ID: {item.id}, Name: {item.name}, Price: {item.price}, Quantity: {item.quantity}
            </li>
        ));

    const nonVegItems = withQuantity.filter(item => item.isVeg === false)
        .map(item => (
            <li key={item.id}>
                ID: {item.id}, Name: {item.name}, Price: {item.price}, Quantity: {item.quantity}
            </li>
        ));

    return (
        <>
            <h1>Products</h1>
            <h2 style={{color:'azure'}}>Groceries</h2>
            <ul style={{color:'powderblue'}}>{groceries}</ul>
            <h2 style={{color:'azure'}}>Vegetarian Items</h2>
            <ul style={{color:'green'}}>{vegItems}</ul>
            <h2 style={{color:'azure'}}>Non-Vegetarian Items</h2>
            <ul style={{color:'red'}}>{nonVegItems}</ul>
        </>
    );
}

export default Spread;