import { useEffect, useState } from "react";
import { getGitHubStats } from "../../Functions/getGithubStats";
import GitHubCalendar from "react-github-calendar";

const GitStats = () => {
  const [userName, setUserName] = useState(null);
  const [userFullName, setUserFullName] = useState(null);
  const [bio, setBio] = useState(null);
  const [profile, setProfile] = useState(null);
  const [company, setCompany] = useState(null);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const data = await getGitHubStats("PinakiRay-webdev");
      setUserFullName(data.login);
      setUserName(data.name);
      setBio(data.bio);
      setProfile(data.avatar_url);
      setCompany(data.company);
      setLocation(data.location);
    };
    fetchUser();
  }, []);

  return (
    <section
      id="gitstats"
      className="xl:px-32 lg:px-18 md:px-12 sm:px-8 px-4 h-fit w-full bg-(--primary-blue) py-12"
    >
      <h2 className="text-white text-5xl font-semibold text-left">
        My <span className="text-(--primary-text)">Github Stats</span>
      </h2>

      <article className="flex-between items-end" >
        {/* users github data  */}
        <div className="mt-24">
          {/* user github image  */}
          <div className="border border-gray-400 w-64 h-64 rounded-full">
            <img
              className="rounded-full w-full h-full object-cover"
              src={profile}
              alt=""
            />
          </div>
          {/* user github name */}
          <h4 className="text-xl text-white font-semibold mt-8">{userName}</h4>
          {/* user github username  */}
          <p className="my-2 text-(--secondary-text)">{userFullName}</p>

          {/* <p className="my-2 text-(--secondary-text)">{bio}</p> */}
          <p className="my-2 text-(--secondary-text)">{company}</p>
          <p className="my-2 text-(--secondary-text)">{location}</p>
          <button className="bg-blue-500 mt-8 w-64 py-2 rounded-lg text-white cursor-pointer hover:bg-blue-600 transition duration-200 ease-in-out">
            Follow
          </button>
        </div>

        {/* github heat map  */}
        <div className="text-white" >
            <GitHubCalendar username="PinakiRay-webdev" blockSize={13}/>
        </div>
      </article>
    </section>
  );
};

export default GitStats;
