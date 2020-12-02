import React from "react";
import Heading from "../Components/Heading";
import BlogCard from "../Components/BlogCard";
import Thumbnail1 from "./../Assets/Images/Image4.webp";
import Thumbnail2 from "./../Assets/Images/Image2.jpg";
import Thumbnail3 from "./../Assets/Images/Image7.webp";

function FeaturedBlogs() {
	return (
		<div className="featured-Blogs pb-5">
			<div className="container">
				<div className="heading-title p-5">
					<Heading Heading="Featured Blogs" textAlign="center" />
				</div>
				<div className="card-deck mb-4 m-3">
					<BlogCard
						thumbnail={Thumbnail1}
						title="Example Project Title"
						badge1="React JS"
						badge2="Node JS"
						badge3="Mongo DB"
						link="/"
						date="02, feb, 2020"
						description="I build websites and applications 
                                     with the latest technologies."
					/>
					<BlogCard
						thumbnail={Thumbnail2}
						title="Example Project Title"
						badge1="React JS"
						badge2="Node JS"
						badge3="Mongo DB"
						link="/"
						date="02, feb, 2020"
						description="I build websites and applications 
                                     with the latest technologies."
					/>
					<BlogCard
						thumbnail={Thumbnail3}
						title="Example Project Title"
						badge1="React JS"
						badge2="Node JS"
						badge3="Mongo DB"
						link="/"
						date="02, feb, 2020"
						description="I build websites and applications 
                                     with the latest technologies."
					/>
				</div>
			</div>
		</div>
	);
}

export default FeaturedBlogs;
