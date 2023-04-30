
export type TMode = 'development' | 'production'

export interface IPaths {
    entry: string
    build: string
    html: string
}

export interface BuildOptions {
    isDev: boolean
    mode: TMode
    paths: IPaths
    port: number
}

export interface BuildEnv {
    mode: TMode
    port: number
}