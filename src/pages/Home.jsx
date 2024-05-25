import React from "react";

function Home({ data }) {
	return (
		<>
			<h1>Danh sach san pham</h1>
			{data.map((product) => (
				<div key={product.id} className="card">
					<h2>{product.name}</h2>
					<p>{product.description}</p>
					<p>${product.price}</p>
				</div>
			))}
		</>
	);
}

export default Home;
