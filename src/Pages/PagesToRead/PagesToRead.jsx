import { useContext } from "react";
import { BookContext } from "../../Context/BookContext";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PagesToRead = () => {
    const { readList } = useContext(BookContext);

    const chartData = readList.map(book => ({
        bookName: book.bookName,
        totalPages: book.totalPages
    }));

    return (
        <div className="w-full h-screen flex items-center justify-center bg-gray-50">
            <div className="w-11/12 bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold mb-8 text-center">Pages to Read</h1>
                
                <ResponsiveContainer width="100%" height={500}>
                    <BarChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="bookName" angle={-45} textAnchor="end" height={100} />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="totalPages" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default PagesToRead;