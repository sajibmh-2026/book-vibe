
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadList from "../../Components/ListedBooks/ListedReadList";
import ListedWishList from "../../Components/ListedBooks/ListedWishList";
import { useState } from 'react';


const Books = () => {

  const [sortingType, setSortingType] = useState("")
  console.log(sortingType, "sortingType")



  return (
    <div className="container mx-auto w-4/5  my-5 ">

      <div className='flex justify-center my-3'>

        <div className="dropdown dropdown-start">
          <div tabIndex={0} role="button" className="btn m-1">Sort By ⬇️ : {sortingType}</div>
          <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li onClick={() => setSortingType('Pages')}><a>Pages</a></li>
            <li onClick={() => setSortingType('Rating')}><a>Rating</a></li>
          </ul>
        </div>
      </div>

      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <ListedReadList sortingType={sortingType} />
        </TabPanel>
        <TabPanel>
          <ListedWishList sortingType={sortingType} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Books;