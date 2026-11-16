
const fs = require("fs");
const path = require("path");
const vm = require("vm");

test("addColor sends the correct color and user ID", () => {
  
  const elements = {
    colorText: { value: "Blue" },
    colorAddResult: { innerHTML: "" }
  };

  const document = {
    getElementById: jest.fn((id) => elements[id])
  };


  const xhr = {
    open: jest.fn(),
    setRequestHeader: jest.fn(),
    send: jest.fn()
  };

  const XMLHttpRequest = jest.fn(() => xhr);

  const context = vm.createContext({
    document,
    XMLHttpRequest
  });

  const filePath = path.join(__dirname, "../public/js/code.js");
  const source = fs.readFileSync(filePath, "utf8");

  vm.runInContext(source, context);

  
  vm.runInContext("userId = 5", context);

  
  vm.runInContext("addColor()", context);

  expect(xhr.open).toHaveBeenCalledWith(
    "POST",
    "https://colorsappproject.xyz/LAMPAPI/AddColor.php",
    true
  );

  expect(xhr.send).toHaveBeenCalledWith(
    JSON.stringify({ color: "Blue", userId: 5 })
  );
});
