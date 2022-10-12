import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const quizCategories = useLoaderData();
    const chartData = quizCategories.data;
    return (
        <div>
            <ResponsiveContainer width="100%" height={550}>
                <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="total" fill="#4b86a3" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;