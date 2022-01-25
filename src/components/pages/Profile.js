import { useSelector } from 'react-redux';

const Profile = () => {
  const rocketList = useSelector((state) => state.rocketReducer);
  const missions = useSelector((state) => state.missionReducer.missions);
  return (
    <main className="m-8 flex w-screen">
      <div className="flex-1 mx-4">
        <h2 className="text-2xl font-semibold mb-6">My Missions</h2>

        {missions.filter((mission) => mission.member === true).map((mission) => <div key={mission.mission_id} className="border-2 mr-12 p-4">{mission.mission_name}</div>)}
      </div>
      <div className="flex-1 mx-4">
        <h2 className="text-2xl font-semibold mb-4">My Rockets</h2>

        {rocketList.filter((rocket) => rocket.reserved).map((rocket) => <div key={rocket.id} className="border-2 mr-12 p-4">{rocket.rocket_name}</div>)}

      </div>

    </main>
  );
};

export default Profile;
