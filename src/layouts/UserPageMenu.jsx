import React from 'react'
import UserPageMenuItem from './UserPageMenuItem'

function UserPageMenu({menu, foodAddHandle, foodRemoveHandle ,totalItems, totalPrice, orderHanle}) {
  return (
    <>
      <div className='menu bg-slate-300 relative w-full mb-[58px] xl:mb-0'>
            <div className="slider mt-20 bg-[url('https://picsum.photos/1000/1000')] lg:mt-[96px] sm:h-[360px] h-[300px] bg-cover bg-no-repeat bg-center bg-slate-800">
                <div className='w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-40'>
                    <h1 className='text-center text-white text-2xl'>Table 1 - Floor 1</h1>
                </div>
            </div>  
                
            <div className='menu-header p-4 text-center bg-white mb-4'>
                <h1 className='text-3xl mb-4'>Menu</h1>
            </div>

            <div className="menu-wrapper lg:px-32 justify-center">
                <div className="catalog flex justify-center text-sm lg:justify-start mb-4 lg:ml-12 mx-auto">
                    <a className="catalog__item mr-2" href="#all-menu">All menu</a>
                    <a className="catalog__item mr-2" href="#main-course">Main coure</a>
                    <a className="catalog__item mr-2" href="#drink">Drink</a>
                    <a className="catalog__item mr-2" href="#">Other</a>
                </div>
                <div className="search flex flex-row justify-self-center lg:ml-12 w-[300px] mb-4 border border-solid  py-2 px-4 bg-white rounded-full shadow-sm">
                    <div className='mr-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search">
                            <circle cx="11" cy="11" r="8"/>
                            <path d="m21 21-4.3-4.3"/>
                        </svg>
                    </div>
                    <div className='w-full pr-4'>
                        <input type="text" placeholder="Search anything..." className='w-full outline-none font-light'/>
                    </div>
                </div>

                <div id='all-menu' className='pt-20 lg:pt-[96px]'>
                    <div className='text-3xl lg:ml-12 mb-4 justify-self-center lg:justify-self-start'>All menu</div>
                    <div className='food grid grid-cols-2 sm:grid-cols-3  xl:grid-cols-4 xl:mx-12 gap-y-4 mx-auto pb-4'>
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
                    <div className='text-3xl lg:ml-12 mb-4 justify-self-center lg:justify-self-start'>Main course</div>
                    <div className='food grid grid-cols-2 sm:grid-cols-3  xl:grid-cols-4 xl:mx-12 gap-y-4 mx-auto pb-4'>
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
                    <div className='text-3xl lg:ml-12 mb-4 justify-self-center lg:justify-self-start'>Drink</div>
                    <div className='food grid grid-cols-2 sm:grid-cols-3  xl:grid-cols-4 xl:mx-12 gap-y-4 mx-auto pb-4'>
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

            <div className='new-order fixed text-sm lg:absolute flex items-center w-full mx-auto bottom-0 xl:right-4 xl:w-[30%] px-4 py-2 bg-white'>
                <div className='hotline basis-1/12 mr-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                </div>
                <div className='quantity flex basis-4/12'>
                        {totalItems} dishes
                </div>
                <div className='total flex basis-3/12'>
                    <strong>{totalPrice}</strong>
                </div>
                <div 
                    className='order basis-4/12 max-w-28 px-4 py-2 text-center border border-solid rounded-full bg-blue-500 hover:bg-blue-700 text-white cursor-pointer'
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
