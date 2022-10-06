import React from 'react';
import { singleStockItem } from './types';
import CategoryButton from '../category-buttons';
import { Link } from 'react-router-dom';

export const ItemStyles = 'bg-slate-300 rounded-lg my-2  max-w-xs m-4 pl-4 p-1 	';

const divBorders = 'border-solid	border-2 rounded-md m-5	 ';
const chartTitles = 'text-slate-400 m-2';
const randTest0 = Math.floor(Math.random() * 100000);
const randTest = Math.floor(Math.random() * 100000);
const totalUsers = Math.abs(randTest - randTest0);
const randNames = [ 'Andrew Tate', 'Bolt Pawlovski', 'Emmet Pavlowski', 'Vtec Roman', 'Karol W.' ];
const randomArray = Array.from({ length: 10 }, () => Math.floor(Math.random() * 1000));
const randomVol = Array.from({ length: 5 }, () => Math.floor(Math.random() * 10 + 1));
const grow = Math.floor(Math.random() * 200) - 100;
const priceTest = Math.floor(grow * Math.random() - 50);
const grow2 = Math.floor(grow * 0.3);
const color = grow < 0 ? 'text-rose-700' : 'text-green-500';
const color2 = priceTest < 0 ? 'text-rose-700' : 'text-green-500';

console.log('radn', randomArray.sort((a, b) => b - a));

const SingleStockItem = ({ id, price, lastSold, name, category, description }: singleStockItem): JSX.Element => {
	return (
		<div className="  pt-2 align-center">
			<p className={`${ItemStyles} mt-10 ml-20 mb-5`}> ID: {id}</p>
			<div className=" grid grid-cols-2">
				
                    <div className="align-middle ml-20">
					<img
						className="rounded-lg  m-10 "
						src="https://tartak-meble.com.pl/wp-content/uploads/2022/02/eleganckie-krzeslo-do-jadalni-300x300.jpg"
					/>
                    </div>
                    <div>
					<div className="overflow-x-auto shadow-md sm:rounded-lg m-10">
						<div className="inline-block min-w-full align-middle mr-20 ">
							<div className="overflow-hidden ">
								<table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
									<thead className="bg-slate-100 dark:bg-slate-100">
										<tr>
											<th scope="col" className="p-4">
												<div className="flex items-center" />
											</th>
											<th
												scope="col"
												className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
											>
												Name
											</th>
											<th
												scope="col"
												className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
											>
												Price
											</th>
											<th
												scope="col"
												className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
											>
												Volumen
											</th>
											<th scope="col" className="p-4">
												
											</th>
										</tr>
									</thead>
									<tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
										<tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
											<td className="p-4 w-4">
												<div className="flex items-center" />
											</td>
											<td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
												{randNames[0]}
											</td>
											<td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
												{randomArray.sort()[0]}
											</td>
											<td className="py-4 px-10 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
												{randomVol[0]}
											</td>
											<td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap" />
										</tr>
										<tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
											<td className="p-4 w-4">
												<div className="flex items-center" />
											</td>
											<td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
												{randNames[1]}
											</td>
											<td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
												{randomArray.sort()[1]}
											</td>
											<td className="py-4 px-10 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
												{randomVol[1]}
											</td>
											<td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap" />
										</tr>
										<tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
											<td className="p-4 w-4">
												<div className="flex items-center" />
											</td>
											<td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
												{randNames[2]}
											</td>
											<td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
												{randomArray.sort()[2]}
											</td>
											<td className="py-4 px-10 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
												{randomVol[2]}
											</td>
											<td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap" />
										</tr>
										<tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
											<td className="p-4 w-4">
												<div className="flex items-center" />
											</td>
											<td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
												{randNames[3]}
											</td>
											<td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
												{randomArray.sort()[3]}
											</td>
											<td className="py-4 px-10 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
												{randomVol[3]}
											</td>
											<td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap" />
										</tr>
										<tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
											<td className="p-4 w-4">
												<div className="flex items-center" />
											</td>
											<td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
												{randNames[4]}
											</td>
											<td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
												{randomArray.sort()[4]}
											</td>
											<td className="py-4 px-10 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
												{randomVol[4]}
											</td>
											<td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap" />
										</tr>
									</tbody>
								</table>
                                
							</div>
                            
						</div>
                        
					</div>
                    
                    <div className=" flex items-right justify-center mb-4">
                    <Link to="/item/buy">
                    <button className="bg-neutral-200  border-b  rounded   px-12 py-4 text-xl text-neutral-600 hover:text-grey-800 hover:shadow-[inset_13rem_0_0_0] hover:shadow-amber-200 duration-[400ms,700ms] transition-[color,box-shadow] rounded">
                        Make an offer
                    </button>
                    </Link>
                    </div>
                    </div>

                    

			</div>

			<div className="grid grid-cols-4 ml-20">
				<div className={divBorders}>
					<h1 className={chartTitles}> Total users</h1>
					<h2 className="m-2">{totalUsers}</h2>
					<h2 className={`${color} m-2`}>{grow} %</h2>
				</div>
				<div className={divBorders}>
					<h1 className={chartTitles}>Price</h1>
					<h2 className="m-2">{grow2} $USD </h2>
					<h2 className={`${color2} m-2`}> {priceTest} % </h2>
				</div>
				<div className={divBorders}>
					<h1 className={chartTitles}>Difference</h1>
				</div>
				<div className={divBorders}>
					<h1 className={chartTitles}>Lorem ipsum</h1>
				</div>
			</div>
			<div className="ml-20  rounded-md m-5 grid grid-cols-6	">
				<p className={ItemStyles}> {price} $USD </p>
				<p className={ItemStyles}> {name} </p>
				<p className={ItemStyles}>Last sold: {lastSold.toDateString()}</p>
				<div className={ItemStyles}>
					<p className="">Category: </p>{' '}
					{category.map((cat, index) => <CategoryButton key={index} category={cat} />)}
				</div>

				<p className={ItemStyles}>Brand: {description.brand}</p>
				<p className={ItemStyles}>Model: {description.model}</p>
				<p className={ItemStyles}>Condition: {description.used ? 'Used' : 'New'}</p>
				<p className={ItemStyles}>Year of PP {description.yearOfPartProd}</p>
				<p className={ItemStyles}>Volumen: {description.volumem} </p>
				<p className={ItemStyles}>Condition: {description.condition}</p>
			</div>
		</div>
	);
};

export default SingleStockItem;
