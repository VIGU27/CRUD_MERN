import React from "react";

function Home() {
	const link = "#";
	const target = "_blank";

	return (
		<div className="container" >
			<center>
				<br></br><br></br>
				<h1>---------------- ADMIN INTERFACE ----------------</h1>
				<br></br><br></br><br></br><br></br>
			
				<p>
					<b>Online employee management system for any company</b>
				</p>

				<h4>FUNCTIONALITIES OF ADMIN</h4> 
				<li>Add Details of New Employee</li>
				<li>Delete Details Of Existing Employee</li>
				<li>Update Details Of Existing Employee</li>
				<li>View Information Of All Employee That Are Registered</li>
				<img data-speed="5" class="home-parallax" src="home-img.png" alt=""></img>
			</center>
		</div>
	);
}

export default Home;
