import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faLockOpen } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
const card = ()=> {
    const heading = "Project Management VS Product Management";
  const desc =
    "To display a larger size To display font-boldfont-bold font-bold a larger size font-bold a larger size font-bold a larger size font-bold a larger size font-bold a larger size font-bold size font-bold a larger size font-bold";
  const ownership = "Project Management Influencing Team [Owner]";
  const [readmore, setReadmore] = useState<Boolean>(true);
  const [desbutt, setdesbutt] = useState(true);
  const divRef = useRef(null);
  const [readmoreTopic, setReadmoreTopic] = useState<Boolean>(true);
  const [topicbutt, setTopicbutt] = useState(true); 
  const topicRef = useRef(null);
  const discussion = 0;
  const lastActivity = "07 Nov";
  const lastTopicName =
    "What do you think <p className= do you think do you think";
  const memberSize = 13;
  const isLock = false;
  useEffect(() => {
    const divElement = divRef.current;
    if (divElement.scrollHeight < 80) {
      setdesbutt(false);
    }
    const topics = topicRef.current;
    if (topics.scrollHeight <= 40) {
      setTopicbutt(false);
    }
  }, []);
    return(
        <div className="flex  justify-center items-center mb-2">
        <div className="border w-3/4 bg-white rounded-md hover:drop-shadow-md drop-shadow-none">
          <div className="grid xl:grid-cols-3 grid-cols-2 pt-4 p-2">
            <div className="grid grid-cols-4 col-span-2">
              <div className="col-span-4 lg:col-span-1">
                <div className="flex justify-center">
                  <div className="flex w-44 h-44">
                    <Image
                      src="/batman_hero_avatar_comics-512.webp"
                      alt="Example image"
                      width={800}
                      height={600}
                    ></Image>
                    <div className="p-2 h-9 bg-red-300 text-white w-9 absolute z-10 rounded-full mt-32 ml-32">
                      {(isLock)?<FontAwesomeIcon className="ml-1/2" icon={faLock} size="lg" />:<FontAwesomeIcon className="" icon={faLockOpen} size={"lg"} />}
                   </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-3 col-span-4" style={{fontSize: '15px'}}>
                <p
                  className="p-2 text-base lg:text-lg xl:text-xl font-semibold flex justify-center lg:block"
                  style={{ color: "#303030"}}
                >
                  {heading}
                </p>
                {readmore ? (
                  <div style={{ color: "#303030"}}>
                    <p
                      className="p-2 h-auto max-h-20 overflow-hidden"
                      ref={divRef}
                    >
                      {desc}
                    </p>
                    {desbutt && (
                      <button
                        className="text-blue-400 ml-2"
                        onClick={() => setReadmore(false)}
                      >
                        Read more
                      </button>
                    )}
                  </div>
                ) : (
                  <div style={{ color: "#303030"}}>
                    <p className="p-2" ref={divRef}>
                      {desc}
                    </p>
                    {desbutt && (
                      <button
                        className="text-blue-400 ml-2"
                        onClick={() => setReadmore(true)}
                      >
                        Read Less
                      </button>
                    )}
                  </div>
                )}
                <p
                  className="text-blue-300 p-2 pt-6 font-semibold flex justify-center lg:block"
                  style={{ color: "#88BBD6" }}
                >
                  {ownership}
                </p>
              </div>
            </div>
            <div
              className="border-l xl:col-span-1 col-span-2"
              style={{ color: "#303030", fontSize: '15px' }}
            >
              <hr className="xl:hidden"/>
              <div className="sm:grid sm:grid-cols-7">
                <div className="border-r col-span-2">
                  <p className=" flex justify-center items-center">
                    Discussion
                  </p>
                  <p className="font-bold  pt-2 text-xl  flex justify-center items-center">
                    {discussion}
                  </p>
                </div>
                <hr className="sm:hidden"/>
                <div className="border-r pl-1 col-span-3">
                  <p className="text-md  flex justify-center items-center">
                    Members
                  </p>
                  <div className="flex justify-center items-center pt-1 pb-1">
                    <div className="flex">
                      {memberSize >= 2 && (
                        <div className="rounded-full border overflow-hidden w-10 h-10  ml-8 absolute">
                          <Image
                            src="/batman_hero_avatar_comics-512.webp"
                            alt="Example image"
                            width={100}
                            height={100}
                          ></Image>
                        </div>
                      )}
                      {memberSize >= 3 && (
                        <div className="rounded-full border overflow-hidden w-10 h-10 z-10 ml-16 absolute">
                          <Image
                            src="/images.jpg"
                            alt="Example image"
                            width={100}
                            height={100}
                          ></Image>
                        </div>
                      )}
                      {memberSize >= 1 && (
                        <div className="rounded-full border overflow-hidden w-10 h-10">
                          <Image
                            src="/images.jpg"
                            alt="Example image"
                            width={100}
                            height={100}
                          ></Image>
                        </div>
                      )}
                      <div className="">
                        {memberSize >= 4 && (
                          <p className="pt-2 ml-16 pl-1">+{memberSize - 3}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="sm:hidden"/>
                <div className=" col-span-2">
                  <p className="flex justify-center text-md items-center">
                    Last Activity
                  </p>
                  <p className="font-bold pt-2 text-xl flex justify-center items-center">
                    {lastActivity}
                  </p>
                </div>
              </div>
              <hr />
              <div className="">
                <p className="p-2  font-semibold " style={{ color: "#8C8581" }}>
                  Last topic
                </p>
                <div className="sm:grid sm:grid-cols-7" style={{ color: "#303030" }}>
                  <div className="flex justify-center pt-2">
                    <div className="rounded-full border overflow-hidden w-10 h-10"> 
                      <Image
                        src="/batman_hero_avatar_comics-512.webp"
                        alt="Example image"
                        width={100}
                        height={100}
                      ></Image>
                    </div>
                  </div>
                  {readmoreTopic ? (
                    <div className="col-span-6">
                      <p
                        className="p-2 h-auto max-h-8 overflow-hidden"
                        ref={topicRef}
                      >
                        {lastTopicName}
                      </p>
                      {topicbutt && (
                        <button
                          className="text-blue-400 ml-2"
                          onClick={() => setReadmoreTopic(false)}
                        >
                          Read more
                        </button>
                      )}
                    </div>
                  ) : (
                    <div className="col-span-6">
                      <p className="p-2" ref={topicRef}>
                        {lastTopicName}
                      </p>
                      {topicbutt && (
                        <button
                          className="text-blue-400 ml-2"
                          onClick={() => setReadmoreTopic(true)}
                        >
                          Read Less
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default card;