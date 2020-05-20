---
lang: en
title: 'API docs: express.registermiddleware'
keywords: LoopBack 4.0, LoopBack 4
sidebar: lb4_sidebar
editurl: https://github.com/strongloop/loopback-next/tree/master/packages/express
permalink: /doc/en/lb4/apidocs.express.registermiddleware.html
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@loopback/express](./express.md) &gt; [registerMiddleware](./express.registermiddleware.md)

## registerMiddleware() function

Bind the middleware function or provider class to the context

<b>Signature:</b>

```typescript
export declare function registerMiddleware(ctx: Context, middleware: Middleware | Constructor<Provider<Middleware>>, options: MiddlewareBindingOptions): Binding<Middleware>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  ctx | [Context](./context.context.md) | Context object |
|  middleware | [Middleware](./express.middleware.md) \| [Constructor](./context.constructor.md)<!-- -->&lt;[Provider](./context.provider.md)<!-- -->&lt;[Middleware](./express.middleware.md)<!-- -->&gt;&gt; | Middleware function or provider class |
|  options | [MiddlewareBindingOptions](./express.middlewarebindingoptions.md) | Middleware binding options |

<b>Returns:</b>

[Binding](./context.binding.md)<!-- -->&lt;[Middleware](./express.middleware.md)<!-- -->&gt;

