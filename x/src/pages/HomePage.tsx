import searching from "../assets/search.svg";
import homelogo from "../assets/homelogo.svg";
import bell from "../assets/bell.svg";
import message from "../assets/message.svg";
// import list from "../assets/list.svg";
import bookmark from "../assets/bookmark.svg";
import more from "../assets/more.svg";
import users from "../assets/users.svg";
import profile from "../assets/profile.svg";
import xlogo from "../assets/xlogo.svg";
import imgicon from "../assets/image.svg";
import poll from "../assets/poll.svg";
import schedual from "../assets/schedual.svg";
import location from "../assets/location.svg";
import emoji from "../assets/emoji.svg";
import gif from "../assets/gif.svg";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import axios from "axios";
import { useState } from "react";

type TitleInfo = {
  id: string;
  tweets: string;
};
function HomePage() {
  const [list, setList] = useState<TitleInfo[]>([]);
  const [inputValue, setInputValue] = useState({
    tweets: "",
  });
  const PostFun = () => {
    axios
      .post("https://64ecf95bf9b2b70f2bfb3014.mockapi.io/posttweets", {
        tweets: inputValue.tweets,
      })
      .then((res) => {
        setList([...list, res.data]);
        setInputValue({ tweets: "" });
      });
  };
  return (
    <div className=" px-20 bg-black text-white flex flex-row divide-x  divide-slate-700">
      <div className="flex flex-col items-start  gap-6 h-screen  px-10">
        <img className="w-7 py-3" src={xlogo}></img>
        <div className="flex flex-row items-center gap-5 hover:bg-gray-900">
          <img className="w-6 h-7" src={homelogo}></img>
          <p className="text-xl font-semibold">Home</p>
        </div>
        <div className="flex flex-row items-center gap-5">
          <img className="w-6 h-7" src={searching}></img>
          <p className="text-xl font-semibold">Explore</p>
        </div>
        <div className="flex flex-row items-center gap-5">
          <img className="w-6 h-7" src={bell}></img>
          <p className="text-xl font-semibold">Notifications</p>
        </div>
        <div className="flex flex-row items-center gap-5">
          <img className="w-6 h-7" src={message}></img>
          <p className="text-xl font-semibold">Messages</p>
        </div>
        <div className="flex flex-row items-center gap-5">
          <img className="w-6 h-7"></img>
          <p className="text-xl font-semibold">Lists</p>
        </div>
        <div className="flex flex-row items-center gap-5">
          <img className="w-6 h-7" src={bookmark}></img>
          <p className="text-xl font-semibold">Bookmarks</p>
        </div>
        <div className="flex flex-row items-center gap-5">
          <img className="w-6 h-7" src={xlogo}></img>
          <p className="text-xl font-semibold">Verified</p>
        </div>
        <div className="flex flex-row items-center gap-5">
          <img className="w-6 h-7" src={users}></img>
          <p className="text-xl font-semibold">Communities</p>
        </div>
        <div className="flex flex-row items-center gap-5">
          <img className="w-6 h-7" src={profile}></img>
          <p className="text-xl font-semibold">Profile</p>
        </div>
        <div className="flex flex-row items-center gap-5">
          <img className="w-6 h-7" src={more}></img>
          <p className="text-xl font-semibold">More</p>
        </div>
        <button className="bg-[#1C9BEF] font-bold px-24 rounded-full py-3 text-lg">
          Post
        </button>
      </div>

      <div className="flex flex-col py-3">
        <div className="text-xl font-semibold px-4 pb-5">Home</div>

        <div className="flex flex-row items-center justify-center border-b border-slate-700">
          <p className="px-32 py-4 hover:bg-zinc-900 ">Foryou</p>
          <p className="px-32 py-4 hover:bg-zinc-900">Following</p>
        </div>

        <div className="border-b  border-slate-700 pb-2">
          <div className="flex flex-row px-5 py-5 gap-4">
            <img className="border rounded-full p-3" src={xlogo}></img>
            <input
              className="bg-black text-xl border-none"
              type="text"
              placeholder="What is happening?!"
              value={inputValue.tweets}
              onChange={(e) => {
                setInputValue({ ...inputValue, tweets: e.target.value });
              }}
            ></input>
          </div>

          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-5 px-20 pt-3">
              <img className="h-auto w-4" src={imgicon}></img>
              <img className="h-auto w-4" src={gif}></img>
              <img className="h-auto w-4" src={poll}></img>
              <img className="h-auto w-4" src={emoji}></img>
              <img className="h-auto w-4" src={schedual}></img>
              <img className="h-auto w-4" src={location}></img>
            </div>
            <button
              className="rounded-full bg-[#1C9BEF] mx-3 py-2 px-5"
              onClick={PostFun}
            >
              {" "}
              Post
            </button>
          </div>
        </div>

        <div>
          <ul>
            {list.map((item, id) => (
              <div key={id}>
                <div>
                  <li>{item.tweets}</li>
                  <button className=" text-rose-50">delete</button>
                </div>
              </div>
            ))}
          </ul>
          );
        </div>
      </div>
      <div className="flex flex-col px-10 pt-1 gap-10 items-center">
        <div className="bg-[#16181C] px-16 py-3 rounded-full flex flex-row gap-3">
          <img className="w-5 h-5" src={searching}></img>
          <input
            className="bg-[#16181C] rounded-full"
            placeholder="Search"
          ></input>
        </div>
        <div className="bg-[#16181C] px-24 py-3 rounded-lg flex flex-col gap-10 flex flex-col h-screen justify-center">
          <div className="flex flex-row gap-5 items-center">
            <img className="w-10 h-10" src={github}></img>
            <p>GitHub</p>
          </div>
          <div className="flex flex-row gap-5 items-center">
            <img className="w-10 h-10" src={linkedin}></img>
            <p>LinkedIn</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
