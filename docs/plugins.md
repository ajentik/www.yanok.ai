# Plugins

**Yanok Gab Plugins** allow you to extend the capabilities of the AI assistant by providing external tools. To get started, click the “Plugins” button on the start screen.

![plugin_1.png](Plugins%2005f741f780804a8bacd03252a1ab0a46/plugin_1.png)

![plugin_2.png](Plugins%2005f741f780804a8bacd03252a1ab0a46/plugin_2.png)

<aside>
💡 **Note:**

Yanok Gab Plugins is currently in beta. This document will soon have more sections.

</aside>

# Build a Plugin

Yanok Gab Plugins allow you to add new capabilities for the AI models. Plugins works using the OpenAI Function Calling API specifications. Yanok Gab also support running plugins for other models like Gemini and Claude. Plugins can be implemented using **JavaScript code** or define a **HTTP Actions.**

Requirements for developing a plugin:

- You can write code in JavaScript (if implemented via JavaScript)
- Basic understand of HTTP requests (if implemented via HTTP Actions)
- You understand the [**OpenAI Function Calling API**](https://openai.com/blog/function-calling-and-other-api-updates)

Click “Create New Plugin” to start creating your own plugins.

![plugin_3.png](Plugins%2005f741f780804a8bacd03252a1ab0a46/plugin_3.png)

Enter the relevant information about the plugin.

- **Plugin Name:** to be shown to the user.
- **Overview:** introduction about the plugin and how to use it. Markdown is supported.

The two most important parts of developing a plugin is to provide an **OpenAI Function Spec** and the **Code Implementation**.

## **OpenAI Function Spec**

✅ **Make sure it’s in the correct JSON format.**

Follow the instructions in [**OpenAI document](https://openai.com/blog/function-calling-and-other-api-updates)** to understand how to write one. You can see the spec of existing plugins like Simple Calculator, JavaScript Interpreter, or the Generate Random Number example plugin below for reference.

✅ **Unique Function Name**

Note that the `name` field of the spec must be **unique across all plugins you currently have**. This is because OpenAI API will use this name to call the function, having multiple functions with the same name will confuse the AI.

✅ **Use meaningful names & descriptions**

It’s important to provide a meaningful function name, function description, parameter name, parameter description, etc.The AI will use these names and descriptions to understand and decide when to use your function. Providing a meaningful and accurate name will help the AI use your function/plugin better.

✅ **Example of a JSON OpenAI Function Spec:**

```jsx
{
  "name": "generate_random_number_in_range",
  "description": "Generate a random integer number between number 'a' and number 'b'.",
  "parameters": {
    "type": "object",
    "properties": {
      "a": {
        "type": "number",
        "description": "The number a (the smaller number)"
      },
      "b": {
        "type": "number",
        "description": "The number b (the larger number)"
      }
    },
    "required": [
      "a",
      "b"
    ]
  }
}
```

## **Plugin User Settings (JSON)**

User Settings allows you to define necessary input fields for your plugin which would be filled by the users. The parameters in this section accept JSON formatted strings.

An example of the JSON format:

```jsx
[
  {
    "name": "searchEngineID",
    "label": "Search Engine ID"
  },
  {
    "name": "searchEngineAPIKey",
    "label": "Search Engine API Key",
    "type": "password"
  },
	{
	  "name": "quality",
	  "label": "Quality",
	  "description": "Optional, default: \"standard\"",
	  "type": "enum",
	  "values": [
	    "standard",
	    "hd"
	  ]
	}
]
```

This tells the UI to render input fields where users can enter their own specific data. Each object in the array represents a single user input field.
Here's what each key represents:

- **name:** This is the identifier the plugin will use to retrieve the user's input.
- **label:** This is the label displayed to the user to help identify what information should be entered. Try to make this intuitive and relevant to the data you're asking for.
- **required (optional)**: must be a boolean value of `true` or `false` , indicate whether the field is required or not. Default `false`.
- **description (optional):** Displayed as a small text under the label. Use this to clarify other information related to the field.
- **type (optional):** This is used to specify the type of data expected from the users. For instance, input type could be `password`, `email`, `number`, `enum` . By default, if not specified, the type is assumed to be `text`.
- **placeholder (optional):** The placeholder text to be shown in the input field.
- **values (optional):** Only take effect when type is `enum`, this must be an array of strings of allowed value for the field.

To use these settings within your plugin, you can access them from the user's input and either store them for later use or use them immediately as needed.

## **Implementation: JavaScript Code**

You can implement your plugin using JavaScript code. The code will be run directly on the user’s browser. Below are the details.

✅ **Make sure it’s a valid JavaScript**

Write the function implementation in JavaScript. You can use `async` functions if necessary.

✅ **Make sure the function name match**

It’s important that you define a function with the exact same name as defined in the JSON spec at the top level. For example, if you have `"name": "get_calculation_result"` in your JSON spec, then the code must have a function named `get_calculation_result` defined at the top level.

**✅ Only two parameters**

By OpenAI’s convention, your function always accept only two

parameters, both of type `object` .

- First parameter (`params`): The parameter created by the AI assistant every time your function is created. The object contains multiple key/value pairs that the AI will decide when they execute your function.
- Second parameter (`userSettings`): If your plugin has a User Settings (discussed in a later section), the key/value pair of the user settings will be passed into this object.

Example:

```jsx
async function get_search_results(params, userSettings) {
  const { keyword, pages } = params;
  const { searchAPIKey } = userSettings;
  const result = ...  // your code here...
  return result;
}
```

✅ **Execution Environment**

The code will be executed directly in your local browser, there is no server component. A sandbox environment will be created for the code by using `<iframe sandbox="allow-scripts">` . This sandbox environment provides some level of isolation, privacy, and security for the plugin code. Learn what you can and cannot do in an iframe sandbox [**here**](https://web.dev/sandboxed-iframes/).

If you are using someone else’s code, make sure you read and understand what it does. Never use untrusted code in your plugin.

**✅ Be aware of CORS issues**

Because the code is executed locally on your browser, if you decide to send a request to an external server, make sure that external server is configured correctly to accept the requests without any CORS related issues.

**✅ Example code of a plugin:**

```jsx
function generate_random_number_in_range({a, b}) {
    var min = Math.ceil(a);
    var max = Math.floor(b);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
```

**✅ Error & Exception handling**

If there is an error or exception while running your plugin, you should throw it using `throw new Error("User friendly message here")`. This way, the app will show the message `"User friendly message here"` to the end user. The AI will also see this error message and may attempt to run the plugins again with a different parameter if needed.

If your error is throw correctly, the app will display the error message like this:

![error_message .png](Plugins%2005f741f780804a8bacd03252a1ab0a46/error_message_.png)

## **Access User Settings in Plugin JavaScript Code**

Once you've defined user settings for your plugin, the next step is to retrieve those values within your plugin's function. User settings are passed into your function as its second parameter.
Here's how you can access user settings from your function:

```jsx
function search_images_via_google(params, userSettings) {
  // Your code here
}
```

In the above example, `search_images_via_google` is the function that gets called in your plugin. You see that `params` is the first parameter and `userSettings` is the second parameter:

- `params` is an object that contains the runtime parameters passed by the AI or users.
- `userSettings` is the object that contains all the custom settings configured by the user.

The `userSettings` parameter is essentially an object where the keys are the names of the user settings you previously defined and the value is whatever the user provided for those settings.

For instance, if you have the following user settings:

```jsx
[
  {
    "name": "searchEngineID",
    "label": "Search Engine ID"
  },
  {
    "name": "searchEngineAPIKey",
    "label": "Search Engine API Key",
    "type": "password"
  }
]
```

You can retrieve those settings in your function as follows:

```jsx
function search_images_via_google(params, userSettings) {
  const searchEngineID = userSettings.searchEngineID;
  const searchEngineAPIKey = userSettings.searchEngineAPIKey;

  // Now you can use these values in your code
}
```

In this example, `searchEngineID` and `searchEngineAPIKey`

are keys within the `userSettings` object, and the corresponding values are what the user provided in the settings fields.

By accessing user settings in this way, you add a layer of customization to your plugin, enabling it to cater to the specific needs and preferences of different users.

## **Implementation: HTTP Action**

Another option to implement your plugin is **HTTP Action**.

When the plugin runs, it will send a request from the user’s browser using the information provided.

![http_action.png](Plugins%2005f741f780804a8bacd03252a1ab0a46/http_action.png)

- HTTP Method
- Endpoint URL
- Headers (optional)
- Body (optional)
- Post-Processing (optional)

## **Access User Settings in HTTP Action**

User settings and call parameters are accessible via template parameters like `{param1}`, `{param2}`, etc.Within the endpoint URL, headers, and body, you can use these variables to customize the requests. Variables comes from OpenAI Function Spec’s parameters and from User Settings.For example, in the DALL-E 3 server plugin:

- the variable `{openaikey}` is used in the request headers
- the variables `{prompt}`, `{resolution}`, `{quality}` is used the request body.

The `{prompt}` parameter is provided by the AI when using the plugin, the other parameters are provided by the user via the plugin setting UI.

![variables.png](Plugins%2005f741f780804a8bacd03252a1ab0a46/variables.png)

In the example above, all variables are used in a string value to be valid in JSON format. But for number variables, you might want to use them directly as a value, not between the double quotes, we support an exception for that case:

![request_body.png](Plugins%2005f741f780804a8bacd03252a1ab0a46/request_body.png)

## **Built-in variables for HTTP Action on server side**

When running an HTTP Action on server side (server plugin), your plugin has access to the following built-in variables:

| Variable | Description |
| --- | --- |
| CHAT_ID | Unique identifier of a chat (current conversation) where the plugin is used. |
| USER_ID | Unique identifier of the user who is using the plugin. |
| OAUTH_USER_ID_TOKEN | The id_token of the user. Only available if the current user is authenticated using https://docs.typingmind.com/typingmind-custom/user-management/setup-oauth-2.0. |
| OAUTH_USER_ACCESS_TOKEN | The access_token of the user. Only available if the current user is authenticated using https://docs.typingmind.com/typingmind-custom/user-management/setup-oauth-2.0. |

## **HTTP Action Post-Processing**

**Post-Processing** can be used to transform the HTTP response to your desired output. This is helpful to trim the response down only the useful information, saving the number of tokens used.Typing Mind supports two Post-Processing engines:

- **JMESPath Transform** ([**docs**](https://jmespath.org/)): Useful to filter a big JSON response to a smaller JSON.
- **Handlebars.js Template** ([**docs**](https://handlebarsjs.com/guide/)): Useful to rewrite the JSON response into a different format like Markdown or HTML.

For example, here is how the DALLE-3 plugin uses Handlebars.js template to transform the JSON response into a Markdown document to be rendered to the user:

![post_processing.png](Plugins%2005f741f780804a8bacd03252a1ab0a46/post_processing.png)

You can also use all variables in this post-processing via a special property called `__VARIABLES` (Only support for object responses):

![__variables.png](Plugins%2005f741f780804a8bacd03252a1ab0a46/__variables.png)

## **Test your HTTP Action**

To make sure the HTTP requests are working normally, you can send a test request with test variables.
The test result will be what the AI model see (or what will be rendered to the user, depends on your plugin setting).

![test.png](Plugins%2005f741f780804a8bacd03252a1ab0a46/test.png)

## **Output Options**

You can setup your plugin to output the result directly to the AI, or render the output directly to the users using Markdown or HTML.

This can be configured in the Output Options. The supported output types are:

- Give plugin output to the AI
- Render plugin output as markdown
- Render plugin output as interactive HTML

![output.png](Plugins%2005f741f780804a8bacd03252a1ab0a46/output.png)

## **When to use custom output**

Normally, the return value of your plugin will be passed directly to the AI, then the AI will decide how to answer the user based on the returned value.However, in some cases, you prefer to render the output to the users directly by yourself.

For example, the **DALL-E 3** plugin will render the generated images directly to the users in Markdown format. This saves time for the users because the AI will not need to “type” the long image URLs manually after it received the return value from the plugin.

![custom_output.png](Plugins%2005f741f780804a8bacd03252a1ab0a46/custom_output.png)

In order to do this, the **DALL-E 3** plugin uses the “**Render plugin output as markdown**” option.

![markdown.png](Plugins%2005f741f780804a8bacd03252a1ab0a46/markdown.png)

## **Test your plugin**

After filling in all the information, click “Save” and enable your newly created plugin.
Then, you can process to chat with the AI.
Note that the AI will decide to use your plugin only when necessary. Make sure your JSON spec has meaningful and accurate names and description.

<aside>
💡 **Hallucination problem**: Sometimes, the AI assistant hallucinates and try to call your function with incorrect parameter, or even attempt to call function names that does not exists. This is a known issue and there is not much we can do about this. Just click “Regenerate” and let the AI assistant try again.

</aside>

![plugin_4.png](Plugins%2005f741f780804a8bacd03252a1ab0a46/plugin_4.png)

![plugin_5.png](Plugins%2005f741f780804a8bacd03252a1ab0a46/plugin_5.png)

## **Limitations**

- When using JavaScript implementation, your plugins are run on the browser on the client side in a sandboxed iframe. Some JavaScript features may not be available.
- Your plugins can send HTTP requests to external services, however, the destination server must be configured to allow CORS requests from Yanok Gab. If CORS requests are not allowed, you will need an intermediate server to process the requests. Some API servers allow CORS requests from everywhere – like Perplexity API, or Open AI – so the intermediate server is not needed in these cases.

# **Use Web search and Image search**

To enable the Web Search feature on Yanok Gab with the Programmable Search Engine, you need to get the following info:

- Search Engine ID.
- Custom Search API Key.

Here is how to do it.

1. Go to [**https://programmablesearchengine.google.com**](https://programmablesearchengine.google.com/about/), click **Get Started.**
    
    ![web_1.png](Plugins%2005f741f780804a8bacd03252a1ab0a46/web_1.png)
    
2. Create a new search engine and give it a name
    
    In the **Want to search?** section, select **Search the Entire web**
    
    ![web_2.png](Plugins%2005f741f780804a8bacd03252a1ab0a46/web_2.png)
    
3. Once your new search engine is created, click **Customize**
    
    ![web_3.png](Plugins%2005f741f780804a8bacd03252a1ab0a46/web_3.png)
    
4. **Copy the search engine ID** and save it into a safe place for later use on Yanok Gab
    
    ![web_5.png](Plugins%2005f741f780804a8bacd03252a1ab0a46/web_5.png)
    
5. Scroll down, under the **Search features** section, enable **both Image Search and Web Search.**
    
    ![web_6.png](Plugins%2005f741f780804a8bacd03252a1ab0a46/web_6.png)
    
6. Scroll down to “**Programmatic Access**” and click “**Get started**”
    
    ![web_7.png](Plugins%2005f741f780804a8bacd03252a1ab0a46/web_7.png)
    
7. Click “**Get a Key**” to get your search API key
    
    ![web_8.png](Plugins%2005f741f780804a8bacd03252a1ab0a46/web_8.png)
    
8. **Create a new project**
    
    ![web_9.png](Plugins%2005f741f780804a8bacd03252a1ab0a46/web_9.png)
    
9. Click **Next**, an API key will be generated, copy and also save into a safe place.
    
    ![web_10.png](Plugins%2005f741f780804a8bacd03252a1ab0a46/web_10.png)
    
10. **Enter the Search Engine ID and API key on Yanok Gab**
- Click the **Plugin** icon on the top left corner of the app, next to the model settings
- Choose **Web Search** to open the plugin settings
- Switch to the tab **Settings** and enter your Search **Engine ID and API key**.

# Share Plugins

Looking to share plugins? This guide will provide the easiest steps to do so.

## **Share a plugin**

**Share as URL and JSON**

1. Open **Plugins**
2. Click on the “**Share**” button on the top right corner of the plugin (under the three dots menu).
    
    ![share_1.png](Plugins%2005f741f780804a8bacd03252a1ab0a46/share_1.png)
    
3. There will be 2 options to share your plugins:
    - Share via a unique URL
    - Share as JSON
    
    Simply copy the generated link/JSON file and share
    

## **Share via GitHub**

To share a plugin via GitHub:

1. Create a public repo on GitHub
2. Create 3 files: `README.md` , `implementation.js` and `plugin.json`:
    - `README.md`: plugin overview
    - `implementation.js`: this file contains the JS code, it is only required if you use Javascript code implementation. It must contain a function with the name as same as the id in plugin.json file
    - `plugin.json`: a JSON file containing all configs of the plugin, please check [**this guide**](https://docs.typingmind.com/plugins/build-a-typingmind-plugin) to understand more. It has the following properties:
        - `version`: number, for other users to notice to update
        - `uuid`: string, this is the unique id to distinguish plugins
        - `iconURL`: string
        - `emoji`: string, this will be used if `iconURL` is not available
        - `title`: string, the displayed name of the plugin
        - `userSettings`: JSON string, check details in [**this guide**](https://docs.typingmind.com/plugins/build-a-typingmind-plugin#0e3d2ca8c78f4b62b1a8504957bbb268)
        - `openaiSpec`: JSON string, check details in [**this guide**](https://docs.typingmind.com/plugins/build-a-typingmind-plugin#f75675f108634820be70b39319cafb08)
        - `implementationType`: string, `"http"` or `"javascript"`
        - `httpAction`: JSON string, required if the implementation is HTTP, check details in [**this guide**](https://docs.typingmind.com/plugins/build-a-typingmind-plugin#f8f5759520614775aaf136c279931e76)
            - `id`: string, uuid preferred
            - `method`: string, the request method
            - `url`: string
            - `hasHeaders`: boolean
            - `requestHeaders`: JSON, required if hasHeaders is true
            - `hasBody`: boolean
            - `requestBody`: JSON, required if hasBody is true
            - `requestBodyFormat`: string, `"json"` or `"form-data"`
            - `hasResultTransform`: boolean
            - `resultTransform`: object, required if hasResultTransform is true, its shape is either of these:
            
            ```json
            {
              "engine": "handlebars",
              "templateString": "string template value"
            }
            ```
            
            ```json
            {
              "engine": "jmes",
              "expression": "string expression value"
            }
            ```
            
            - `outputType`: string, `"render_markdown"` or `"respond_to_ai"` or `"render_html"`
3. Get the GitHub repo link to share