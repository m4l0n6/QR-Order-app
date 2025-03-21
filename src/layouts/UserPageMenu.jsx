import React from 'react'
import WebApp from '@twa-dev/sdk'
import UserPageMenuItem from './UserPageMenuItem'

function UserPageMenu({menu, foodAddHandle, foodRemoveHandle ,totalItems, totalPrice, orderHanle}) {
  return (
    <>
      <div className='relative bg-slate-300 mb-[58px] xl:mb-0 w-full menu'>
            <div className="bg-[url('https://picsum.photos/1000/1000')] bg-slate-800 bg-cover bg-no-repeat bg-center mt-20 lg:mt-[96px] h-[300px] sm:h-[360px] slider">
                <div className='flex justify-center items-center bg-gray-900 bg-opacity-40 w-full h-full'>
                    <h1 className='text-white text-2xl text-center'>Table 1 - Floor 1</h1>
                    
                </div>
            </div>  
                
            <div className='bg-white mb-4 p-4 text-center menu-header'>
                <h1 className='mb-4 text-3xl'>Menu</h1>
                <button className='bg-blue-500 px-4 py-2 border rounded-full text-white text-xl' onClick={() => WebApp.showAlert("Đây là cái nút đấy")}>Click me</button>
            </div>

            <div className="justify-center lg:px-32 menu-wrapper">
                <div className="flex justify-center lg:justify-start mx-auto mb-4 lg:ml-12 text-sm catalog">
                    <a className="mr-2 catalog__item" href="#all-menu">All menu</a>
                    <a className="mr-2 catalog__item" href="#main-course">Main coure</a>
                    <a className="mr-2 catalog__item" href="#drink">Drink</a>
                    <a className="mr-2 catalog__item" href="#">Other</a>
                </div>
                <div className="flex flex-row justify-self-center bg-white shadow-sm mb-4 lg:ml-12 px-4 py-2 border border-solid rounded-full w-[300px] search">
                    <div className='mr-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search">
                            <circle cx="11" cy="11" r="8"/>
                            <path d="m21 21-4.3-4.3"/>
                        </svg>
                    </div>
                    <div className='pr-4 w-full'>
                        <input type="text" placeholder="Search anything..." className='outline-none w-full font-light'/>
                    </div>
                </div>

                <div id='all-menu' className='pt-20 lg:pt-[96px]'>
                    <div className='justify-self-center lg:justify-self-start mb-4 lg:ml-12 text-3xl'>All menu</div>
                    <div className='gap-y-4 grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 mx-auto xl:mx-12 pb-4 food'>
                        {menu.map((food) => (
                            <UserPageMenuItem 
                                key={food.id} 
                                food={food} 
                                id = {food.id}
                                title = {food.title}
                                type = {food.type}
                                image = {food.image}
                                price = {food.price}
                                add={foodAddHandle}
                                remove={foodRemoveHandle}
                            />
                                
                        ))}
                    </div>
                </div>

                <div id='main-course' className='pt-20 lg:pt-[96px]'>
                    <div className='justify-self-center lg:justify-self-start mb-4 lg:ml-12 text-3xl'>Main course</div>
                    <div className='gap-y-4 grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 mx-auto xl:mx-12 pb-4 food'>
                        {menu.map((food) => 
                            food.type === 'Main course' 
                            ? <UserPageMenuItem 
                                key={food.id} 
                                food={food} 
                                id = {food.id}
                                title = {food.title}
                                type = {food.type}
                                image = {food.image}
                                price = {food.price}
                                add={foodAddHandle}/>
                            : ''
                        )}
                    </div>
                </div>

                <div id='drink' className='pt-20 lg:pt-[96px]'>
                    <div className='justify-self-center lg:justify-self-start mb-4 lg:ml-12 text-3xl'>Drink</div>
                    <div className='gap-y-4 grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 mx-auto xl:mx-12 pb-4 food'>
                        {menu.map((food) => 
                            food.type === 'Drink' 
                            ? <UserPageMenuItem 
                                key={food.id} 
                                food={food} 
                                id = {food.id}
                                title = {food.title}
                                type = {food.type}
                                image = {food.image}
                                price = {food.price}
                                add={foodAddHandle}/>
                            : ''
                        )}
                    </div>
                </div>
            </div>

            <div className='xl:right-4 bottom-0 fixed lg:absolute flex items-center bg-white mx-auto px-4 py-2 w-full xl:w-[30%] text-sm new-order'>
                <div className='mr-4 hotline basis-1/12'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                </div>
                <div className='flex quantity basis-4/12'>
                        {totalItems} dishes
                </div>
                <div className='flex total basis-3/12'>
                    <strong>{totalPrice}</strong>
                </div>
                <div 
                    className='bg-blue-500 hover:bg-blue-700 px-4 py-2 border border-solid rounded-full max-w-28 text-white text-center cursor-pointer order basis-4/12'
                    onClick={orderHanle}
                >
                    Order now
                </div>
            </div>
        </div>
    </>
  )
}

export default UserPageMenu
