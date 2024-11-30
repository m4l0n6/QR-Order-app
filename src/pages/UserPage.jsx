    import React from 'react'
    import { useState } from 'react'
    import UserPageMenu from '../layouts/UserPageMenu';
    import { BrowserRouter as Router, Routes, Route, Outlet, Link, useNavigate } from "react-router-dom";

    function UserPage() { 
        const [showOrder, setShowOrder] = useState(false)
        const [nav, setNav] = useState(false)
        const [order, setOrder] = useState([])
        const [menu, setMenu] = useState([
            {
                id: 1,
                title: 'Food 1',
                type: 'Main course',
                image: 'https://picsum.photos/200/300',
                price: '10.000',
                quantity: 0,
            }, 
            {
                id: 2,
                title: 'Food 2',
                type: 'Main course',
                image: 'https://picsum.photos/200/300',
                price: '20.000',
                quantity: 0,
            },
            {
                id: 3,
                title: 'Food 3',
                type: 'Drink',
                image: 'https://picsum.photos/200/300',
                price: '30.000',
                quantity: 0,
            },
            {
                id: 4,
                title: 'Food 4',
                type: 'Drink',
                image: 'https://picsum.photos/200/300',
                price: '50.000',
                quantity: 0,
            }, 
        ])

        const totalItems = order.reduce((total, item) => total + item.quantity, 0)
        const totalPrice = order.reduce((total, item) => total + item.quantity * parseInt(item.price.replace('.', '')), 0).toLocaleString('vi', {style : 'currency', currency : 'VND'});

        const foodAddHandle = (id) => {
            const updatedMenu = menu.map((item) => {
                if (item.id === id) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            })
            // nếu trùng lăp thì cập nhật lại giá trị
            
            setMenu(updatedMenu); // cập nhật lại giá trị menu khi thêm vào giỏ hàng
            
            const foodInOrder = order.find((item) => item.id === id) 
            // kiểm tra xem food đã có trong order chưa
            if (foodInOrder) {
                const updatedOrder = order.map((item) =>
                    item.id === id ? { ...item, quantity: item.quantity + 1 } : item
                );
                // Nếu trùng lặp thì cập nhật lại giá trị
                setOrder(updatedOrder);

            } else {
                const newFood = menu.find((item) => item.id === id);
                setOrder([...order, { ...newFood, quantity: 1 }]);
                // nếu không trùng lặp thì thêm vào order
            }
        }

        const foodRemoveHandle = (id) => {
            const updatedMenu = menu.map((item) => {
                if (item.id === id && item.quantity > 0) {
                    return { ...item, quantity: item.quantity - 1 };
                }
                return item;
            });

            setMenu(updatedMenu);

            const foodInOrder = order.find((item) => item.id === id);
            if (foodInOrder && foodInOrder.quantity > 1) {
                const updatedOrder = order.map((item) =>
                    item.id === id ? { ...item, quantity: item.quantity - 1 } : item
                );
                setOrder(updatedOrder);
            } else {
                const updatedOrder = order.filter((item) => item.id !== id);
                setOrder(updatedOrder);
            }
        }

        const navShow = () => {
            setNav(!nav)
        }

        const orderHanle = () =>{
            setShowOrder(!showOrder)
        }

        return (
            <Router>
                <Routes>
                    <Route path="/" element={
                        <Header 
                            nav = {nav}
                            navShow = {navShow}
                            totalItems = {totalItems}
                        />
                    }>
                        <Route index element={
                            <UserPageMenu 
                                menu={menu} 
                                foodAddHandle={foodAddHandle}
                                foodRemoveHandle={foodRemoveHandle}
                                totalItems={totalItems} 
                                totalPrice={totalPrice} 
                                orderHanle={orderHanle}
                                navShow = {navShow}
                            /> 
                        }/>
                        <Route path="history" element={<History />} />
                        <Route path="rate" element={<Rate />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="cart" element={
                            <Cart 
                                order={order}
                                totalPrice={totalPrice}
                                totalItems={totalItems}
                                foodAddHandle={foodAddHandle}
                                foodRemoveHandle={foodRemoveHandle}
                            />} 
                        />
                        <Route path="cart/pay" element={
                            <Pay 
                                totalItems={totalItems}
                                totalPrice={totalPrice}
                            />} 
                        /> 
                    </Route>
                </Routes>
            </Router>
        )
    }

    function Header( {nav, navShow, totalItems} ) {
        return (
            <>
                <div className='user-container relative text-base font-normal font-BeVN max-w-screen-2xl overflow-auto mx-auto'>
                    <header className="header fixed top-0 left-0 z-20 bg-white w-full p-2 mx-auto shadow-md">
                        <nav className="nav flex flex-row justify-between items-center relative">
                            <Link to="/" className="name-app basis-2/6 text-2xl p-4 font-extrabold text-center ">
                                QROrder
                            </Link>

                            <ul className={`basis-3/6 ${nav ? 'absolute top-[72px] border z-50 w-full bg-white shadow-md' : 'hidden'} uppercase lg:flex lg:items-center lg:justify-enter lg:gap-8`}>
                                <Link to="/" className='user__nav__items'>
                                    Menu
                                </Link>

                                <Link to="/history" className='user__nav__items'>
                                    History
                                </Link>

                                <Link to="/rate" className='user__nav__items'>
                                    Rate
                                </Link>

                                <Link to="/contact" className='user__nav__items'>
                                    Contact
                                </Link>
                            </ul>
                            <ul className='flex flex-row basis-3/6 lg:basis-1/6 lg:justify-start justify-end mr-4 md:ml-6 '>
                                <div className="user flex border px-4 py-2 rounded-full items-center mr-2 shadow-md">
                                    <div className='mr-4'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user">
                                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                                            <circle cx="12" cy="7" r="4"/>
                                        </svg>
                                    </div>
                                    <div className='border rounded-full cursor-pointer'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down">
                                            <path d="m6 9 6 6 6-6"/>
                                        </svg>
                                    </div>
                                </div>
                                <Link to="cart" className="cart relative cursor-pointer p-2 border border-gray-300 rounded-full shadow-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart">
                                        <circle cx="8" cy="21" r="1"/>
                                        <circle cx="19" cy="21" r="1"/>
                                        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
                                    </svg>
                                    {totalItems > 0 && (
                                        <div className="cart-badge w-6 h-6 text-center text-white absolute rounded-full border border-solid -right-2 -top-3 bg-blue-300 px-1">
                                            {totalItems}
                                        </div>
                                    )}
                                </Link>
                                
                            </ul>

                            <div 
                                className='basis-1/6 items-center cursor-pointer lg:hidden sm:px-8'
                                onClick={navShow}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-align-justify" className='mx-auto'>
                                    <path d="M3 12h18"/>
                                    <path d="M3 18h18"/>
                                    <path d="M3 6h18"/>
                                </svg>
                            </div>
                        </nav>
                    </header> {/* end: header */}

                    <div className='main'>
                        <Outlet />
                    </div> {/* end: main */}
                </div>
            </>
        )
    }

    function History() {
        return (
            <div className='relative w-full mt-20 lg:mt-[96px]'>
                <h1>History</h1>
            </div>
        )
    }

    function Rate() {
        return (
            <div className='relative w-full mt-20 lg:mt-[96px]'>
                <h1>Rate</h1>
            </div>
        )
    }

    function Contact() {
        return (
            <div className='relative w-full mt-20 lg:mt-[96px]'>
                <h1>Contact</h1>
            </div>
        )
    }

    function Cart( {order, totalPrice, foodAddHandle, foodRemoveHandle} ) {
        const navigate = useNavigate();
        return (
            <div className='relative w-full mt-20 lg:mt-[96px]'>
                <div className='p-6 text-2xl'>Cart</div>
                <div>
                    {order.map((item) => (
                    <>
                        <div key={item.id} className='cart-item flex justify-between items-center border border-solid p-4 my-2'>
                            <div className='cart-item__info basis-7/12 flex items-center'>
                                <div className='cart-item__img mr-4'>
                                    <img src={item.image} alt={item.title} className='w-16 h-16 object-cover'/>
                                </div>
                                <div className='cart-item__content'>
                                    <h1>{item.title}</h1>
                                    <p className='text-sm text-gray-500'>{item.type}</p>
                                </div>
                            </div>
                            <div className='cart-item__action basis-5/12 flex justify-end items-center'>
                                <div className='cart-item__price text-base'>{item.price}đ</div>
                                <div className='cart-item__quantity px-4 flex items-center'>
                                    <div 
                                        className='cursor-pointer border rounded-full'
                                        onClick={() => foodRemoveHandle(item.id)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-minus">
                                            <path d="M5 12h14"/>
                                        </svg>
                                    </div>
                                    <div className='mx-4'>{item.quantity}</div>
                                    <div 
                                        className='cursor-pointer bg-blue-500 p-[2px] rounded-full'
                                        onClick={() => foodAddHandle(item.id)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus">
                                            <path d="M5 12h14"/>
                                            <path d="M12 5v14"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className='cart-item__total text-base'>{parseInt(item.price.replace('.', '')) * item.quantity}đ</div>
                            </div>
                        </div>
                        
                    </>
                    ))}
                    {order.length === 0 && <div className='text-center text-xl'>Cart is empty</div>}
                    <div className='cart-total flex p-4 my-2 mx-auto'>
                        <div className='text-2xl basis-7/12'>Total</div>
                        <div className='basis-5/12 flex justify-end items-center'>
                            <div className='text-xl'>{totalPrice}</div>
                        </div>
                    </div>
                    <div 
                        className='order-now bg-blue-500 py-4 mb-2 mx-4 rounded-full text-center text-white cursor-pointer hover:bg-blue-700 transition-all duration-150'
                        onClick={() => {
                            if (order.length === 0) {
                                alert('Cart is empty')
                            } else {
                                const cofirmPay = window.confirm('Are you sure you want to proceed to payment?')
                                if (cofirmPay) {
                                    navigate("/cart/pay")
                                }
                            }
                        }}
                    >
                        Order now
                    </div>
                </div>
            </div>
        )
    }

    function Pay ({totalItems, totalPrice}) {
        return (
            <div className='relative w-full mt-20 lg:mt-[96px]'>
                <div className='text-2xl p-4'>Cart &gt; Pay</div>
                <div className='px-4'>
                    <h1 className='mb-2 text-xl'>Contact information</h1>
                    <div>
                        <form action="">
                            <div className='flex flex-col mb-4'>
                                <label className='text-sm mb-2' htmlFor="name">Name:</label>
                                <input type="text" id='name' name='name' className='border border-solid p-2' />
                            </div>
                            <div className='flex flex-col mb-4'>
                                <label className='text-sm mb-2' htmlFor="phone">Phone:</label>
                                <input type="text" id='phone' name='phone' className='border border-solid p-2' />
                            </div>
                        </form>
                    </div>
                </div>

                <div className='px-4 mb-4'>
                    <h1 className='mb-2 text-xl'>Payment method</h1>
                    <div>
                        <input type="radio" id="cash" name="payment" value="cash" />
                        <label for="cash">Cash</label>
                    </div>
                    <div>
                        <input type="radio" id='bank' name='payment' value="bank" />
                        <label for="bank">Bank</label>
                    </div>
                </div>

                <div className='px-4 mb-4'>
                    <table className='w-full'>
                        <tr>
                            <th className='text-left'>Temp total ({totalItems})</th>
                            <td className='text-right'>{totalPrice}</td>
                        </tr>
                        <tr>
                            <th className='text-left'>Sale</th>
                            <td className='text-right'>0</td>
                        </tr>
                        <tr>
                            <th className='text-left'>Total</th>
                            <td className='text-xl text-right'>{totalPrice}</td>
                        </tr>
                    </table>
                </div>

                <div className="px-4 ">
                    <div className='text-center rounded-full bg-blue-500 py-4 mb-2 mx-4 text-white cursor-pointer hover:bg-blue-700 transition-all duration-150'>
                        Pay now
                    </div>
                </div>
            </div>
        )
    }

    export default UserPage
