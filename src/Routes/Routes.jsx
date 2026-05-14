import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Books from "../Pages/Bookspage/Books";
import Homepage from "../Pages/Homepage/Homepage";
import Errorpage from "../Pages/Errorpage/Errorpage";
import BookDetails from "../Pages/BookDetails/BookDetails";
import PagesToRead from "../Pages/PagesToRead/PagesToRead";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Homepage />,
            },
            {
                path: "/books",
                element: <Books />,
            },
            {
                path: "/bookDetails/:id",
                Component: BookDetails,
                // loader: ()=> fetch('/booksData.json')

            },
            {
                path: "/pages-to-read",  
                element: <PagesToRead />,
            }
          
        ],
        errorElement: <Errorpage/>,
      
    },
]);