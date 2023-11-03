import {loadDefaultJapaneseParser} from 'budoux'

const parser = loadDefaultJapaneseParser()

export let useBudouX: () => {
    parse: (text: string) => JSX.Element[]
};

useBudouX = function (): { parse: (text: string) => JSX.Element[] } {
    const parse = (text: string) => {
        return parser.parse(text).map(
            (s: string) => (
                <span
                    key={s}
                    className="inline-block">{s}
            </span>
            )
        )
    }
    return {
        parse
    }
};