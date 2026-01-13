import React, { useEffect, useState } from "react";
import MainLayout from "../components/Layouts/MainLayout";
import CardExpense from "../components/Elements/CardExpense";
import { CircularProgress } from "@mui/material"; 
import { getExpenses } from "../services/expenseService";

const ExpensesPage = () => {
  const [expenses, setExpenses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const capitalize = (str) => {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await getExpenses();
        let rawData = [];
        
        if (response.data && Array.isArray(response.data)) {
            rawData = response.data;
        } else if (response.data && response.data.data && Array.isArray(response.data.data)) {
            rawData = response.data.data;
        } else if (Array.isArray(response)) {
            rawData = response;
        }

        console.log("Data:", rawData);

        const formattedData = rawData.map((item, index) => ({
          id: item.id || index, 
          category: capitalize(item.category), 
          total: item.amount,                  
          change: item.percentage,             
          changeType: item.trend,              
          
          items: item.detail ? item.detail.map((subItem) => ({
            name: subItem.item,     
            date: subItem.date,     
            amount: subItem.amount  
          })) : []
        }));

        setExpenses(formattedData);

      } catch (error) {
        console.error("Error fetching expenses:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <MainLayout>
      <div class="flex justify-between items-center text-gray-02 mb-2">
        <h1 className="text-2xl">Expenses Comparison</h1>
      </div>

      {isLoading ? (
        <div className="w-full h-64 flex flex-col justify-center items-center">
            <CircularProgress sx={{ color: '#299D91' }} />
            <span className="mt-3 font-medium text-[#299D91]">Loading Data</span>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expenses.length > 0 ? (
            expenses.map((item) => (
              <CardExpense key={item.id} data={item} />
            ))
          ) : (
            <div className="col-span-full text-center py-10 text-gray-400 italic bg-white rounded-lg border border-dashed">
              No expenses data found. <br/>
            </div>
          )}
        </div>
      )}
    </MainLayout>
  );
};

export default ExpensesPage;