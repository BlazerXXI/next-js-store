"use client";
import { Avatar } from "@mui/joy";
import React from "react";

const Account = () => {
	return (
		<>
			<section className="account">
				<div className="account__container container">
					<div>
						<Avatar />
						<h3>Account Page</h3>
					</div>
				</div>
			</section>
		</>
	);
};

export default Account;
