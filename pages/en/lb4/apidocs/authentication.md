---
lang: en
title: 'API docs: authentication'
keywords: LoopBack 4.0, LoopBack 4, Node.js, TypeScript, OpenAPI
sidebar: lb4_sidebar
editurl: https://github.com/loopbackio/loopback-next/tree/master/packages/authentication
permalink: /doc/en/lb4/apidocs.authentication.html
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@loopback/authentication](./authentication.md)

## authentication package

A LoopBack 4 component for authentication support.

## Remarks

The core logic for the authentication layer in LoopBack 4.

It contains:

- A decorator to express an authentication requirement on controller methods - A provider to access method-level authentication metadata - An action in the REST sequence to enforce authentication - An extension point to discover all authentication strategies and handle the delegation

## Classes

|  Class | Description |
|  --- | --- |
|  [AuthenticateActionProvider](./authentication.authenticateactionprovider.md) | Provides the authentication action for a sequence |
|  [AuthenticationComponent](./authentication.authenticationcomponent.md) |  |
|  [AuthenticationMiddlewareProvider](./authentication.authenticationmiddlewareprovider.md) |  |
|  [AuthenticationStrategyProvider](./authentication.authenticationstrategyprovider.md) | An authentication strategy provider responsible for resolving an authentication strategy by name.<!-- -->It declares an extension point to which all authentication strategy implementations must register themselves as extensions. |
|  [AuthMetadataProvider](./authentication.authmetadataprovider.md) | Provides authentication metadata of a controller method |

## Functions

|  Function | Description |
|  --- | --- |
|  [authenticate(strategies)](./authentication.authenticate.md) | Mark a controller method as requiring authenticated user. |
|  [getAuthenticateMetadata(targetClass, methodName)](./authentication.getauthenticatemetadata.md) | Fetch authentication metadata stored by <code>@authenticate</code> decorator. |
|  [getAuthenticationMetadataForStrategy(metadata, strategyName)](./authentication.getauthenticationmetadataforstrategy.md) | Get the authentication metadata object for the specified strategy. |
|  [registerAuthenticationStrategy(context, strategyClass)](./authentication.registerauthenticationstrategy.md) | Registers an authentication strategy as an extension of the AuthenticationBindings.AUTHENTICATION\_STRATEGY\_EXTENSION\_POINT\_NAME extension point. |

## Interfaces

|  Interface | Description |
|  --- | --- |
|  [AuthenticateFn](./authentication.authenticatefn.md) | interface definition of a function which accepts a request and returns an authenticated user |
|  [AuthenticationMetadata](./authentication.authenticationmetadata.md) | Authentication metadata stored via Reflection API |
|  [AuthenticationOptions](./authentication.authenticationoptions.md) | Options for authentication component |
|  [AuthenticationStrategy](./authentication.authenticationstrategy.md) | An interface that describes the common authentication strategy.<!-- -->An authentication strategy is a class with an 'authenticate' method that verifies a user's credentials and returns the corresponding user profile. |
|  [TokenService](./authentication.tokenservice.md) | An interface for generating and verifying a token |
|  [UserIdentityService](./authentication.useridentityservice.md) | The User Identity service links a user to profiles from an external source (eg: ldap, oauth2 provider, saml) which can identify the user. The profile typically has the following information: name, email-id, uuid, roles, authorizations, scope of accessible resources, expiration time for given access |
|  [UserProfileFactory](./authentication.userprofilefactory.md) | interface definition of a factory function which accepts a user definition and returns the user profile |
|  [UserService](./authentication.userservice.md) | A service for performing the login action in an authentication strategy.<!-- -->Usually a client user uses basic credentials to login, or is redirected to a third-party application that grants limited access.<!-- -->Note: The creation of user is handled in the user controller by calling user repository APIs. For Basic auth, the user has to register first using some endpoint like <code>/register</code>. For 3rd-party auth, the user will be created if login is successful and the user doesn't exist in database yet.<!-- -->Type <code>C</code> stands for the type of your credential object.<!-- -->- For local strategy:<!-- -->A typical credential would be: { username: username, password: password }<!-- -->- For oauth strategy:<!-- -->A typical credential would be: { clientId: string; clientSecret: string; callbackURL: string; }<!-- -->It could be read from a local configuration file in the app<!-- -->- For saml strategy:<!-- -->A typical credential would be:<!-- -->{ path: string; issuer: string; entryPoint: string; }<!-- -->It could be read from a local configuration file in the app. |

## Namespaces

|  Namespace | Description |
|  --- | --- |
|  [authenticate](./authentication.authenticate.md) |  |
|  [AuthenticationBindings](./authentication.authenticationbindings.md) | Binding keys used by this component. |

## Variables

|  Variable | Description |
|  --- | --- |
|  [asAuthStrategy](./authentication.asauthstrategy.md) | A binding template for auth strategy contributor extensions |
|  [AUTHENTICATION\_METADATA\_CLASS\_KEY](./authentication.authentication_metadata_class_key.md) | The key used to store class-level metadata for <code>@authenticate</code> |
|  [AUTHENTICATION\_METADATA\_KEY](./authentication.authentication_metadata_key.md) | Alias for AUTHENTICATION\_METADATA\_METHOD\_KEY to keep it backward compatible |
|  [AUTHENTICATION\_METADATA\_METHOD\_KEY](./authentication.authentication_metadata_method_key.md) | The key used to store method-level metadata for <code>@authenticate</code> |
|  [AUTHENTICATION\_STRATEGY\_NOT\_FOUND](./authentication.authentication_strategy_not_found.md) |  |
|  [USER\_PROFILE\_NOT\_FOUND](./authentication.user_profile_not_found.md) |  |


