import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import ListedReadList from "../../Components/ListedBooks/ListedReadList";
import ListedWishList from "../../Components/ListedBooks/ListedWishList";

import { useState } from 'react';

const Books = () => {

  const [sortingType, setSortingType] = useState("");

  return (

    <div className="max-w-7xl mx-auto px-4 py-6">

      {/* Sort Section */}
      <div className='flex justify-center mb-6'>

        <div className="dropdown dropdown-center">

          <div
            tabIndex={0}
            role="button"
            className="btn btn-success text-white rounded-full"
          >
            Sort By ⬇️
            {
              sortingType &&
              <span>: {sortingType}</span>
            }
          </div>

          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow-lg mt-2"
          >

            <li onClick={() => setSortingType('Pages')}>
              <a>Pages</a>
            </li>

            <li onClick={() => setSortingType('Rating')}>
              <a>Rating</a>
            </li>

          </ul>

        </div>

      </div>

      {/* Tabs Section */}
      <Tabs>

        <TabList className="flex flex-wrap gap-3 border-b pb-3">

          <Tab
            className="cursor-pointer px-5 py-2 rounded-xl font-semibold border border-gray-300"
            selectedClassName="bg-green-500 text-white border-none"
          >
            Read List
          </Tab>

          <Tab
            className="cursor-pointer px-5 py-2 rounded-xl font-semibold border border-gray-300"
            selectedClassName="bg-green-500 text-white border-none"
          >
            Wish List
          </Tab>

        </TabList>

        {/* Read List */}
        <TabPanel>

          <div className="mt-6">

            <ListedReadList
              sortingType={sortingType}
            />

          </div>

        </TabPanel>

        {/* Wish List */}
        <TabPanel>

          <div className="mt-6">

            <ListedWishList
              sortingType={sortingType}
            />

          </div>

        </TabPanel>

      </Tabs>

    </div>

  );
};

export default Books;