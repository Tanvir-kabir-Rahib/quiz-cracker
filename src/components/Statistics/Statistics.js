import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const quizCategories = useLoaderData();
    const chartData = quizCategories.data;
    return (
        <div>
            <BarChart width={730} height={550} data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="total" fill="#4b86a3" />
            </BarChart>
        </div>
    );
};

export default Statistics;