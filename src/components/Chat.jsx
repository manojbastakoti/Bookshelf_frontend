import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { errorToast } from "../redux/slices/toastSlice";

// import { useMutation } from "@tanstack/react-query";
import axios from "axios";
// import { XIcon, ChatIcon, SendIcon } from "@heroicons/react/outline";
import Typing from "./Typing";

const Chat = () => {
  const [showChatBox, setShowChatBox] = useState(false);
  const [question, setQuestion] = useState("");
  const [thread, setThread] = useState([]);

//   const dispatch = useDispatch();

  const handleClose = async () => {
    setThread([]);
    setShowChatBox(false);

    // try {
    //   const response = await axios.delete("http://localhost:5000/query/");
    //   console.log(response);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     let sendData = { question: question };
//     setThread((prev) => [...prev, { Question: question, Answer: <Typing /> }]);

//     setQuestion("");
//     // mutate(sendData, {
//     //   onSuccess: () => {},
//     // });
//   };

//   const { mutate, isLoading } = useMutation(
//     (values) => axios.post("http://localhost:5000/query/", values),
//     {
//       onMutate: () => {},
//       onSuccess: (data) => {
//         if (data.status === 200 || data.status === 201) {
//           console.log(data.data);
//           setThread((prevArray) => {
//             const newArray = [...prevArray];
//             const lastIndex = newArray.length - 1;
//             newArray[lastIndex] = data.data;
//             return newArray;
//           });
//         }
//       },
//       onError: (error) => {
//         if (error instanceof AxiosError) {
//           console.log(error.response.data);
//           dispatch(errorToast(error?.response?.data?.message));
//         } else {
//           console.log(error);
//           dispatch(errorToast(error?.response?.data?.message));
//         }
//       },
//     }
//   );

const handleSubmit = async (e) => {
    console.log("hello")
    e.preventDefault();
    // let sendData = { question: question };
    setThread((prev) => [...prev, { Question: question, Answer: <Typing /> }]);
  
    setQuestion("");

    // "http://192.168.123.2:8000/query", sendData
  
    try {
      const response = await axios({
        method:"post",
        url:"http://192.168.101.3:8000/query",
        data:{
            question:question
        }
      });
      if (response.status === 200 || response.status === 201) {
        console.log(response.data);
        setThread((prevArray) => {
          const newArray = [...prevArray];
          const lastIndex = newArray.length - 1;
          newArray[lastIndex] = response.data;
          return newArray;
        });
      }
    } catch (error) {
        console.log(error)
    //   if (error instanceof AxiosError) {
    //     console.log(error.response.data);
    //     dispatch(errorToast(error?.response?.data?.message));
    //   } else {
    //     console.log(error);
    //     dispatch(errorToast(error?.response?.data?.message));
    //   }
    }
  };
  

  return (
    <div className="relative">
      {!showChatBox && (
        <>
          <div
            className="fixed bottom-10 right-0 flex justify-end items-center z-50"
          >
            <button
              className=" text-white py-8 px-4 rounded-lg flex items-center space-x-2"
              onClick={() => {
                setShowChatBox(true);
              }}
            >
              {/* <ChatIcon className="h-5 w-5" /> */}
              <i className="fa-brands fa-facebook-messenger fa-beat fa-2xl text-blue-700 mr-10  dark:text-white"></i>
              {/* <span className="font-medium">Let's Chat</span> */}
            </button>
          </div>
          <div
            className="fixed bottom-10 right-1% flex justify-end items-center z-50 md:hidden"
          >
            {/* <button
              className="bg-blue-500 text-white py-2 px-3 rounded-full flex items-center space-x-1"
              onClick={() => {
                setShowChatBox(true);
              }}
            > */}
              {/* <ChatIcon className="h-4 w-4" /> */}
              {/* chatIcon
            </button> */}
          </div>
        </>
      )}
      <div
        className={`${
          showChatBox ? "translate-y-0" : "hidden"
        } transition-transform duration-200 ease-in-out fixed bottom-10 right-0 md:right-10`}
      >
        <div className="bg-white rounded-lg shadow-lg w-80 md:w-96 mx-1">
          <div className="flex justify-between items-center p-2">
            <img
              src="./assets/bookshelf-logo.png"
              alt="logo"
              className="h-8 w-8 md:h-10 md:w-10"
            />
            <h5 className="font-bold text-lg">Query</h5>
            <button onClick={handleClose}>
              {/* <XIcon className="h-5 w-5" /> */}
              <i className="fa-regular fa-circle-xmark fa-lg"></i>
            </button>
          </div>
          <div
            className="bg-lightgrey dark:bg-gray-900 w-80 md:w-96 h-72 md:h-80 p-2 overflow-y-scroll"
          >
            {thread?.map((chat, index) => (
              <div
                key={index}
                className="inline-flex flex-col gap-2 w-full my-2"
              >
                <div className="self-end">
                  <div className="bg-blue-100 text-left rounded-md py-1 px-2">
                    <p>{chat.Question}</p>
                  </div>
                </div>
                <div className="self-start">
                  <div className="bg-gray-100 text-left rounded-md py-1 px-2">
                    <p>{chat.Answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex items-center p-1 border-t border-gray-200"
          >
            <input
              type="text"
              className="ml-1 flex-1 outline-none bg-transparent"
              placeholder="Type your message here..."
              aria-label="Chatbot"
              value={question}
              onChange={handleQuestionChange}
            />
            <button type="submit" className="p-2">
              {/* <SendIcon className="h-5 w-5 text-blue-500" /> */}
              <i className="fa-solid fa-paper-plane fa-lg text-blue-700" ></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chat;
