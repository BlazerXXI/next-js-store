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
						<p>Account Name</p>
						<p>Account Email</p>
						<i>Account status</i>
					</div>
				</div>
			</section>
		</>
	);
};

export default Account;
