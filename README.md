# VectorDB Admin

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## How Vector Database work

![Vector Database](Vector%20Database.gif)

The input embedding vector:

$$
\left(\begin{array}{cc}
0\\
1\\
0\\
0
\end{array}\right)
$$

is multiplied by the weight matrix _**W**_:

$$
\left(\begin{array}{cc}
1 & 1 & 0 & 0\\
0 & 1 & 0 & 1\\
1 & 0 & 1 & 0\\
1 & -1 & 0 & 0
\end{array}\right)
$$

like:


$$
\left(\begin{array}{cc}
1 & 1 & 0 & 0\\
0 & 1 & 0 & 1\\
1 & 0 & 1 & 0\\
1 & -1 & 0 & 0
\end{array}\right)
\left(\begin{array}{cc}
0\\
1\\
0\\
0
\end{array}\right)
$$

and then added with the bias vector _**b**_:

$$
\left(\begin{array}{cc}
0\\
0\\
-1\\
0
\end{array}\right)
$$

The formula: _z_ = _Wx_ + _b_, _x_ is word embedding

```
[ 1 x 0 + 1 x 1 + 0 x 0 + 0 x 0 ] + 0 = 1

[ 0 x 0 + 1 x 1 + 0 x 0 + 1 x 0 ] + 0 = 1

[ 1 x 0 + 0 x 1 + 1 x 0 + 0 x 0 ] + (-1) = -1

[ 1 x 0 + (-1) x 1 + 0 x 0 + 0 x 0] + 0 = -1
```

$$
\left(\begin{array}{cc}
1\\
1\\
-1\\
-1
\end{array}\right)
$$

## Performance

Nodejs Package Manager `bun`, `npm`, `pnpnm` and `yarn` benchmark comparison:

|                    |  install  |   build   | run (ready) |
| :----------------- | --------: | --------: | ----------: |
| bun (ver 1.1.0)    | **5.53s** |   3.23s   |    125ms    |
| npm (ver 10.2.3)   |   6.00s   | **3.22s** |    124ms    |
| pnpm (ver 8.6.10)  |   6.60s   |  _3.52s_  |   _126ms_   |
| yarn (ver 1.22.19) | _45.27s_  |   3.24s   |  **122ms**  |


## References

- Chromadb Admin, _https://github.com/flanker/chromadb-admin_
- Deep Dive into Vector Databases by Hand, _https://towardsdatascience.com/deep-dive-into-vector-databases-by-hand-e9ab71f54f80_