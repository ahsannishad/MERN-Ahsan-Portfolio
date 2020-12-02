import React from "react";
import { Redirect, Route } from "react-router-dom";

function ProtectedRoute({ user, component: Component, ...rest }) {
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
