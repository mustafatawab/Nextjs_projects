import React from "react";

const UserProfile = ({ params }: { params: { id: string } }) => {
  return <div>
    <h1 className="text-center p-10">
        User Profile <span className="bg-orange-600 p-2 ml-2 text-black">{params.id}</span>
    </h1>
  </div>;
};

export default UserProfile;
