import { createContext, useReducer, useState } from "react";

export const Context = createContext();

const data = [
  {
    id: "project-CS",
    title: "ClimateScoop",
    description:
      "This web app was created by Alan, Danica, and Rafael as our final project for the Full Stack Web Development course at DCI Digital Career Institute. Stay tuned for updates on when our app will be available for public use. ",
    stack: "OAuth 2.0 | React | Express ",
    killerFeature:
      "Charts dasboard with a full perspective on how climate change is affecting the world.",
    gh: "https://github.com/olicoding/ClimateScoop",
    live: "https://www.youtube.com/watch?v=wblm7sZ4vXg",
    images: [
      "https://live.staticflickr.com/65535/52790381677_97bfa0dcb3_b.jpg",
      "https://live.staticflickr.com/65535/52791330140_dbb455fc36_b.jpg",
      "https://live.staticflickr.com/65535/52791173304_52faaf5a98_b.jpg",
      "https://live.staticflickr.com/65535/52791330200_295ca1e08c_b.jpg",
      "https://live.staticflickr.com/65535/52791173344_ee521ba7e0_b.jpg",
    ],
  },
  {
    id: "project-dci-connect",
    title: "DCI Connect",
    description:
      "Group collab end of module project - implemented with modern technologies and built in only 9 days, this app is an idea for our study institution. If implemented live, it could potentially have a real-life impact on others.",
    stack: "Next.js | Auth0 | MongoDB",
    killerFeature: "Dynamic fuzzy search via custom API.",
    gh: "https://github.com/OliveiraDCI/DCI-connect",
    live: "",
    img: "",
    images: [
      "https://user-images.githubusercontent.com/95931865/217813376-5df92354-6169-46cb-9172-a0b28e7b9aa7.png",
      "https://user-images.githubusercontent.com/95931865/217813462-902d30e4-2190-4bc0-8b84-35fd9403efbc.png",
      "https://user-images.githubusercontent.com/95931865/217813504-f19b6c3d-fdc6-459f-9f1c-df1bb8b91860.png",
      "https://user-images.githubusercontent.com/95931865/217813708-1ecffc26-3475-4a6a-9a90-559dadcbf7e9.png",
    ],
  },
  {
    id: "project1",
    title: "Link Shortener",
    description:
      "A full-stack webapp that allows users to create short links and track clicks. Built with MERN stack and Tailwind. ",
    stack: "React | Express | MongoDB",
    killerFeature: "Short-link visits counter.",
    gh: "https://github.com/olicoding/fullstack-link-shortener-app",
    live: "https://fullstack-link-shortener.vercel.app/",
    images: [
      "https://live.staticflickr.com/65535/52580105988_2df2a10727_o.jpg",
      "https://live.staticflickr.com/65535/52579118727_e0fe0bf088_o.jpg",
      "https://live.staticflickr.com/65535/52580022675_879458531d_o.jpg",
      "https://live.staticflickr.com/65535/52580022715_d2c3bd88e3_o.jpg",
    ],
  },

  {
    id: "project3",
    title: "Personal Website 2015",
    description:
      "I've created a personal website using no-code tools to showcase my dive instructor services while I was residing in Sydney.",
    stack: "WIX | GoPro | iMovie",
    killerFeature: "",
    gh: "",
    live: "https://eastsub.wixsite.com/eastsub",
    images: [
      "https://static.wixstatic.com/media/e8177d_3e3db9055f954806bf4afbb81dc5c3d5.jpg/v1/fill/w_920,h_332,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/e8177d_3e3db9055f954806bf4afbb81dc5c3d5.jpg",
      "https://static.wixstatic.com/media/e8177d_329e2862fe5c4e6781cd6a7cdbbd8a5e.jpg/v1/fill/w_920,h_332,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/e8177d_329e2862fe5c4e6781cd6a7cdbbd8a5e.jpg",
      "https://static.wixstatic.com/media/e8177d_80bf5706d4314e0f825acdba7972a0ff.jpg/v1/fill/w_920,h_332,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/e8177d_80bf5706d4314e0f825acdba7972a0ff.jpg",
      "https://static.wixstatic.com/media/e8177d_9ee7db17fd52437b88c61fa39d5f951d.jpg/v1/fill/w_920,h_332,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/e8177d_9ee7db17fd52437b88c61fa39d5f951d.jpg",
    ],
  },
];

function ContextProvider({ children }) {
  const initialState = {
    selectedProject: null,
  };

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "select-project":
        return {
          ...state,
          selectedProject: action.payload,
        };

      default:
        return state;
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
