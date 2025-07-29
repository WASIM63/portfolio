import React from "react";
import { gallery as galleryData } from "@/contents/gallery";
import Template1 from "../components/galleryFormats/template1";
import { Gallery as GalleryType } from "@/types";

const GalleryPage = () => {

	const sortedGallery = [...galleryData].sort(
		(a: GalleryType, b: GalleryType) => {
			const dateA = new Date(a.date ?a.date : 0).getTime();
			const dateB = new Date(b.date ?b.date : 0).getTime();
			return dateB - dateA; 
		}
	);

	return (
		<div>
			{sortedGallery.map((moment, index) => (
				<Template1 moment={moment} key={index} />
			))}
		</div>
	);
};

export default GalleryPage;
