import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { userContext } from "./userContext";

function ProtectedRoute({ component: Component, ...rest }) {
	const { user } = useContext(userContext);
	return (
		<Route
			{...rest}
			render={(props) => {
				if (user) {
					return <Component />;
				} else {
					return (
						<Redirect
							to={{ pathname: "/admin", state: { from: props.location } }}
						/>
					);
				}
			}}
		/>
	);
}

export default ProtectedRoute;
