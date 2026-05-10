import { useContext } from "react";
import { BookContext } from "../../Context/BookContext";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadList from "../../Components/ListedBooks/ListedReadList";
import ListedWishList from "../../Components/ListedBooks/ListedWishList";


const Books = () => {

  // use context
  const { storeBooks, wishList } = useContext(BookContext)
  console.log(storeBooks, wishList, "BookContext")
  return (
    <div className="container mx-auto w-4/5  my-5 ">
 
     

       <Tabs>
    <TabList>
      <Tab>Read List</Tab>
      <Tab>Wish List</Tab>
    </TabList>

    <TabPanel>
        <ListedReadList/>
    </TabPanel>
    <TabPanel>
      <ListedWishList/>
    </TabPanel>
  </Tabs>
    </div>
  );
};

export default Books;