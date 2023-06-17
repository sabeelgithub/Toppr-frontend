
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

import { toast } from 'react-toastify';
import jwt from 'jwt-decode'
import { useDispatch, useSelector } from "react-redux";
import { Subscribe } from "../../Axios/Services/ClientServices";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { SubscribeAdd } from "../../Redux/ClientSlice";



const SubscriptionModal = ({ setShowSubscriptionModal, expertID, domainID, domain_name, expert_name }) => {


    const cancelButtonRef = useRef(null);
    const [open, setOpen] = useState(true)
    const [selectedOption, setSelectedOption] = useState({
        value: 'hosting-medium',
        price: 600,
        month: 6,
    });


    const token = useSelector(state => state.ClientReducer.accessToken)

    const user = jwt(token)

    const dispatch = useDispatch()

    const Subscription = async (order_id) => {
        const data = {
            order_id: order_id,
            amount: selectedOption.price,
            duration: selectedOption.month,
            domain: domainID,
            expert: expertID,
            client: user.user_id
        }
        const response = await Subscribe(token, data)
        if (response?.status === 200) {
            setShowSubscriptionModal(false)
            dispatch(SubscribeAdd({ subscription: { expert_id: expertID, expert_name: expert_name, domain_id: domainID, domain_name: domain_name } }))
            toast.success(response?.message)

        } else {
            toast.success('something went wrong')
        }
    }
    return (
        <>

            <Transition.Root show={open} as={Fragment}>
                <Dialog
                    as="div"
                    className="relative z-10"
                    initialFocus={cancelButtonRef}
                    onClose={setOpen}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                    <div class="relative w-full max-h-full">
                                        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                            <button onClick={() => {
                                                setShowSubscriptionModal(false)
                                            }} type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="popup-modal">
                                                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                <span class="sr-only">Close modal</span>
                                            </button>
                                            <div class="p-6 text-center">


                                                <div>
                                                    <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">Choose Subscription?</h3>
                                                    <ul className="grid w-full gap-6 ">
                                                        <li>
                                                            <input type="radio" id="hosting-big" name="hosting" defaultValue="hosting-big"
                                                                value="hosting-big"
                                                                checked={selectedOption.value === 'hosting-big'}
                                                                onChange={() => {
                                                                    setSelectedOption({
                                                                        value: 'hosting-big',
                                                                        price: 900,
                                                                        month: 9,
                                                                    })

                                                                }

                                                                }
                                                                className="hidden peer" required />
                                                            <label htmlFor="hosting-big" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                                                <div className="block">
                                                                    <div className="w-full text-lg font-semibold">9 Month</div>
                                                                    <div className="w-full">₹ 900</div>
                                                                </div>
                                                                <svg aria-hidden="true" className="w-6 h-6 ml-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <input type="radio" id="hosting-medium" name="hosting" defaultValue="hosting-medium"
                                                                value="hosting-medium"
                                                                checked={selectedOption.value === 'hosting-medium'}
                                                                onChange={() => {
                                                                    setSelectedOption({
                                                                        value: 'hosting-medium',
                                                                        price: 600,
                                                                        month: 6
                                                                    })


                                                                }

                                                                }
                                                                className="hidden peer" />
                                                            <label htmlFor="hosting-medium" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                                                <div className="block">
                                                                    <div className="w-full text-lg font-semibold">6 Months</div>
                                                                    <div className="w-full">₹600</div>
                                                                </div>
                                                                <svg aria-hidden="true" className="w-6 h-6 ml-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <input type="radio" id="hosting-small" name="hosting" defaultValue="hosting-small"
                                                                value="hosting-small"
                                                                checked={selectedOption.value === 'hosting-small'}
                                                                onChange={() => {
                                                                    setSelectedOption({
                                                                        value: 'hosting-small',
                                                                        price: 300,
                                                                        month: 3,
                                                                    })


                                                                }

                                                                }
                                                                className="hidden peer" />
                                                            <label htmlFor="hosting-small" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                                                <div className="block">
                                                                    <div className="w-full text-lg font-semibold">3 Months</div>
                                                                    <div className="w-full">₹300</div>
                                                                </div>
                                                                <svg aria-hidden="true" className="w-6 h-6 ml-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                                                            </label>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <PayPalScriptProvider options={{ "client-id": "AT1Ktl9NZX0bdIVhIFfvOjqfKDW5TvuaFxVO5lVaTdnSar8jCMdbbW6ZEDCGdNznqKdAUO1LCQO5B3Az" }}>
                                                    <PayPalButtons style={{ layout: "vertical" }} className="mt-5"
                                                        createOrder={(data, actions) => {
                                                            return actions.order.create({
                                                                purchase_units: [
                                                                    {
                                                                        amount: {
                                                                            value: selectedOption.price
                                                                        },
                                                                    },
                                                                ],
                                                            });
                                                        }}
                                                        onApprove={(data, actions) => {
                                                            return actions.order.capture().then((response) => {
                                                                console.log(response)
                                                                Subscription(response.id)
                                                            })
                                                        }

                                                        }
                                                        forceReRender={[selectedOption]}
                                                    />
                                                </PayPalScriptProvider>


                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>

        </>
    )
}

export default SubscriptionModal
