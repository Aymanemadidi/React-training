import "./styles.css";
import { useState } from "react";
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";

export default function App() {
  // const [username, setUsername] = useState("");
  const [isUpper, setIsUpper] = useState(false);
  const [isNum, setIsNum] = useState(false);
  const [isSymbol, setIsSymbol] = useState(false);

  const checkUpper = (str: string): boolean => {
    const nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const symbols = [
      "~",
      "!",
      "@",
      "#",
      "$",
      "%",
      "&",
      "^",
      "*",
      "(",
      ")",
      "_",
      "-",
      "+",
      "=",
      "{",
      "[",
      "}",
      "]",
      "<",
      ",",
      ">",
      "?",
      "/"
    ];
    for (let i = 0; i < str.length; i++) {
      if (
        str[i] === str[i].toUpperCase() &&
        !nums.includes(str[i]) &&
        !symbols.includes(str[i])
      ) {
        return true;
      }
    }
    return false;
  };

  const checkNumber = (str: string): boolean => {
    const nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    for (let i = 0; i < str.length; i++) {
      if (nums.includes(str[i])) {
        return true;
      }
    }
    return false;
  };

  const checkSymbol = (str: string): boolean => {
    const symbols = [
      "~",
      "!",
      "@",
      "#",
      "$",
      "%",
      "&",
      "*",
      "^",
      "(",
      ")",
      "_",
      "-",
      "+",
      "=",
      "{",
      "[",
      "}",
      "]",
      "<",
      ",",
      ">",
      "?",
      "/"
    ];
    for (let i = 0; i < str.length; i++) {
      if (symbols.includes(str[i])) {
        return true;
      }
    }
    return false;
  };

  const handlePasswordChange = (event) => {
    // setUsername(event.target.value);

    if (checkUpper(event.target.value)) {
      setIsUpper(true);
    } else {
      setIsUpper(false);
    }
    if (checkNumber(event.target.value)) {
      setIsNum(true);
    } else {
      setIsNum(false);
    }
    if (checkSymbol(event.target.value)) {
      setIsSymbol(true);
    } else {
      setIsSymbol(false);
    }
  };

  return (
    <div className="App">
      <h1>Form</h1>
      <div className="container">
        <form>
          <label htmlFor="username"> username </label>
          <input type="text" id="username" placeholder="enter username" />
          <label htmlFor="password"> password </label>
          <input
            type="text"
            id="password"
            placeholder="enter password"
            onChange={handlePasswordChange}
          />
        </form>
        <div>
          <ul>
            <li>
              <span>
                {isUpper ? (
                  <AiOutlineCheck className="green" />
                ) : (
                  <AiOutlineClose className="red" />
                )}
              </span>
              <span>At least one uppercase letter</span>
            </li>
            <li>
              <span>
                {isNum ? (
                  <AiOutlineCheck className="green" />
                ) : (
                  <AiOutlineClose className="red" />
                )}
              </span>
              <span>At least one number</span>
            </li>
            <li>
              <span>
                {isSymbol ? (
                  <AiOutlineCheck className="green" />
                ) : (
                  <AiOutlineClose className="red" />
                )}
              </span>
              <span>At least one symbol</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

