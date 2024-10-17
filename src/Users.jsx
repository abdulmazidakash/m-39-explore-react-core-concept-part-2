import { useEffect, useState } from "react"

export default function Users(){

	const [users, setUsers] = useState([]);
	// const abc = ()=>{}
	useEffect(()=> {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(json => setUsers(json))
	}, [])
	return (
		<div>
			<h3>Users: {users.length}</h3>
		</div>
	)
}


// 1. declare a state to hold the data
// 2. useEffect with call back and dependency array
// 3. 
