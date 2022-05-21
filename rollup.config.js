import {main, module} from './package.json'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from "@rollup/plugin-commonjs"
import typescript from "@rollup/plugin-typescript"

export default {
    input: 'src/index.ts',
    output: [
        {
            file: main,
            format: 'cjs',
            sourcemap: true,
            name: 'ma-rollup-uikit'
        },
        {
            file: module,
            format: 'esm',
            sourcemap: true,
        }
    ],
    plugins: [
        resolve(),
        commonjs(),
        typescript()
    ]
}
