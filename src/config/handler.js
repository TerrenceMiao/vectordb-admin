
import express from "express";
import { applyRouters } from "@api/routers";
import * as configure from "./configure";

export const handler = express();

configure.handlerBefore?.(handler);

applyRouters(
  (props) => {
    const { method, route, path, cb } = props;
    if (handler[method]) {
      if(Array.isArray(cb)) {
        handler[method](route, ...cb);
      } else {
        handler[method](route, cb);
      }
    } else {
      console.log("Not Support", method, "for", route, "in", handler);
    }
  }
);

configure.handlerAfter?.(handler);

