import React, { useState, useEffect } from "react";
import sanityClient from "../client";

import Category from "./Category";

const Categories = () => {
	// state to hold and update categories object
	const [categories, setCategories] = useState(null);

	//querying the sanity data for all the categories
	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "category"]{
      title,
      slug,
      description,
      image{
        asset->{
          _id,
          url
        },
      },
      hexCode,
    }`
			)
			.then((data) => setCategories(data))
			.catch(console.error);
	}, []);



	return (
		<div className="">
			<h3 className="text-3xl font-bold text-center my-10 lg:my-5">
				All Categories🥘
			</h3>

			<div className="flex flex-col lg:flex-row lg:justify-center flex-wrap w-full gap-10 my-10">
				{/*  If foods is truthy iterate over the categories array and mapping each object to a Category Component */}
				{categories &&
					categories.map(category => (
						<Category key={category._id} category={category} />
					))}
			</div>
		</div>
	);
};

export default Categories;