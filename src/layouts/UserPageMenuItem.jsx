  import React from 'react'

  function UserPageMenuItem({food, add, remove}) {
    return (
      <div className='menu-item rounded-lg overflow-hidden w-44 mx-auto'>
        <div className="menu-item__img w-full ">
          {food.image && <img src={food.image} alt={food.title} className='w-full h-48 object-cover'/>}
        </div>
        <div className="menu-item__wrapper p-2 bg-white">
          <div className="menu-item__content mb-3">
              <h1>{food.title}</h1>
              <p className='text-sm text-gray-500'>{food.type}</p>
          </div>
          <div className="menu-item__action relative flex items-center"> 
              <div className="menu-item__price text-base">{food.price}đ</div>
              <div className="menu-item__add absolute right-0 border rounded-full px-2 py-1 flex items-center">
                  <div 
                    className="menu-item__add-btn cursor-pointer"
                    onClick={() => remove(food.id)}
                  >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-minus">
                          <path d="M5 12h14"/>
                      </svg>
                  </div>
                  <span className='px-2'>{food.quantity}</span>
                  <div 
                    className="menu-item__add-btn cursor-pointer bg-blue-500 p-[2px] rounded-full"
                    onClick={() => add(food.id)}
                  >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus">
                          <path d="M5 12h14"/>
                          <path d="M12 5v14"/>
                      </svg>
                  </div>
              </div>
          </div>
        </div>
      </div>
    )
  }

  export default UserPageMenuItem
