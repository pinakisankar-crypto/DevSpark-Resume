import { useEffect, useState } from "react";
import { getGitHubStats } from "../../Functions/getGithubStats";
import GitHubCalendar from "react-github-calendar";
import background from "../../assets/project-bg.svg";
import { months } from "../../constants/contants";

const GitStats = () => {
  const [userName, setUserName] = useState(null);
  const [userFullName, setUserFullName] = useState(null);
  const [bio, setBio] = useState(null);
  const [profile, setProfile] = useState(null);
  const [company, setCompany] = useState(null);
  const [location, setLocation] = useState(null);
  const [numOfRepo, setNumOfRepo] = useState(null)
  const [dateOfJoin, setDateOfJoin] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      const data = await getGitHubStats("PinakiRay-webdev");
      setUserFullName(data.login);
      setUserName(data.name);
      setBio(data.bio);
      setProfile(data.avatar_url);
      setCompany(data.company);
      setLocation(data.location);
      setNumOfRepo(data.public_repos)
      
      const date = new Date(data.created_at)
      const dt = date.getDate()
      const day = date.getMonth()
      const year = date.getUTCFullYear()
      setDateOfJoin(`${dt} ${months[day]} ${year}`)
    };
    fetchUser();
  }, []);

  return (
    <section
      id="gitstats"
      className="relative rounded-[3.5rem] overflow-hidden xl:px-32 lg:px-18 md:px-12 sm:px-8 px-4 h-fit w-full py-12"
    >
      <h2 className="text-5xl font-semibold font-[lufgaBold] text-white">
        My <span className="text-(--primary-text)">Github Stats</span>
      </h2>

      <article className="flex-between gap-5 items-end">
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
          <button className="glass-card mt-8 w-64 py-2 rounded-md text-white cursor-pointer hover:bg-blue-600 transition duration-200 ease-in-out">
            Follow
          </button>
        </div>

        {/* github heat map and repository stats  */}
        <div className="w-[69%]">
          {/* repository stats  */}
          <div className="flex-between gap-8">
            {/* number of repositories */}
            <div className="relative glass-card w-[40%] h-42 mb-8 rounded-md px-4 py-2">
              <p className="text-white text-right capitalize" >no. of repositories</p>
              <h4 className="absolute-center text-white text-6xl font-semibold mt-2 text-center">{numOfRepo}</h4>
            </div>
            <div className="relative glass-card w-[60%] h-42 mb-8 rounded-md px-4 py-2">
              <p className="text-white text-right capitalize">date of joining</p>
              <h4 className="absolute-center text-white text-6xl font-semibold mt-2 text-center whitespace-nowrap">{dateOfJoin}</h4>
            </div>
          </div>
          <div className="text-white glass-card px-1 py-2 rounded-md">
            <GitHubCalendar username="PinakiRay-webdev" />
          </div>
        </div>
      </article>
      <img
        src={background}
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />
    </section>
  );
};

export default GitStats;
