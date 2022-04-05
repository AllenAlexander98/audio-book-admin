import React from "react";

// components

import CardTable from "components/Cards/CardTable.js";
import BookCardTable from "components/Cards/BookCardTable";

// layout for page

import Admin from "layouts/Admin.js";

const books = [
  {
    id: 1,
    name: "Book 1",
    description: "Description 1",
    author: "Author 1",
    category: "Category 1",
    isVip: true,
    cost: "11111111 VNĐ",
    thumbnail: "/img/book1.jpg",
    channel: "Channel 1"
  },
  {
    id: 2,
    name: "Book 2",
    description: "Description 2",
    author: "Author 2",
    category: "Category 2",
    isVip: false,
    cost: "22222222 VNĐ",
    thumbnail: "/img/book1.jpg",
    channel: "Channel 2"
  },
  {
    id: 3,
    name: "Book 3",
    description: "Description 3",
    author: "Author 3",
    category: "Category 3",
    isVip: false,
    cost: "33333333 VNĐ",
    thumbnail: "/img/book1.jpg",
    channel: "Channel 3"
  },
  {
    id: 4,
    name: "Book 4",
    description: "Description 4",
    author: "Author 4",
    category: "Category 4",
    isVip: true,
    cost: "44444444 VNĐ",
    thumbnail: "/img/book1.jpg",
    channel: "Channel 4"
  },
  {
    id: 5,
    name: "Book 5",
    description: "Description 5",
    author: "Author 5",
    category: "Category 5",
    isVip: true,
    cost: "55555555 VNĐ",
    thumbnail: "/img/book1.jpg",
    channel: "Channel 5"
  }
];

export default function Index() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <BookCardTable title="Books" books={books} />
        </div>
      </div>
    </>
  );
}

Index.layout = Admin;
