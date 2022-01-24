import { useSelector } from 'react-redux';

const Profile = () => {
  const rocketList = useSelector((state) => state.rocketReducer);

  return (
    <main className="m-8 flex w-screen">
      <div className="flex-1 mx-4">
        <h2 className="text-2xl font-semibold">My missions</h2>
      </div>
      <div className="flex-1 mx-4">
        <h2 className="text-2xl font-semibold mb-4">My Rockets</h2>

        {rocketList.map((rocket) => (rocket.reserved && <div className="border-2 mr-12 p-4">{rocket.rocket_name}</div>))}

      </div>

    </main>
  );
};

export default Profile;
