import React, { useState } from 'react';

const Body = () => {
  const [calories, setCalories] = useState(2000);
  const [dietType, setDietType] = useState('anything');
  const [mealsPerDay, setMealsPerDay] = useState(3);

  const mealPlans = {
    breakfast: {
      image: "https://images.unsplash.com/photo-1494390248081-4e521a5940db?auto=format&fit=crop&w=600",
      title: "Healthy Breakfast Bowl",
      description: "Oatmeal with fresh berries, nuts, and honey",
      nutrition: { calories: 400, protein: 15, carbs: 65, fat: 12 }
    },
    lunch: {
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600",
      title: "Quinoa Buddha Bowl",
      description: "Quinoa, grilled chicken, avocado, and mixed vegetables",
      nutrition: { calories: 550, protein: 35, carbs: 45, fat: 25 }
    },
    dinner: {
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=600",
      title: "Grilled Salmon Plate",
      description: "Wild-caught salmon with roasted vegetables and brown rice",
      nutrition: { calories: 600, protein: 40, carbs: 50, fat: 28 }
    }
  };

  return (
    <div className="w-full bg-gradient-to-b from-zinc-800 to-gray-900">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-[#f07651]">
            Your Personal AI Diet Assistant
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Get personalized meal plans tailored to your goals and preferences
          </p>
          
          {/* Enhanced Calculator */}
          <div className="bg-zinc-800 p-8 rounded-xl shadow-lg max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl font-semibold text-[#f07651] mb-6">Generate Your Meal Plan</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-300 mb-2">Target Calories</label>
                <input 
                  type="range" 
                  min="1200" 
                  max="4000" 
                  step="50"
                  value={calories}
                  onChange={(e) => setCalories(e.target.value)}
                  className="w-full accent-[#f07651]"
                />
                <span className="text-gray-300">{calories} calories</span>
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Diet Type</label>
                <select 
                  className="w-full p-2 rounded-lg bg-zinc-700 text-gray-300 border border-zinc-600"
                  value={dietType}
                  onChange={(e) => setDietType(e.target.value)}
                >
                  <option value="anything">Anything</option>
                  <option value="vegetarian">Vegetarian</option>
                  <option value="vegan">Vegan</option>
                  <option value="keto">Keto</option>
                  <option value="paleo">Paleo</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Meals per Day</label>
                <select 
                  className="w-full p-2 rounded-lg bg-zinc-700 text-gray-300 border border-zinc-600"
                  value={mealsPerDay}
                  onChange={(e) => setMealsPerDay(Number(e.target.value))}
                >
                  {[2, 3, 4, 5, 6].map(num => (
                    <option key={num} value={num}>{num} meals</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Activity Level</label>
                <select className="w-full p-2 rounded-lg bg-zinc-700 text-gray-300 border border-zinc-600">
                  <option>Sedentary</option>
                  <option>Light Exercise</option>
                  <option>Moderate Exercise</option>
                  <option>Heavy Exercise</option>
                </select>
              </div>
            </div>
            <button className="w-full py-3 bg-[#f07651] text-white rounded-xl font-semibold hover:opacity-90 transition-all">
              Generate Meal Plan
            </button>
          </div>
        </section>

        {/* Sample Meals Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#f07651]">Today's Meal Plan</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(mealPlans).map(([mealType, meal]) => (
              <div key={mealType} className="bg-zinc-800 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={meal.image} 
                  alt={meal.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-[#f07651] mb-2">{meal.title}</h3>
                  <p className="text-gray-300 text-sm mb-2">{meal.description}</p>
                  <div className="flex flex-wrap gap-2 text-sm">
                    <span className="text-gray-400">{meal.nutrition.calories} cal</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-400">{meal.nutrition.protein}g protein</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-400">{meal.nutrition.carbs}g carbs</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-400">{meal.nutrition.fat}g fat</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section with Icons */}
        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-zinc-800 p-6 rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-[#f07651] rounded-full mb-4 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-[#f07651]">Smart Meal Planning</h3>
            <p className="text-gray-300">AI-powered meal suggestions based on your preferences and nutritional needs</p>
          </div>
          <div className="bg-zinc-800 p-6 rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-[#f07651] rounded-full mb-4 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7m-8 8h4m-4-4h4m-6 8h.01M9 16h.01"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-[#f07651]">Grocery Lists</h3>
            <p className="text-gray-300">Automatic shopping lists generated from your meal plans</p>
          </div>
          <div className="bg-zinc-800 p-6 rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-[#f07651] rounded-full mb-4 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18v18H3V3zm9 14h4m-4-4h4m-6 8h.01M9 16h.01"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-[#f07651]">Macro Tracking</h3>
            <p className="text-gray-300">Track your calories, protein, carbs, and fats with ease</p>
          </div>
        </section>

        {/* CTA Section - Modified margin bottom */}
        <section className="text-center bg-zinc-800 p-12 rounded-xl shadow-lg mb-8">
          <h2 className="text-3xl font-bold mb-6 text-[#f07651]">Ready to Start Your Health Journey?</h2>
          <p className="text-gray-300 mb-8 text-lg">
            Join thousands of others who have transformed their diet with AI-powered meal planning
          </p>
          <button className="px-8 py-3 rounded-xl text-white font-semibold text-lg bg-[#f07651] hover:opacity-90 transition-all">
            Create Your Meal Plan
          </button>
        </section>
      </div>
    </div>
  );
};

export default Body;