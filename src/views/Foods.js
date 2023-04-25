import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";

//used to process the images from the sanity studio
const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
	return builder.image(source);
}

//query sanity data and return all the foods in the database
//use setFoods to assign the returned array
const Foods = () => {
	const [foods, setFoods] = useState(null);

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "foods"]{
					_id,
      foodName,
      foodDesc,
      foodImage{
        asset->{
          _id,
          url
        },
      },
      category->{
				title
			}
    }`
			)
			.then((data) => setFoods(data))
			.catch(console.error);
	}, []);

	return (
		<section className="container w-full lg:px-0 px-5 lg:w-3/4 mx-auto min-h-screen">
			<div className="flex lg:flex-row flex-col my-10 justify-center">
				<div className="flex items-center lg:mt-0 mt-5 gap-3 lg:flex-row flex-col">
					<input
						type="text"
						className="w-full lg:w-80 p-2 border-2 border-gray-500 rounded focus:outline-none"
					/>
					<button
						style={{ backgroundColor: "#FE043C" }}
						className="rounded w-full lg:w-auto px-10 py-3 text-white"
					>
						Search
					</button>
				</div>
			</div>
			<hr className="my-10" />
			<div className="my-5">
				<h3 className="text-3xl font-bold text-center my-10 lg:my-5">
					All Foods🥗
				</h3>
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					{/* If foods is truthy Iterate over the foods array and create a card for each object */}
					{foods &&
						foods.map((food) => (
							<div
								className="bg-gray-100 rounded shadow-xl p-5 std-border"
								key={food.foodName}
							>
								<div className="flex flex-col items-center">
									<img
										src={urlFor(food.foodImage).width(200).url()}
										alt={food.title}
										className="rounded-full object-cover w-40 h-40 border-4 shadow-inner std-border"
									/>
									<h4 className="text-2xl pt-3 font-bold capitalize">
										{food.foodName}
									</h4>
									<Link to={"/filteredfoods/" + food.category.title}>
										<small className="uppercase text-gray-400 font-semibold">
											{food.category.title}
										</small>
									</Link>
								</div>
								<p className="mt-5">{food.foodDesc}</p>
							</div>
						))}
				</div>
			</div>
		</section>
	);
};

export default Foods;