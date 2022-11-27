import { createContext, useReducer, useState } from "react";

export const Context = createContext();

const data = [
  {
    id: "project1",
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
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2Vic2l0ZSUyMGRldmVsb3BtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
      "https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHdlYnNpdGUlMjBkZXZlbG9wbWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
    ],
  },
  {
    id: "project2",
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
      // "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2Vic2l0ZSUyMGRldmVsb3BtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
      // "https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHdlYnNpdGUlMjBkZXZlbG9wbWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
      // "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d2Vic2l0ZSUyMGRldmVsb3BtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    ],
  },
  {
    id: "project3",
    title: "Project 3",
    description: "Project 3 description",
    stack: "HTML | CSS | SASS",
    killerFeature: "feature three",
    gh: "https://github.com/olicoding",
    live: "https://github.com/olicoding",
    img: "",
    images: [
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2Vic2l0ZSUyMGRldmVsb3BtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
      "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d2Vic2l0ZSUyMGRldmVsb3BtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2Vic2l0ZSUyMGRldmVsb3BtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
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
