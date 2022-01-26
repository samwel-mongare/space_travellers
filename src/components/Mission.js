import { useDispatch } from 'react-redux';
import { memberStatusFunc, memberActivated } from '../redux/Missions/Missions';

const Mission = ((props) => {
  const dispatch = useDispatch();

  const onClick = ((e) => {
    const missionId = e.target.parentElement.id;
    if (e.target.value === 'Join') {
      const activeMember = true;
      dispatch(memberStatusFunc({ missionId, activeMember }));
    } else if (e.target.value === 'leave') {
      const notActive = false;
      dispatch(memberActivated({ missionId, notActive }));
    }
  });

  const data = props;
  return (
    <tr className="bg-white odd:bg-gray-100 border-b transition duration-300 ease-in-out hover:bg-lime-100">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 man-w-fit">{data.name}</td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 w-1/2 max-h-36">
        {data.description}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap max-w-fit">
        {
              data.memberActive === true
                ? (
                  <span className="bg-blue-400 text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded
      dark:bg-blue-400 dark:text-white"
                  >
                    Active Member
                  </span>
                )
                : (
                  <span className="bg-gray-300 text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded
      dark:bg-gray-500 dark:text-white"
                  >
                    Not a Member
                  </span>
                )
          }
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap man-w-fit" id={data.idx}>
        {data.memberActive === true
          ? (
            <button
              className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border
      border-red-500 hover:border-transparent rounded"
              type="button"
              value="leave"
              onClick={onClick}
            >
              Leave Mission
            </button>
          )
          : (
            <button
              className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border
      border-gray-500 hover:border-transparent rounded"
              type="button"
              value="Join"
              onClick={onClick}
            >
              Join Mission
            </button>
          )}
      </td>
    </tr>
  );
});
export default Mission;
