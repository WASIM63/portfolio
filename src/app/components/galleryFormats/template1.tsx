import React from "react";
import { Gallery } from "@/types";
import Image from "next/image";

const template1 = ({ moment }: { moment?: Gallery }) => {
	// Handle case where moment is undefined
	if (!moment) {
		return (
			<div className="w-full max-w-7xl mx-auto p-2 sm:p-4">
				<div className="min-h-[calc(100vh-100px)] md:min-h-[calc(100vh-150px)] w-full border-2 border-secondary rounded-2xl flex items-center justify-center">
					<p className="text-gray-500">No moment data available</p>
				</div>
			</div>
		);
	}
	return (
		<div className="w-full max-w-7xl mx-auto p-2 sm:p-4 ">
			<div className="container min-h-[calc(100vh-100px)] md:min-h-[calc(100vh-150px)] w-full border-2 border-secondary rounded-2xl flex flex-col lg:flex-row gap-4 p-3 sm:p-4 md:p-6">
				{/* Details Section */}
				<div className="w-full lg:w-[40%] min-h-[300px] lg:min-h-full border-2 border-secondary rounded-2xl p-4 flex flex-col ">
					{/* Title and Date - Fixed at top */}
					<div className="flex-shrink-0 space-y-3 sm:space-y-4">
						<h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
							{moment.title || "Moment Title"}
						</h1>
						<p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
							{moment.date?.toDateString()} •{" "}
							{moment.location || "Location"}
						</p>
					</div>

					{/* Description - Takes remaining space if exists */}
					{moment.description && (
						<div className="flex-1 mt-4 lg:mt-6 min-h-0 flex flex-col">
							<div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-3 flex-1 min-h-0 flex flex-col">
								<h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3 flex-shrink-0">
									Description
								</h3>
								<div className="flex-1 overflow-y-auto no-scrollbar">
									<p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
										{moment.description
											? moment.description
											: ""}
									</p>
								</div>
							</div>
						</div>
					)}
				</div>

				{/* Image Section */}
				<div className="flex-1 border-2 border-secondary rounded-2xl p-3 sm:p-4 md:max-h-[calc(100vh-150px)] flex flex-col">
					<div className="flex-1 overflow-y-auto no-scrollbar">
						{moment.photos && moment.photos.length > 0 ? (
							<div className="grid grid-cols-2 gap-4 auto-rows-max sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
								{moment.photos.map((pic, index) => (
									<div
										key={index}
										className={`
											${index === 0 ? "sm:col-span-2 lg:col-span-1" : ""}
											${index === 2 ? "lg:row-span-2" : ""}
											relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300
										`}
									>
										<Image
											src={`/gallery/${pic.img}`}
											alt={`Gallery image ${index + 1}`}
											width={400}
											height={300}
											className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
											style={{
												minHeight:
													index === 0
														? "250px"
														: "200px",
												maxHeight:
													index === 2
														? "400px"
														: "300px",
											}}
										/>
									</div>
								))}
							</div>
						) : (
							<div className="flex items-center justify-center h-full">
								<p className="text-gray-500">
									No images available
								</p>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default template1;
