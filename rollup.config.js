import {main, module} from './package.json'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from "@rollup/plugin-commonjs"
import typescript from "@rollup/plugin-typescript"
import peer from 'rollup-plugin-peer-deps-external'
import dts from 'rollup-plugin-dts'

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
            resolve(),
            commonjs(),
            peer(),
            typescript({
                tsconfig: './tsconfig.json'
            }),
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
