# UserAuth_Auth0_React
A small web-app describing the auth0 authentication

### Auth0 Authentication Provider:
Auth0 auth provider is a third-party authentication provider by Okta.It has many features like authentication with vaious social identity providers (google,microsoft etc.).
`Auth0 can be more helpful when we need to provide the authentication to our app within no time.`

To install auth0 in react use:
```
npm i @auth0/auth-react
```
Auth0 provides two authentication ways:
- universal login(🎯present app uses this) 
- embedded login

In this login the login is done by auth0 by redirecting to the login page curated by auth0.

Auth0Provider is a component provided by the auth0 to configure the domain and clientId for the auth0 redirection and usage.
To configure follow:
```
import {Auth0Provider} from '@auth0/auth0-react;

const Component=()=>{
  return(
      <Auth0Provider 
        domain={#add domain},
        clientId={#add clientId},
        authorizationParams={#add params}
      >
      {#wrap all the other components used for authentication}
      </Auth0Provider>
  );
  
  export default Component;
}
```


methods useful:
```
import {loginWithRedirect,isAuthenticated,user,logout} from '@auth0/auth0-react'

//loginWitRedirect method is used to redirect to auth0 login/signup page.

//isAuthenticated method is used to check if the user is authenticated or not.

//user is used to get the user details. Once, the user is autheticated.
```

`Note: Auth0 is a paid authentication provider. But, it provides some features for free with some limitations`

Need more check in [auth0 docs](https://auth0.com/docs)

