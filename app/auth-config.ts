import { LogLevel, Configuration, BrowserCacheLocation } from '@azure/msal-browser';

const isIE = window.navigator.userAgent.indexOf("MSIE ") > -1 || window.navigator.userAgent.indexOf("Trident/") > -1;
 
export const b2cPolicies = {
     names: {
         signUpSignIn: "B2C_1_susi1",
         editProfile: "B2C_1_edit-profile"
     },
     authorities: {
         signUpSignIn: {
             authority: 'https://GreenTea279.b2clogin.com/GreenTea279.onmicrosoft.com/B2C_1_susi1',
         },
         editProfile: {
             authority: "https://GreenTea279.b2clogin.com/GreenTea279.onmicrosoft.com/B2C_1_edit-profile"
         }
     },
     authorityDomain: "GreenTea279.b2clogin.com"
 };
 
 
export const msalConfig: Configuration = {
     auth: {
         clientId: '0217c403-0c1d-46c1-9dc0-2d2a6b256c78',
         authority: b2cPolicies?.authorities?.signUpSignIn.authority,
         knownAuthorities: [b2cPolicies.authorityDomain],
         redirectUri: '/', 
     },
     cache: {
         cacheLocation: BrowserCacheLocation.LocalStorage,
         storeAuthStateInCookie: isIE, 
     },
     system: {
         loggerOptions: {
            loggerCallback: (logLevel, message, containsPii) => {
                console.log(message);
             },
             logLevel: LogLevel.Verbose,
             piiLoggingEnabled: false
         }
     }
 }

export const protectedResources = {
  todoListApi: {
    endpoint: "http://localhost:5000/api/todolist",
    scopes: ["https://GreenTea279.onmicrosoft.com/api/tasks.read"],
  },
  generalApi: {
    endpoint: "http://localhost:5000/api/todolist",
    scopes: ["https://GreenTea279.onmicrosoft.com/general-api/general.read", "https://GreenTea279.onmicrosoft.com/general-api/general.write"],
  },
}
export const loginRequest = {
  scopes: []
};