import {main, module} from './package.json'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from "@rollup/plugin-commonjs"
import typescript from "@rollup/plugin-typescript"
import peer from 'rollup-plugin-peer-deps-external'
import dts from 'rollup-plugin-dts'
import postcss from 'rollup-plugin-postcss'
import del from "rollup-plugin-delete"

export default [
    {
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
            del({
                targets: 'dist/*'
            }),
            resolve(),
            commonjs(),
            peer(),
            typescript({
                tsconfig: './tsconfig.json'
            }),
            postcss()
        ]
    },
    {
        input: 'dist/esm/types/index.d.ts',
        output: [
            {
                file: 'dist/index.d.ts',
                format: 'esm'
            },
        ],
        external: [/\.css$/],
        plugins: [dts()],
    }
]
