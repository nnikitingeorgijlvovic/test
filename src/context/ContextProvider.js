import { createContext, useReducer, useState } from "react";

export const Context = createContext();

const data = [
  {
    id: "project1",
    title: "Link Shortener",
    description:
      "A simple webapp that allows users to create short links and track clicks. Built with the MERN stack and Tailwind. Fully functional in the development environment, where requests to the server are made over HTTP. Currently working on handling HTTPS requests for production. I am also testing implementing it with Next.js 13, exploring Server Side Rendering, hydration and other modern development concepts.",
    stack: "React | Express | MongoDB",
    killerFeature: "Short link clicks counter",
    gh: "https://github.com/olicoding/link-shortener",
    live: "https://www.youtube.com/watch?v=gMfnlU4VX_8",
    img: "",
    images: [
      "https://live.staticflickr.com/65535/52580105988_2df2a10727_o.jpg",
      "https://live.staticflickr.com/65535/52579118727_e0fe0bf088_o.jpg",
      "https://live.staticflickr.com/65535/52580022675_879458531d_o.jpg",
      "https://live.staticflickr.com/65535/52580022715_d2c3bd88e3_o.jpg",
    ],
  },
  {
    id: "project2",
    title: "Memories On A Map",
    description: "Group Project at DCI bootcamp",
    stack: "React | Google API | JS",
    killerFeature: "Rendering pictures from user's local environment",
    gh: "https://github.com/LalaChristl/memories-on-a-map",
    live: "https://memories-on-a-map.vercel.app/",
    img: "",
    images: [
      "https://user-images.githubusercontent.com/73485164/201769525-7d52ccbc-ac59-4a65-8f64-9f619df7a4c6.png",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2Vic2l0ZSUyMGRldmVsb3BtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
      "https://user-images.githubusercontent.com/73485164/201916207-a1bab250-6a88-41c7-9d1c-ca636dccfb3d.svg",
    ],
  },
  {
    id: "project3",
    title: "Personal Website 2015",
    description:
      "Personal Website to promote my services as a dive instructor when I was living in Sydney.",
    stack: "WIX | GoPro | iMovie",
    killerFeature: "",
    gh: "https://github.com/olicoding",
    live: "https://eastsub.wixsite.com/eastsub",
    img: "",
    images: [
      "https://static.wixstatic.com/media/e8177d_3e3db9055f954806bf4afbb81dc5c3d5.jpg/v1/fill/w_920,h_332,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/e8177d_3e3db9055f954806bf4afbb81dc5c3d5.jpg",
      "https://static.wixstatic.com/media/e8177d_329e2862fe5c4e6781cd6a7cdbbd8a5e.jpg/v1/fill/w_920,h_332,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/e8177d_329e2862fe5c4e6781cd6a7cdbbd8a5e.jpg",
      "https://static.wixstatic.com/media/e8177d_80bf5706d4314e0f825acdba7972a0ff.jpg/v1/fill/w_920,h_332,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/e8177d_80bf5706d4314e0f825acdba7972a0ff.jpg",
      "https://static.wixstatic.com/media/e8177d_9ee7db17fd52437b88c61fa39d5f951d.jpg/v1/fill/w_920,h_332,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/e8177d_9ee7db17fd52437b88c61fa39d5f951d.jpg",
    ],
  },
];

function ContextProvider({ children }) {
  const reducer = (prevState, action) => {
    switch (action.type) {
      case "project1":
        return console.log("project1");
      case "project2":
        return console.log("project2");
      case "project3":
        return console.log("project3");
      default:
        return console.log("default");
    }
  };

  const [state, dispatch] = useReducer(reducer, data);
  const [selectedProject, setSelectedProject] = useState("");

  return (
    <Context.Provider
      value={{ state, dispatch, selectedProject, setSelectedProject }}
    >
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;
