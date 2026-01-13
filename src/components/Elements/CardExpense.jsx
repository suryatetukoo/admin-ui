import React from "react";
import housingIcon from "../../assets/icons/Housing.svg"; 
import foodIcon from "../../assets/icons/Food.svg";
import transportIcon from "../../assets/icons/Trasnport.svg";
import entertainmentIcon from "../../assets/icons/Movie.svg";
import shoppingIcon from "../../assets/icons/Shopping.svg";
import othersIcon from "../../assets/icons/Others.svg";

const CardExpense = ({ data }) => {
  
  const getIcon = (category) => {
    switch (category) {
      case "Housing": return housingIcon;
      case "Food": return foodIcon;
      case "Transportation": return transportIcon;
      case "Entertainment": return entertainmentIcon;
      case "Shopping": return shoppingIcon;
      default: return othersIcon;
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col h-full font-body">
      <div className="flex justify-between items-start mb-6">
        <div className="flex gap-4">
          <div className="p-3 bg-gray-50 rounded-xl h-12 w-12 flex items-center justify-center">
            <img 
                src={getIcon(data.category)} 
                alt={data.category} 
                className="w-6 h-6 object-contain"
            />
          </div>
          <div>
            <h4 className="text-gray-03 font-medium text-sm">{data.category}</h4>
            <span className="text-xl font-bold text-defaultBlack">${data.total}</span>
          </div>
        </div>
        
        <div className="text-right">
            <div className={`flex items-center justify-end text-sm font-semibold ${data.changeType === 'up' ? 'text-special-red' : 'text-special-green'}`}>
                <span>{data.change}%</span>
                {data.changeType === 'up' ? (
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
                ) : (
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
                )}
            </div>
            <p className="text-xs text-gray-03 mt-1">Compare to last month</p>
        </div>
      </div>

      <div className="space-y-4">
        {data.items.map((item, index) => (
            <div key={index} className="flex justify-between items-center border-b border-gray-50 pb-2 last:border-0 last:pb-0">
                
                <div>
                    <h5 className="font-semibold text-gray-02 text-sm">{item.name}</h5>
                </div>

                <div className="text-right">
                    <span className="font-bold text-gray-02 text-sm block">${item.amount}</span>
                    <p className="text-xs text-gray-03 mt-1">{item.date}</p>
                </div>

            </div>
        ))}
      </div>
    </div>
  );
};

export default CardExpense;
