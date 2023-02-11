import { createContext, useReducer, useState } from "react";

export const Context = createContext();

const data = [
  {
    id: "project-dci-connect",
    title: "DCI Connect",
    description:
      "Group collab end of module project - implemented with modern technologies and built in only 9 days, this app is an idea for our study institution. If implemented live, it could potentially have a real-life impact on others.",
    stack: "Next.js | MongoDB | Auth0",
    killerFeature: "Dynamic fuzzy search via custom API.",
    gh: "https://github.com/OliveiraDCI/DCI-connect",
    live: "https://github.com/OliveiraDCI/DCI-connect",
    img: "",
    images: [
      "https://user-images.githubusercontent.com/95931865/217813376-5df92354-6169-46cb-9172-a0b28e7b9aa7.png",
      "https://user-images.githubusercontent.com/95931865/217813462-902d30e4-2190-4bc0-8b84-35fd9403efbc.png",
      "https://user-images.githubusercontent.com/95931865/217813504-f19b6c3d-fdc6-459f-9f1c-df1bb8b91860.png",
      "https://user-images.githubusercontent.com/95931865/217813708-1ecffc26-3475-4a6a-9a90-559dadcbf7e9.png",
    ],
  },
  {
    id: "project-ttt",
    title: "Tic-Tac-Toe game",
    description:
      "It was christmas day, I'm having a virtual celebration with my family when my 8 year old nephew asked me to play the tic-tac-toe game I told him I've created. Also sharing it here, if anyone else wanna play too. 🤓 ",
    stack: "React | SASS ",
    killerFeature: "A moment of happiness",
    gh: "https://github.com/olicoding/tic-tac-toe-game",
    live: "https://tic-tac-toe-game-olicoding.vercel.app/",
    img: "",
    images: [
      "https://live.staticflickr.com/65535/52682494143_3357457da8_z.jpg",
      "https://live.staticflickr.com/65535/52682276959_e76f382bb7_z.jpg",
      "https://live.staticflickr.com/65535/52681478332_f30a921fa7_z.jpg",
    ],
  },
  {
    id: "project1",
    title: "Link Shortener",
    description:
      "A simple full-stack webapp that allows users to create short links and track clicks. Built with MERN stack and Tailwind. Also testing implementing with Next.js 13, exploring Server Side Rendering, hydration and other modern development concepts.",
    stack: "React | Express | MongoDB",
    killerFeature: "Short link click counter",
    gh: "https://github.com/olicoding/fullstack-link-shortener-app",
    live: "https://fullstack-link-shortener.vercel.app/",
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
    description:
      "Group Project at DCI with a basic functionality - uploading pictures on a map location. Purpose of practicing handling Google API components",
    stack: "React | Google API",
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
