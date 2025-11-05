import React from "react";
import { format } from "date-fns";
import { FaStar, FaEye, FaRegBookmark } from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";

const NewsCard = ({ news }) => {
  return (
    <div className=" bg-white shadow-2xl mt-3  mb-5">
      {/* Author section */}
      <div className="flex justify-between items-center bg-base-200 rounded-2xl mb-3 p-4 gap-3">
        <div className="flex items-center gap-3   ">
        <img
          src={news.author.img}
          alt={news.author.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <h3 className="text-sm font-semibold text-gray-800">
            {news.author.name}
          </h3>
          <p className="text-xs text-gray-500">
            {format(new Date(news.author.published_date), "yyyy-MM-dd")}
          </p>
        </div>
      </div>
                <div className="flex gap-3">
                    <FaRegBookmark />
                    <IoShareSocial />
                </div>
      </div>

      {/* Title */}
      <div className="px-4">
        <h2 className="text-lg font-bold text-gray-900 leading-snug">
          {news.title}
        </h2>
      </div>

      {/* Image */}
      <div className="mt-3">
        <img
          src={news.thumbnail_url}
          alt={news.title}
          className="w-full h-48 object-cover p-3 rounded-2xl"
        />
      </div>

      {/* Details */}
      <div className="px-4 py-3 text-sm text-gray-600 border-b-2 mb-3">
        {news.details.slice(0, 160)}...
        <span className="text-red-500 cursor-pointer hover:underline font-medium">
          {" "}
          Read More
        </span>
      </div>

      {/* Rating + Views */}
      <div className="flex items-center justify-between px-4 pb-3">
        {/* Stars */}
        <div className="flex items-center text-orange-500">
          {[...Array(news.rating.number)].map((_, i) => (
            <FaStar key={i} size={16} />
          ))}
          <span className="ml-2 text-gray-700 font-medium">
            {news.rating.number.toFixed(1)}
          </span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-1 text-gray-500 text-sm">
          <FaEye /> {news.total_view}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
