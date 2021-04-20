import React from 'react'
import axios from 'axios'
import UserStore from './userstore'
import UserResponse from './UserResponse'
import UserCard from './UserCard';


interface UserProps {

}

const UserList: React.FC<UserProps> = (props) => {
	const [apiResponse, setApiResponse] = React.useState<UserResponse | undefined>();
	const [posts, setposts] = React.useState<post[]>([]);

	React.useEffect(() => {
		const USER_API_ENDPOINT = `https://reqres.in/api/users/`
		axios
			.get(USER_API_ENDPOINT)
			.then(response => response.data)
			.then((userApiResponse: UserResponse) => {
				setApiResponse(userApiResponse)
				setposts(userApiResponse.data)
			})

	}, [])



		return (
			<div className="container">
				{/* <pre>{JSON.stringify(apiResponse, null, 4)}</pre> */}
				<div className="row">
					{posts.map((post, idx) => <UserCard user={post} key={idx} />)}
					</div>
			</div>
		)
	}

export default UserList