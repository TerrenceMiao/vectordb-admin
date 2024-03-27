
// Imports
import * as _0_0 from "@api/root/src/api/collections/index.ts";
import * as _0_1 from "@api/root/src/api/index.ts";
import * as configure from "@api/configure";

export const routeBase = "/api";

const internal  = [
  _0_0.default && {
        source     : "src/api/collections/index.ts?fn=default",
        method     : "use",
        route      : "/collections/",
        path       : "/api/collections/",
        url        : "/api/collections/",
        cb         : _0_0.default,
      },
  _0_0.GET && {
        source     : "src/api/collections/index.ts?fn=GET",
        method     : "get",
        route      : "/collections/",
        path       : "/api/collections/",
        url        : "/api/collections/",
        cb         : _0_0.GET,
      },
  _0_0.PUT && {
        source     : "src/api/collections/index.ts?fn=PUT",
        method     : "put",
        route      : "/collections/",
        path       : "/api/collections/",
        url        : "/api/collections/",
        cb         : _0_0.PUT,
      },
  _0_0.POST && {
        source     : "src/api/collections/index.ts?fn=POST",
        method     : "post",
        route      : "/collections/",
        path       : "/api/collections/",
        url        : "/api/collections/",
        cb         : _0_0.POST,
      },
  _0_0.PATCH && {
        source     : "src/api/collections/index.ts?fn=PATCH",
        method     : "patch",
        route      : "/collections/",
        path       : "/api/collections/",
        url        : "/api/collections/",
        cb         : _0_0.PATCH,
      },
  _0_0.DELETE && {
        source     : "src/api/collections/index.ts?fn=DELETE",
        method     : "delete",
        route      : "/collections/",
        path       : "/api/collections/",
        url        : "/api/collections/",
        cb         : _0_0.DELETE,
      },
  _0_1.default && {
        source     : "src/api/index.ts?fn=default",
        method     : "use",
        route      : "/",
        path       : "/api/",
        url        : "/api/",
        cb         : _0_1.default,
      },
  _0_1.GET && {
        source     : "src/api/index.ts?fn=GET",
        method     : "get",
        route      : "/",
        path       : "/api/",
        url        : "/api/",
        cb         : _0_1.GET,
      },
  _0_1.PUT && {
        source     : "src/api/index.ts?fn=PUT",
        method     : "put",
        route      : "/",
        path       : "/api/",
        url        : "/api/",
        cb         : _0_1.PUT,
      },
  _0_1.POST && {
        source     : "src/api/index.ts?fn=POST",
        method     : "post",
        route      : "/",
        path       : "/api/",
        url        : "/api/",
        cb         : _0_1.POST,
      },
  _0_1.PATCH && {
        source     : "src/api/index.ts?fn=PATCH",
        method     : "patch",
        route      : "/",
        path       : "/api/",
        url        : "/api/",
        cb         : _0_1.PATCH,
      },
  _0_1.DELETE && {
        source     : "src/api/index.ts?fn=DELETE",
        method     : "delete",
        route      : "/",
        path       : "/api/",
        url        : "/api/",
        cb         : _0_1.DELETE,
      }
].filter(it => it);

export const routers = internal.map((it) => {
  const { method, path, route, url, source } = it;
  return { method, url, path, route, source };
});

export const endpoints = internal.map(
  (it) => it.method?.toUpperCase() + "\t" + it.url
);

export const applyRouters = (applyRouter) => {
  internal.forEach((it) => {
    it.cb = configure.callbackBefore?.(it.cb, it) || it.cb;
    applyRouter(it);
  });
};

