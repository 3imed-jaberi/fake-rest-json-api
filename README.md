# FAKE REST API 

Fake REST API for front end testing using JSON format 🧶 .. 


### `Prerequisites`

  - ✨ Node.js v10+ (required)
  - 🧬 Git (optional)

### `Usage`

Follow these steps to be able to run this project;

  1. Open your terminal (e.g `Terminal`, `PowerShell`, `iTerm2`, `Git Bash`).
  2. Go to the path that you want to use for the project (e.g `~/Desktop`).
  3. I prefer to use __Git__ to clone this module but you can click the 
  download button <br /> <`git clone https://github.com/3imed-jaberi/fake-rest-json-api.git`>.
  4. Navigate to the cloned repository <`cd fake-rest-json-api`>.
  5. Install dependencies by run this command <`npm i` or `yarn`>.
  6. Now, you can run one of this scripts (`useJSON`, `useDefaultJSON`,
  `useModel`, `useDefaultModel`).
      - useJSON: create your API by your specific `.json` file <br />
    <`npm run useJSON xxx.json` or `yarn run useJSON xxx.json`>.
      - useDefaultJSON: use `db.json` file to create your API <br />
    <`npm run useDefaultJSON` or `yarn run useDefaultJSON`>.
      - useModel: create your API by your specific `.js` file <br />
    <`npm run useModel xxx.js` or `yarn run useModel xxx.js`>.
      - useDefaultModel: use `index.js` file to create your API <br />
    <`npm run useDefaultJSON` or `yarn run useDefaultJSON`>.
  7. If you have cURL or Postman, you can use them to test the endpoint. <br/>
  Or simply open your browser and copy the path from the text shown at the terminal.

**👀 See [Here](https://github.com/typicode/json-server/blob/master/README.md) For more options.**

### `Guides`

<details>
  <summary>
    <b> JSON Guide </b>
  </summary>
  <pre>
    {
      "entrypoint": [ // --> /entrypoint
        {
          "data": "xxxx"
        },
        ... // other data
      ],
      "home": [ // --> /home
        {
          "name": "xxxx"
        },
        ... // other data
      ],
      ... // other entrypoints
    }
  </pre>
</details>

<details>
  <summary>
    <b> JS Guide </b>
  </summary>
  <pre>
    function generateModel() { // --> /entrypoint
      // use your logic here .. 
      // you can use 'faker' module ..
      const entrypoint = [
        ...entrypoint,
        {
          // data
        }
      ];

      return { entrypoint };
    }

    module.exports = generateModel;
  </pre>
</details>

#### LICENSE

[MIT](LICENSE)