import React from 'react';

const Mission = ((props) => {
  const data = props;
  return (
    <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 man-w-fit">{data.name}</td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 w-1/2 max-h-36">
        {data.description}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap max-w-fit">
        <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded
      dark:bg-blue-200 dark:text-blue-800"
        >
          Not a Member
        </span>
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap man-w-fit">
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border
      border-blue-500 hover:border-transparent rounded"
          type="button"
        >
          Join Mission
        </button>
      </td>
    </tr>
  );
});
export default Mission;
